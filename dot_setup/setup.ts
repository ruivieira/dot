import { exec, IExecResponse } from "https://deno.land/x/exec/mod.ts";
import * as Colors from "https://deno.land/std/fmt/colors.ts";


console.log(Colors.yellow("Updating brew"));
await exec("brew update");
console.log(Colors.green("Done!"));

const brewPackages = [
  "r",
  "micro",
  "restic",
  "starship",
  "syncthing",
  "sass/sass/sass",
];
console.log(Colors.yellow(`Installing ${brewPackages.join(", ")}`));
const cmd = `brew install ${brewPackages.join(" ")}`;
await exec(cmd);
console.log(Colors.green("Done!"));

const brewCasks = ["keepassxc", "rstudio", "vscodium"];
console.log(Colors.yellow(`Installing casks ${brewCasks.join(", ")}`));
for (const cask of brewCasks) {
  await exec(`brew install --cask ${cask}`);
}
console.log(Colors.green("Done!"));

const vscodeExtensions = [
  "aaronduino.gemini",
  "arthurwang.vsc-prolog",
  "ban.spellright",
  "bierner.emojisense",
  "bierner.markdown-emoji",
  "bungcip.better-toml",
  "chenglou92.rescript-vscode",
  "crystal-lang-tools.crystal-lang",
  "dawhite.mustache",
  "deerawan.vscode-dash",
  "denoland.vscode-deno",
  "DotJoshJohnson.xml",
  "esbenp.prettier-vscode",
  "evalapply.crystal-cult-colortheme",
  "fabianlauer.vs-code-xml-format",
  "foam.foam-vscode",
  "golang.go",
  "James-Yu.latex-workshop",
  "jdinhlife.gruvbox",
  "joshua-fontany.tw5-syntax",
  "kosz78.nim",
  "lextudio.restructuredtext",
  "mattn.Lisp",
  "ms-azuretools.vscode-docker",
  "ms-python.python",
  "ms-python.vscode-pylance",
  "ms-toolsai.jupyter",
  "ms-vscode-remote.remote-containers",
  "ms-vscode.cpptools",
  "mushan.vscode-paste-image",
  "naumovs.color-highlight",
  "octref.vetur",
  "PKief.material-icon-theme",
  "redhat.vscode-commons",
  "redhat.vscode-xml",
  "rust-lang.rust",
  "shadowtime2000.eta-vscode",
  "svelte.svelte-vscode",
  "svsool.markdown-memo",
  "systemticks.c4-dsl-extension",
  "tiehuis.zig",
  "timonwong.shellcheck",
  "wholroyd.jinja",
  "yzhang.markdown-all-in-one"
];

console.log(Colors.yellow(`Installing VSCodium extensions`));
for (const extension of vscodeExtensions) {
    await exec(`codium --install-extension ${extension}`)
}
console.log(Colors.green("Done!"));