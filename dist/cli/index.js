#!/usr/bin/env node
var $1L6VP$express = require("express");
var $1L6VP$open = require("open");
var $1L6VP$picocolors = require("picocolors");
var $1L6VP$child_process = require("child_process");
var $1L6VP$minimist = require("minimist");
var $1L6VP$url = require("url");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}


var $93891d20c134ff9b$exports = {};
$93891d20c134ff9b$exports = JSON.parse("{\"$schema\":\"http://json.schemastore.org/package\",\"name\":\"verdaccio-github-oauth-ui\",\"version\":\"7.0.0\",\"keywords\":[\"authentication\",\"github\",\"login\",\"npm\",\"oauth\",\"package\",\"private\",\"registry\",\"verdaccio\",\"verdaccio-auth\",\"verdaccio-auth-plugin\",\"verdaccio-plugin\"],\"homepage\":\"https://github.com/n4bb12/verdaccio-github-oauth-ui/blob/master/README.md\",\"bugs\":\"https://github.com/n4bb12/verdaccio-github-oauth-ui/issues\",\"repository\":\"github:n4bb12/verdaccio-github-oauth-ui\",\"license\":\"MIT\",\"author\":\"Abraham Schilling\",\"main\":\"dist/server/index.js\",\"bin\":\"dist/cli/index.js\",\"files\":[\"dist\"],\"scripts\":{\"build\":\"bash run build\",\"clean\":\"bash run clean\",\"cli\":\"bash run cli\",\"cli:login\":\"bash run cli-login\",\"cli:publish\":\"bash run cli-publish\",\"cli:whoami\":\"bash run cli-whoami\",\"copy\":\"bash run copy\",\"coverage\":\"vitest --coverage\",\"dev\":\"yarn update && yarn start\",\"docker\":\"bash run docker_\",\"fix\":\"yarn format && yarn typecheck\",\"format\":\"prettier --write \\\"**/*.{ts,js,css,scss,html,json}\\\"\",\"format:check\":\"prettier --check \\\"**/*.{ts,js,css,scss,html,json}\\\"\",\"prepack\":\"bash run clean && bash run build\",\"start\":\"verdaccio -c verdaccio.yaml\",\"test\":\"vitest\",\"typecheck\":\"bash run typecheck\",\"update\":\"yarn prepack && yarn copy\",\"watch\":\"nodemon --watch src --watch verdaccio.yaml --ext ts,css,yaml --exec \\\"yarn dev\\\"\"},\"dependencies\":{\"@octokit/oauth-methods\":\"^4.1.0\",\"@octokit/request\":\"^9.2.4\",\"@verdaccio/core\":\"^8.0.0-next-8.28\",\"@verdaccio/url\":\"^13.0.0-next-8.28\",\"dotenv\":\"^16.6.1\",\"express\":\"^4.22.1\",\"global-agent\":\"^3.0.0\",\"lodash\":\"^4.17.21\",\"memory-cache\":\"^0.2.0\",\"minimist\":\"^1.2.8\",\"octokit\":\"^3.2.2\",\"open\":\"^8.4.2\",\"ow\":\"^0.28.2\",\"picocolors\":\"^1.1.1\",\"query-string\":\"^7.1.3\"},\"devDependencies\":{\"@parcel/config-default\":\"~2.4.1\",\"@parcel/transformer-typescript-tsc\":\"~2.4.1\",\"@types/express\":\"^4.17.25\",\"@types/global-agent\":\"^2.1.3\",\"@types/lodash\":\"^4.17.23\",\"@types/memory-cache\":\"^0.2.6\",\"@types/minimist\":\"^1.2.5\",\"@types/node\":\"^20.19.29\",\"@types/query-string\":\"^6.3.0\",\"@verdaccio/types\":\"^13.0.0-next-8.10\",\"@vitest/coverage-v8\":\"^3.2.4\",\"browserslist\":\"^4.28.1\",\"core-js\":\"^3.47.0\",\"nodemon\":\"^3.1.11\",\"parcel\":\"~2.4.1\",\"prettier\":\"^3.7.4\",\"process\":\"^0.11.10\",\"release-it\":\"^18.1.2\",\"timekeeper\":\"^2.3.1\",\"type-fest\":\"^4.41.0\",\"typescript\":\"^5.9.3\",\"verdaccio\":\"^6.2.4\",\"verdaccio-htpasswd\":\"^13.0.0-next-8.28\",\"vitest\":\"^3.2.4\"},\"peerDependencies\":{\"verdaccio\":\">=6\"},\"packageManager\":\"yarn@4.8.1\",\"publishConfig\":{\"registry\":\"https://registry.npmjs.org/\"},\"targets\":{\"client\":{\"source\":\"src/client/verdaccio-6.ts\",\"distDir\":\"dist/client\",\"context\":\"browser\",\"includeNodeModules\":true},\"server\":{\"source\":\"src/server/index.ts\",\"distDir\":\"dist/server\",\"context\":\"node\",\"outputFormat\":\"commonjs\",\"optimize\":false,\"isLibrary\":true},\"cli\":{\"source\":\"src/cli/index.ts\",\"distDir\":\"dist/cli\",\"context\":\"node\",\"outputFormat\":\"commonjs\",\"optimize\":false}}}");


const $600a2690ceee79df$export$3a689f099db7e338 = (/*@__PURE__*/$parcel$interopDefault($93891d20c134ff9b$exports)).name;
const $600a2690ceee79df$export$18d4026d1ea86bb1 = (/*@__PURE__*/$parcel$interopDefault($93891d20c134ff9b$exports)).name.replace("verdaccio-", "");
const $600a2690ceee79df$export$42fcb85fa5803dac = "/-/oauth/authorize";
const $600a2690ceee79df$export$9e960429933a7149 = "/-/oauth/callback";
const $600a2690ceee79df$export$cf98473208e53590 = $600a2690ceee79df$export$42fcb85fa5803dac;
const $600a2690ceee79df$export$bd46c9d2d39fc9 = "/";
const $600a2690ceee79df$export$3c6c1020e175037c = 8239;
const $600a2690ceee79df$export$32fbdff0ec95e1c6 = "cli";
const $600a2690ceee79df$export$b3d17af05dbcae2f = "/oauth/authorize";
const $600a2690ceee79df$export$a5232dc62cc3d68c = "https://github.com";
const $600a2690ceee79df$export$5b53df5f02ece893 = "https://api.github.com";
const $600a2690ceee79df$export$827c2d0b213c39b9 = [
    "$all",
    "@all",
    "$authenticated",
    "@authenticated", 
];




const $01090c257208fc0e$var$prefix = ($parcel$interopDefault($1L6VP$picocolors)).blue(`[${$600a2690ceee79df$export$18d4026d1ea86bb1}]`);
const $01090c257208fc0e$export$af88d00dbe7f521 = {
    log: console.log.bind(console, $01090c257208fc0e$var$prefix),
    error: (...args)=>console.error($01090c257208fc0e$var$prefix, ($parcel$interopDefault($1L6VP$picocolors)).red(args.join(" ")))
};
$01090c257208fc0e$export$af88d00dbe7f521.log(`Version: ${(/*@__PURE__*/$parcel$interopDefault($93891d20c134ff9b$exports)).name}@${(/*@__PURE__*/$parcel$interopDefault($93891d20c134ff9b$exports)).version}`);






let $56204dd7847420f8$var$npmConfig;
function $56204dd7847420f8$var$parseCliArgs() {
    return ($parcel$interopDefault($1L6VP$minimist))(process.argv.slice(2));
}
function $56204dd7847420f8$var$runCommand(command) {
    $01090c257208fc0e$export$af88d00dbe7f521.log(`Running command: ${command}`);
    return $1L6VP$child_process.execSync(command).toString();
}
function $56204dd7847420f8$var$getNpmConfig() {
    if (!$56204dd7847420f8$var$npmConfig) {
        const npmConfigJson = $56204dd7847420f8$var$runCommand("npm config list --json");
        $56204dd7847420f8$var$npmConfig = JSON.parse(npmConfigJson);
    }
    return $56204dd7847420f8$var$npmConfig;
}
function $56204dd7847420f8$var$removeTrailingSlash(input) {
    return input.trim().replace(/\/?$/, "");
}
function $56204dd7847420f8$export$b9447825ec1417f9() {
    const cliArgs = $56204dd7847420f8$var$parseCliArgs();
    const registry = cliArgs.registry || $56204dd7847420f8$var$getNpmConfig().registry;
    return $56204dd7847420f8$var$removeTrailingSlash(registry);
}
function $56204dd7847420f8$export$e9d7a5792f65b33() {
    return $56204dd7847420f8$var$getNpmConfig().userconfig;
}
function $56204dd7847420f8$export$6237095459cb2d90(registry, token) {
    const url = new $1L6VP$url.URL(registry);
    const baseUrl = url.host + url.pathname;
    return `npm config set //${baseUrl}:_authToken "${token}"`;
}
function $56204dd7847420f8$export$84ad69a37df73f4e(token) {
    const registry = $56204dd7847420f8$export$b9447825ec1417f9();
    const command = $56204dd7847420f8$export$6237095459cb2d90(registry, token);
    $56204dd7847420f8$var$runCommand(command);
}



function $a6b55da57f7e099e$export$3d55ba16968d5eca(id) {
    return $600a2690ceee79df$export$42fcb85fa5803dac + "/" + (id || ":id?");
}
function $a6b55da57f7e099e$export$d63ade3310945c4c(id) {
    return $600a2690ceee79df$export$9e960429933a7149 + (id ? "/" + id : "");
}



function $ec907423cb9cd6c0$export$5f35a513ba5a4846(status, message) {
    switch(status){
        case "success":
            $01090c257208fc0e$export$af88d00dbe7f521.log("All done! We've updated your npm configuration.");
            break;
        default:
            $01090c257208fc0e$export$af88d00dbe7f521.error(message);
            break;
    }
}





function $b72ffe88c934d0a1$export$9dc0174526f4c7e3() {
    return [
        "It seems you are using the default npm registry.",
        "Please update it to your Verdaccio URL by either running:",
        "",
        "npm config set registry <URL>",
        "",
        "or by using the registry argument",
        "",
        `npx ${$600a2690ceee79df$export$3a689f099db7e338} --registry <URL>`, 
    ];
}
function $b72ffe88c934d0a1$export$3c268eaaecf1c199() {
    $b72ffe88c934d0a1$export$9dc0174526f4c7e3().forEach((line)=>$01090c257208fc0e$export$af88d00dbe7f521.log(line)
    );
}
function $b72ffe88c934d0a1$export$8e2f23d5ad99376b() {
    const registry = $56204dd7847420f8$export$b9447825ec1417f9();
    if (registry.includes("registry.npmjs.org")) {
        $b72ffe88c934d0a1$export$3c268eaaecf1c199();
        process.exit(1);
    }
    return registry;
}




const $cac586b2b1c8e458$var$styles = `
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  background-color: #e0e0e0;
  color: #24292F;
  font-family: Helvetica, sans-serif;
  position: relative;
  text-align: center;
}
.wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
a {
  color: #3f51b5;
}
.img {
  filter: drop-shadow(0 0.5rem 0.5rem #24292F80);
  width: 100px;
}
`.trim().replace(/\s+/g, " ");
const $cac586b2b1c8e458$var$logo = `<svg class="img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><defs/><defs><filter id="a" width="139.6%" height="140.4%" x="-20%" y="-12%" filterUnits="objectBoundingBox"><feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2.5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0906646286 0"/></filter><filter id="c" width="167.9%" height="272.7%" x="-34%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2.5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0906646286 0"/></filter><path id="b" d="M48 17L33 47h-9L0 0h15l13 25 5-8h15z"/><path id="d" d="M35 11h-7V9h8l2-3h-6V4h7l1-2h-4V0h20l-6 11H35z"/></defs><g fill="none" fill-rule="evenodd"><rect width="100" height="100" fill="#000" rx="37"/><g transform="translate(22 30)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" fill-opacity=".6" xlink:href="#b"/></g><g transform="translate(22 30)"><use fill="#000" filter="url(#c)" xlink:href="#d"/><use fill="#FFF" xlink:href="#d"/></g><path fill="#FFF" d="M55 77h-9L22 30h15l21 41z"/></g></svg>`;
function $cac586b2b1c8e458$export$54abf82a1c28d398(body, withBackLink) {
    const backButton = withBackLink ? `<p><a href="/">Go back</a></p>` : "";
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${$600a2690ceee79df$export$18d4026d1ea86bb1}</title>
    <style>${$cac586b2b1c8e458$var$styles}</style>
  </head>
  <body>
    <div class="wrap">
      ${$cac586b2b1c8e458$var$logo}
      ${body}
      ${backButton}
    </div>
  </body>
</html>`;
}
function $cac586b2b1c8e458$export$1c5ed2c43abe9c5(error, withBackLink) {
    return $cac586b2b1c8e458$export$54abf82a1c28d398(`<h1>Sorry :(</h1>
    <p>${error?.message || error}</p>`, withBackLink);
}


const $bfc1c7fa74fb9078$var$withBackLink = false;
const $bfc1c7fa74fb9078$var$successPage = $cac586b2b1c8e458$export$54abf82a1c28d398(`<h1>All done!</h1>
  <p>We've updated your npm configuration.</p>
  <p><code>${$56204dd7847420f8$export$e9d7a5792f65b33()}</code></p>`, $bfc1c7fa74fb9078$var$withBackLink);
function $bfc1c7fa74fb9078$export$f93e7cc9911d107c(status, message, res) {
    res.setHeader("Content-Type", "text/html");
    switch(status){
        case "success":
            res.status(200);
            res.send($bfc1c7fa74fb9078$var$successPage);
            break;
        default:
            res.status(500);
            res.send($cac586b2b1c8e458$export$1c5ed2c43abe9c5(message, $bfc1c7fa74fb9078$var$withBackLink));
            break;
    }
}


const $15f2198b9a1f6040$var$registry = $b72ffe88c934d0a1$export$8e2f23d5ad99376b();
const $15f2198b9a1f6040$var$authorizeUrl = $15f2198b9a1f6040$var$registry + $a6b55da57f7e099e$export$3d55ba16968d5eca($600a2690ceee79df$export$32fbdff0ec95e1c6);
const $15f2198b9a1f6040$var$server = ($parcel$interopDefault($1L6VP$express))().get("/", (req, res)=>{
    let status = req.query.status;
    let message = req.query.message;
    const token = decodeURIComponent(req.query.token);
    // We use `!status` for compatibility with plugin version <=2.3.0
    // where there was no error handling and status differentiation yet.
    if (!status) status = "success";
    try {
        if (status === "success") $56204dd7847420f8$export$84ad69a37df73f4e(token);
    } catch (error) {
        status = "error";
        message = error.message;
        $01090c257208fc0e$export$af88d00dbe7f521.error(message);
    }
    $bfc1c7fa74fb9078$export$f93e7cc9911d107c(status, message, res);
    $ec907423cb9cd6c0$export$5f35a513ba5a4846(status, message);
    $15f2198b9a1f6040$var$server.close();
    process.exit(status === "success" ? 0 : 1);
}).listen($600a2690ceee79df$export$3c6c1020e175037c, ()=>{
    ($parcel$interopDefault($1L6VP$open))($15f2198b9a1f6040$var$authorizeUrl);
});


//# sourceMappingURL=index.js.map
