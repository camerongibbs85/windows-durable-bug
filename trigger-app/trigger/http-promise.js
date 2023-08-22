// source: https://gist.github.com/ktheory/df3440b01d4b9d3197180d5254d7fb65

const http = require('http')

module.exports = (urlOptions, data = '') => new Promise((resolve, reject) => {
    const req = http.request(urlOptions, res => {
        const chunks = []

        res.on('data', chunk => chunks.push(chunk))
        res.on('error', reject)
        res.on('end', () => {
            const { statusCode, headers } = res
            const validResponse = statusCode >= 200 && statusCode <= 299
            const body = chunks.join('')

            if (validResponse) resolve({ statusCode, headers, body })
            else reject(new Error(`Request failed. status: ${statusCode}, body: ${body}`))
        })
    })

    req.on('error', reject)
    req.write(data, 'binary')
    req.end()
})