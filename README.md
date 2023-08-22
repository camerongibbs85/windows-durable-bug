# windows-durable-bug
A small Azure Function App project demonstrating the inability for multiple function apps to call each other when run locally on Windows

see the following [issue](https://github.com/Azure/azure-functions-core-tools/issues/3435) on Azure/azure-functions-core-tools repo

# running
 - Install VSCode
   - Install the `Azurite` Extension
   - Install the `Azure Functions` Extension
 - Install NodeJS for Windows
   - I use NVM for windows
     - `winget install CoreyButler.NVMforWindows`
     - `nvm install lts`
 - right click `windows-durable-bug.code-workspace` and open with VSCode
 - start the Azurite Services (Table, Queue, Blob)
   - choose the `azurite` folder for each, it will ask because you're in a multi-project workspace
 - go to the debugging blade
   - choose `Attach to APIs (workspace)` from the dropdown
   - press the Play button
 - each app will launch in its own terminal
 - place a breakpoint in `./trigger-app/trigger/index.js` inside the `catch` block
 - in the `trigger-app` terminal, `CTRL+Click` the HTTP Trigger url to launch the browser
   - the `catch` block breakpoint will be hit, inspect the `err`
  
# note
I have included the `local.settings.json` files for ease of setup because they contain no secrets, that is not advised in a real project.
