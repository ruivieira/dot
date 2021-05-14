import { exec, IExecResponse } from "https://deno.land/x/exec/mod.ts";
import * as Colors from  "https://deno.land/std/fmt/colors.ts";


console.log(Colors.yellow("Updating brew"))
await exec('brew update');
console.log(Colors.green("Done!"))

const brewPackages = ['r', 'micro', 'restic', 'starship', 'syncthing', 'sass/sass/sass']
console.log(Colors.yellow(`Installing ${brewPackages.join(", ")}`))
const cmd = `brew install ${brewPackages.join(" ")}`
await exec(cmd);
console.log(Colors.green("Done!"))

const brewCasks = ['keepassxc', 'rstudio']
console.log(Colors.yellow(`Installing casks ${brewCasks.join(", ")}`))
for (const cask of brewCasks) {
    await exec(`brew install --cask ${cask}`)
}
console.log(Colors.green("Done!"))