const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    const outputs = [];

    outputs.push(yield context.df.callActivity("hello", "Tokyo"));
    outputs.push(yield context.df.callActivity("hello", "Seattle"));
    outputs.push(yield context.df.callActivity("hello", "London"));

    return outputs;
});