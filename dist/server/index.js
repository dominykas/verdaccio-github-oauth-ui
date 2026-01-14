var $820KG$dotenv = require("dotenv");
var $820KG$verdacciocore = require("@verdaccio/core");
var $820KG$picocolors = require("picocolors");
var $820KG$querystring = require("query-string");
var $820KG$verdacciourl = require("@verdaccio/url");
var $820KG$lodashuniq = require("lodash/uniq");
var $820KG$querystring1 = require("querystring");
var $820KG$octokitoauthmethods = require("@octokit/oauth-methods");
var $820KG$octokitrequest = require("@octokit/request");
var $820KG$octokit = require("octokit");
var $820KG$memorycache = require("memory-cache");
var $820KG$lodashget = require("lodash/get");
var $820KG$ow = require("ow");
var $820KG$process = require("process");
var $820KG$verdacciopackagejson = require("verdaccio/package.json");
var $820KG$globalagent = require("global-agent");
var $820KG$express = require("express");
var $820KG$lodashmerge = require("lodash/merge");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $24556c77bd0305ce$export$2e2bcd8739ae039);


var $f11336891a8047ce$exports = {};
$f11336891a8047ce$exports = JSON.parse("{\"$schema\":\"http://json.schemastore.org/package\",\"name\":\"verdaccio-github-oauth-ui\",\"version\":\"7.0.0\",\"keywords\":[\"authentication\",\"github\",\"login\",\"npm\",\"oauth\",\"package\",\"private\",\"registry\",\"verdaccio\",\"verdaccio-auth\",\"verdaccio-auth-plugin\",\"verdaccio-plugin\"],\"homepage\":\"https://github.com/n4bb12/verdaccio-github-oauth-ui/blob/master/README.md\",\"bugs\":\"https://github.com/n4bb12/verdaccio-github-oauth-ui/issues\",\"repository\":\"github:n4bb12/verdaccio-github-oauth-ui\",\"license\":\"MIT\",\"author\":\"Abraham Schilling\",\"main\":\"dist/server/index.js\",\"bin\":\"dist/cli/index.js\",\"files\":[\"dist\"],\"scripts\":{\"build\":\"bash run build\",\"clean\":\"bash run clean\",\"cli\":\"bash run cli\",\"cli:login\":\"bash run cli-login\",\"cli:publish\":\"bash run cli-publish\",\"cli:whoami\":\"bash run cli-whoami\",\"copy\":\"bash run copy\",\"coverage\":\"vitest --coverage\",\"dev\":\"yarn update && yarn start\",\"docker\":\"bash run docker_\",\"fix\":\"yarn format && yarn typecheck\",\"format\":\"prettier --write \\\"**/*.{ts,js,css,scss,html,json}\\\"\",\"format:check\":\"prettier --check \\\"**/*.{ts,js,css,scss,html,json}\\\"\",\"prepack\":\"bash run clean && bash run build\",\"start\":\"verdaccio -c verdaccio.yaml\",\"test\":\"vitest\",\"typecheck\":\"bash run typecheck\",\"update\":\"yarn prepack && yarn copy\",\"watch\":\"nodemon --watch src --watch verdaccio.yaml --ext ts,css,yaml --exec \\\"yarn dev\\\"\"},\"dependencies\":{\"@octokit/oauth-methods\":\"^4.1.0\",\"@octokit/request\":\"^9.2.4\",\"@verdaccio/core\":\"^8.0.0-next-8.28\",\"@verdaccio/url\":\"^13.0.0-next-8.28\",\"dotenv\":\"^16.6.1\",\"express\":\"^4.22.1\",\"global-agent\":\"^3.0.0\",\"lodash\":\"^4.17.21\",\"memory-cache\":\"^0.2.0\",\"minimist\":\"^1.2.8\",\"octokit\":\"^3.2.2\",\"open\":\"^8.4.2\",\"ow\":\"^0.28.2\",\"picocolors\":\"^1.1.1\",\"query-string\":\"^7.1.3\"},\"devDependencies\":{\"@parcel/config-default\":\"~2.4.1\",\"@parcel/transformer-typescript-tsc\":\"~2.4.1\",\"@types/express\":\"^4.17.25\",\"@types/global-agent\":\"^2.1.3\",\"@types/lodash\":\"^4.17.23\",\"@types/memory-cache\":\"^0.2.6\",\"@types/minimist\":\"^1.2.5\",\"@types/node\":\"^20.19.29\",\"@types/query-string\":\"^6.3.0\",\"@verdaccio/types\":\"^13.0.0-next-8.10\",\"@vitest/coverage-v8\":\"^3.2.4\",\"browserslist\":\"^4.28.1\",\"core-js\":\"^3.47.0\",\"nodemon\":\"^3.1.11\",\"parcel\":\"~2.4.1\",\"prettier\":\"^3.7.4\",\"process\":\"^0.11.10\",\"release-it\":\"^18.1.2\",\"timekeeper\":\"^2.3.1\",\"type-fest\":\"^4.41.0\",\"typescript\":\"^5.9.3\",\"verdaccio\":\"^6.2.4\",\"verdaccio-htpasswd\":\"^13.0.0-next-8.28\",\"vitest\":\"^3.2.4\"},\"peerDependencies\":{\"verdaccio\":\">=6\"},\"packageManager\":\"yarn@4.8.1\",\"publishConfig\":{\"registry\":\"https://registry.npmjs.org/\"},\"targets\":{\"client\":{\"source\":\"src/client/verdaccio-6.ts\",\"distDir\":\"dist/client\",\"context\":\"browser\",\"includeNodeModules\":true},\"server\":{\"source\":\"src/server/index.ts\",\"distDir\":\"dist/server\",\"context\":\"node\",\"outputFormat\":\"commonjs\",\"optimize\":false,\"isLibrary\":true},\"cli\":{\"source\":\"src/cli/index.ts\",\"distDir\":\"dist/cli\",\"context\":\"node\",\"outputFormat\":\"commonjs\",\"optimize\":false}}}");


const $ba1a6b64c941fb12$export$3a689f099db7e338 = (/*@__PURE__*/$parcel$interopDefault($f11336891a8047ce$exports)).name;
const $ba1a6b64c941fb12$export$18d4026d1ea86bb1 = (/*@__PURE__*/$parcel$interopDefault($f11336891a8047ce$exports)).name.replace("verdaccio-", "");
const $ba1a6b64c941fb12$export$42fcb85fa5803dac = "/-/oauth/authorize";
const $ba1a6b64c941fb12$export$9e960429933a7149 = "/-/oauth/callback";
const $ba1a6b64c941fb12$export$cf98473208e53590 = $ba1a6b64c941fb12$export$42fcb85fa5803dac;
const $ba1a6b64c941fb12$export$bd46c9d2d39fc9 = "/";
const $ba1a6b64c941fb12$export$3c6c1020e175037c = 8239;
const $ba1a6b64c941fb12$export$32fbdff0ec95e1c6 = "cli";
const $ba1a6b64c941fb12$export$b3d17af05dbcae2f = "/oauth/authorize";
const $ba1a6b64c941fb12$export$a5232dc62cc3d68c = "https://github.com";
const $ba1a6b64c941fb12$export$5b53df5f02ece893 = "https://api.github.com";
const $ba1a6b64c941fb12$export$827c2d0b213c39b9 = [
    "$all",
    "@all",
    "$authenticated",
    "@authenticated", 
];


const $70d2b1f7dd25caad$var$prefix = ($parcel$interopDefault($820KG$picocolors)).blue(`[${$ba1a6b64c941fb12$export$18d4026d1ea86bb1}]`);
const $70d2b1f7dd25caad$export$af88d00dbe7f521 = {
    log: console.log.bind(console, $70d2b1f7dd25caad$var$prefix),
    error: (...args)=>console.error($70d2b1f7dd25caad$var$prefix, ($parcel$interopDefault($820KG$picocolors)).red(args.join(" ")))
};
$70d2b1f7dd25caad$export$af88d00dbe7f521.log(`Version: ${(/*@__PURE__*/$parcel$interopDefault($f11336891a8047ce$exports)).name}@${(/*@__PURE__*/$parcel$interopDefault($f11336891a8047ce$exports)).version}`);






function $7dcd951f2761d890$export$3d55ba16968d5eca(id) {
    return $ba1a6b64c941fb12$export$42fcb85fa5803dac + "/" + (id || ":id?");
}
function $7dcd951f2761d890$export$d63ade3310945c4c(id) {
    return $ba1a6b64c941fb12$export$9e960429933a7149 + (id ? "/" + id : "");
}


const $c5a62cacb647752e$var$pluginCallbackeUrl = $7dcd951f2761d890$export$d63ade3310945c4c($ba1a6b64c941fb12$export$32fbdff0ec95e1c6);
class $c5a62cacb647752e$export$82589b1007098c46 {
    constructor(verdaccio, core, provider){
        this.verdaccio = verdaccio;
        this.core = core;
        this.provider = provider;
        this.callback = async (req, res)=>{
            const params = {};
            try {
                const code = this.provider.getCode(req);
                const userToken = await this.provider.getToken(code);
                const userName = await this.provider.getUserName(userToken);
                const user = await this.core.createAuthenticatedUser(userName);
                const npmToken = await this.verdaccio.issueNpmToken(user, userToken);
                params.status = "success";
                params.token = encodeURIComponent(npmToken);
            } catch (error) {
                $70d2b1f7dd25caad$export$af88d00dbe7f521.error(error);
                params.status = "error";
                params.message = error.message || error;
            }
            const redirectUrl = `http://localhost:${$ba1a6b64c941fb12$export$3c6c1020e175037c}` + "?" + ($parcel$interopDefault($820KG$querystring)).stringify(params);
            res.redirect(redirectUrl);
        };
    }
    /**
     * IPluginMiddleware
     */ register_middlewares(app) {
        app.get($c5a62cacb647752e$var$pluginCallbackeUrl, this.callback);
    }
}





const $e9cfa23fe6547eb0$var$styles = `
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
const $e9cfa23fe6547eb0$var$logo = `<svg class="img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><defs/><defs><filter id="a" width="139.6%" height="140.4%" x="-20%" y="-12%" filterUnits="objectBoundingBox"><feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2.5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0906646286 0"/></filter><filter id="c" width="167.9%" height="272.7%" x="-34%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2.5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0906646286 0"/></filter><path id="b" d="M48 17L33 47h-9L0 0h15l13 25 5-8h15z"/><path id="d" d="M35 11h-7V9h8l2-3h-6V4h7l1-2h-4V0h20l-6 11H35z"/></defs><g fill="none" fill-rule="evenodd"><rect width="100" height="100" fill="#000" rx="37"/><g transform="translate(22 30)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" fill-opacity=".6" xlink:href="#b"/></g><g transform="translate(22 30)"><use fill="#000" filter="url(#c)" xlink:href="#d"/><use fill="#FFF" xlink:href="#d"/></g><path fill="#FFF" d="M55 77h-9L22 30h15l21 41z"/></g></svg>`;
function $e9cfa23fe6547eb0$export$54abf82a1c28d398(body, withBackLink) {
    const backButton = withBackLink ? `<p><a href="/">Go back</a></p>` : "";
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${$ba1a6b64c941fb12$export$18d4026d1ea86bb1}</title>
    <style>${$e9cfa23fe6547eb0$var$styles}</style>
  </head>
  <body>
    <div class="wrap">
      ${$e9cfa23fe6547eb0$var$logo}
      ${body}
      ${backButton}
    </div>
  </body>
</html>`;
}
function $e9cfa23fe6547eb0$export$1c5ed2c43abe9c5(error, withBackLink) {
    return $e9cfa23fe6547eb0$export$54abf82a1c28d398(`<h1>Sorry :(</h1>
    <p>${error?.message || error}</p>`, withBackLink);
}



function $b5097e893ae96df2$export$f654b28f82155665(config, req) {
    const urlPrefix = config.url_prefix;
    const baseUrl = $820KG$verdacciourl.getPublicUrl(urlPrefix, req);
    const baseUrlWithoutTrailingSlash = baseUrl.replace(/\/$/, "");
    return baseUrlWithoutTrailingSlash;
}


const $2cf87e246db124ea$var$COOKIE_OPTIONS = {
    sameSite: true,
    httpOnly: false,
    maxAge: 10000
};
class $2cf87e246db124ea$export$dcc64a48664bd665 {
    constructor(verdaccio, config, core, provider){
        this.verdaccio = verdaccio;
        this.config = config;
        this.core = core;
        this.provider = provider;
        /**
         * Initiates the auth flow by redirecting to the provider's login URL.
         */ this.authorize = async (req, res, next)=>{
            try {
                const redirectUrl = this.getRedirectUrl(req);
                const url = this.provider.getLoginUrl(redirectUrl);
                res.redirect(url);
            } catch (error) {
                $70d2b1f7dd25caad$export$af88d00dbe7f521.error(error);
                next(error);
            }
        };
        /**
         * After successful authentication, the auth provider redirects back to us.
         * We use the code in the query params to get an access token and the username
         * associated with the account.
         *
         * We issue a JWT using these values and pass them back to the frontend as
         * cookies accessible to JS so they can be stored in the browser.
         *
         * The username and token are encrypted and base64 encoded to form a token for
         * the npm CLI.
         *
         * There is no need to later decode and decrypt the token. This process is
         * automatically reversed by verdaccio before passing it to the plugin.
         */ this.callback = async (req, res)=>{
            const withBackLink = true;
            try {
                const code = this.provider.getCode(req);
                const githubToken = await this.provider.getToken(code);
                const userName = await this.provider.getUserName(githubToken);
                const user = await this.core.createAuthenticatedUser(userName);
                const uiToken = await this.verdaccio.issueUiToken(user);
                const npmToken = await this.verdaccio.issueNpmToken(user, githubToken);
                res.cookie("username", userName, $2cf87e246db124ea$var$COOKIE_OPTIONS);
                res.cookie("uiToken", uiToken, $2cf87e246db124ea$var$COOKIE_OPTIONS);
                res.cookie("npmToken", npmToken, $2cf87e246db124ea$var$COOKIE_OPTIONS);
                res.redirect("/");
            } catch (error) {
                $70d2b1f7dd25caad$export$af88d00dbe7f521.error(error);
                res.status(500).send($e9cfa23fe6547eb0$export$1c5ed2c43abe9c5(error, withBackLink));
            }
        };
    }
    /**
     * IPluginMiddleware
     */ register_middlewares(app) {
        app.get($7dcd951f2761d890$export$3d55ba16968d5eca(), this.authorize);
        app.get($7dcd951f2761d890$export$d63ade3310945c4c(), this.callback);
    }
    getRedirectUrl(req) {
        const baseUrl = $b5097e893ae96df2$export$f654b28f82155665(this.config, req);
        const path = $7dcd951f2761d890$export$d63ade3310945c4c(req.params.id);
        const redirectUrl = baseUrl + path;
        return redirectUrl;
    }
}











class $5a935223adff04bf$export$ac5fbeb8f28ca79b {
    constructor(webBaseUrl, apiBaseUrl){
        this.webBaseUrl = webBaseUrl;
        this.apiBaseUrl = apiBaseUrl;
        /**a
         * `POST /login/oauth/access_token`
         *
         * [Web application flow](bit.ly/2mNSppX).
         */ this.requestAccessToken = async (code, clientId, clientSecret)=>{
            try {
                return await $820KG$octokitoauthmethods.exchangeWebFlowCode({
                    clientType: "oauth-app",
                    clientId: clientId,
                    clientSecret: clientSecret,
                    code: code,
                    request: $820KG$octokitrequest.request.defaults({
                        baseUrl: this.webBaseUrl
                    })
                });
            } catch (error) {
                throw new Error("Failed requesting GitHub access token: " + error.message);
            }
        };
        /**
         * `GET /user`
         *
         * https://developer.github.com/v3/users/#get-the-authenticated-user
         */ this.requestUser = async (accessToken)=>{
            try {
                const oktokit = this.createOktokit(accessToken);
                return await oktokit.rest.users.getAuthenticated();
            } catch (error) {
                throw new Error("Failed requesting GitHub user info: " + error.message);
            }
        };
        /**
         * `GET /orgs/{org}/members/{username}`
         *
         * https://docs.github.com/en/rest/orgs/members#check-organization-membership-for-a-user
         */ this.requestOrganizationMembershipStatus = async (accessToken, org, username)=>{
            try {
                const oktokit = this.createOktokit(accessToken);
                const response = await oktokit.rest.orgs.checkMembershipForUser({
                    org: org,
                    username: username
                });
                return response.status === 204;
            } catch (error) {
                $70d2b1f7dd25caad$export$af88d00dbe7f521.log(`Failed requesting GitHub organization "${org}" membership status of user "${username}": ${error.message}`);
                return false;
            }
        };
        /**
         * `GET /orgs/{org}/teams/{team}/memberships/{username}`
         *
         * https://docs.github.com/en/rest/teams/members#get-team-membership-for-a-user
         */ this.requestTeamMembershipStatus = async (accessToken, org, team_slug, username)=>{
            try {
                const oktokit = this.createOktokit(accessToken);
                const response = await oktokit.rest.teams.getMembershipForUserInOrg({
                    org: org,
                    team_slug: team_slug,
                    username: username
                });
                return response.status === 200;
            } catch (error) {
                $70d2b1f7dd25caad$export$af88d00dbe7f521.log(`Failed requesting GitHub team "${org}/${team_slug}" membership status of user "${username}": ${error.message}`);
                return false;
            }
        };
        /**
         * `GET /repos/{owner}/{repo}/collaborators/{username}
         *
         * https://docs.github.com/en/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator
         */ this.requestRepositoryCollaboratorStatus = async (accessToken, owner, repo, username)=>{
            try {
                const oktokit = this.createOktokit(accessToken);
                const response = await oktokit.rest.repos.checkCollaborator({
                    owner: owner,
                    repo: repo,
                    username: username
                });
                return response.status === 204;
            } catch (error) {
                $70d2b1f7dd25caad$export$af88d00dbe7f521.log(`Failed requesting GitHub repository "${owner}/${repo}" membership status of user "${username}": ${error.message}`);
                return false;
            }
        };
    }
    createOktokit(accessToken) {
        return new $820KG$octokit.Octokit({
            auth: accessToken,
            baseUrl: this.apiBaseUrl
        });
    }
}


class $f2fc4b966cacffb5$export$eb365382158b13b {
    constructor(config){
        this.config = config;
        this.id = "github";
        this.webBaseUrl = this.config.enterpriseOrigin || $ba1a6b64c941fb12$export$a5232dc62cc3d68c;
        this.apiBaseUrl = this.config.enterpriseOrigin ? this.config.enterpriseOrigin.replace(/\/?$/, "") + "/api/v3" : $ba1a6b64c941fb12$export$5b53df5f02ece893;
        this.client = new $5a935223adff04bf$export$ac5fbeb8f28ca79b(this.webBaseUrl, this.apiBaseUrl);
    }
    getId() {
        return this.id;
    }
    getLoginUrl(callbackUrl) {
        const queryParams = $820KG$querystring1.stringify({
            client_id: this.config.clientId,
            redirect_uri: callbackUrl
        });
        return this.webBaseUrl + `/login/oauth/authorize?` + queryParams;
    }
    getCode(req) {
        return req.query.code;
    }
    async getToken(code) {
        const response = await this.client.requestAccessToken(code, this.config.clientId, this.config.clientSecret);
        return response.authentication.token;
    }
    async getUserName(token) {
        const response = await this.client.requestUser(token);
        return response.data.login;
    }
    async getGroups(userName) {
        const configuredUser = this.config.parsedUsers.find((config)=>config.user === userName
        );
        const groups = [];
        const promises = [];
        const registryToken = String(this.config.token);
        if (configuredUser) groups.push(configuredUser.group);
        this.config.parsedOrgs.forEach((config)=>{
            const job = async ()=>{
                const canAccess = await this.client.requestOrganizationMembershipStatus(registryToken, config.org, userName);
                if (canAccess) groups.push(config.group);
            };
            promises.push(job());
        });
        this.config.parsedTeams.forEach((config)=>{
            const job = async ()=>{
                const canAccess = await this.client.requestTeamMembershipStatus(registryToken, config.org, config.team, userName);
                if (canAccess) groups.push(config.group);
            };
            promises.push(job());
        });
        this.config.parsedRepos.forEach((config)=>{
            const job = async ()=>{
                const canAccess = await this.client.requestRepositoryCollaboratorStatus(registryToken, config.owner, config.repo, userName);
                if (canAccess) groups.push(config.group);
            };
            promises.push(job());
        });
        await Promise.all(promises);
        return ($parcel$interopDefault($820KG$lodashuniq))(groups).filter(Boolean).sort();
    }
}






class $ffccfe0e2afe3e15$export$d28932b222e3657 {
    async createAuthenticatedUser(userName) {
        const user = {
            name: userName,
            groups: [
                ...$ba1a6b64c941fb12$export$827c2d0b213c39b9
            ],
            // groups returned by GH are not used here and not saved in the JWT token
            // to avoid Verdaccio granting access based on the outdated groups
            real_groups: []
        };
        $70d2b1f7dd25caad$export$af88d00dbe7f521.log("User successfully authenticated:", user);
        return user;
    }
}




class $c89206e996d0f318$export$94affb487e701bf2 {
    constructor(authProvider, cacheTTLms = 10000){
        this.authProvider = authProvider;
        this.cacheTTLms = cacheTTLms;
        this.cache = new $820KG$memorycache.Cache();
        this.providerId = this.authProvider.getId();
    }
    async getGroups(userName) {
        let groups = null;
        try {
            const key = `${this.providerId}/${userName}`;
            groups = this.cache.get(key);
            if (!groups) {
                groups = await this.authProvider.getGroups(userName);
                this.cache.put(key, groups || [], this.cacheTTLms);
            }
        } catch (error) {
            $70d2b1f7dd25caad$export$af88d00dbe7f521.error(error);
        }
        return groups || [];
    }
}








function $ce9936521a14f314$export$c506eb22e615ba4a() {
    return $820KG$verdacciopackagejson.version;
}
//
// Validation
//
function $ce9936521a14f314$var$validateVersion() {
    const version = $ce9936521a14f314$export$c506eb22e615ba4a();
    if (version < "5") throw new Error("This plugin requires verdaccio 5 or above");
}
function $ce9936521a14f314$var$validateNodeExists(config, node) {
    const path = `[${node}][${$ba1a6b64c941fb12$export$18d4026d1ea86bb1}]`;
    const obj = ($parcel$interopDefault($820KG$lodashget))(config, path, {});
    if (!Object.keys(obj).length) throw new Error(`"${node}.${$ba1a6b64c941fb12$export$18d4026d1ea86bb1}" must be enabled`);
}
function $ce9936521a14f314$var$getConfigValue(config, key, predicate) {
    let valueOrEnvName = ($parcel$interopDefault($820KG$lodashget))(config, [
        "auth",
        $ba1a6b64c941fb12$export$18d4026d1ea86bb1,
        key
    ]);
    const value = ($parcel$interopDefault($820KG$process)).env[String(valueOrEnvName)] ?? valueOrEnvName;
    try {
        ($parcel$interopDefault($820KG$ow))(value, predicate);
    } catch (error) {
        $70d2b1f7dd25caad$export$af88d00dbe7f521.error(`Invalid configuration at "auth.${$ba1a6b64c941fb12$export$18d4026d1ea86bb1}.${key}": ${error.message} — Please check your verdaccio config.`);
        ($parcel$interopDefault($820KG$process)).exit(1);
    }
    return value;
}
class $ce9936521a14f314$export$9ec2d706c52a0d56 {
    constructor(config){
        this.config = config;
        this.url_prefix = this.config.url_prefix ?? "";
        this.clientId = $ce9936521a14f314$var$getConfigValue(this.config, "client-id", ($parcel$interopDefault($820KG$ow)).string.nonEmpty);
        this.clientSecret = $ce9936521a14f314$var$getConfigValue(this.config, "client-secret", ($parcel$interopDefault($820KG$ow)).string.nonEmpty);
        this.token = $ce9936521a14f314$var$getConfigValue(this.config, "token", ($parcel$interopDefault($820KG$ow)).string.nonEmpty);
        this.enterpriseOrigin = $ce9936521a14f314$var$getConfigValue(this.config, "enterprise-origin", ($parcel$interopDefault($820KG$ow)).any(($parcel$interopDefault($820KG$ow)).undefined, ($parcel$interopDefault($820KG$ow)).string.url.nonEmpty.not.startsWith($ba1a6b64c941fb12$export$a5232dc62cc3d68c)));
        this.cacheTTLms = $ce9936521a14f314$var$getConfigValue(this.config, "cache-ttl-ms", ($parcel$interopDefault($820KG$ow)).any(($parcel$interopDefault($820KG$ow)).undefined, ($parcel$interopDefault($820KG$ow)).number.positive));
        this.configuredGroupsMap = {};
        this.parsedUsers = [];
        this.parsedOrgs = [];
        this.parsedTeams = [];
        this.parsedRepos = [];
        $ce9936521a14f314$var$validateVersion();
        $ce9936521a14f314$var$validateNodeExists(config, "middlewares");
        $ce9936521a14f314$var$validateNodeExists(config, "auth");
        this.parseConfiguredPackageGroups();
    }
    isGroupConfigured(group) {
        return !!this.configuredGroupsMap[group];
    }
    /**
     * Returns all permission groups used in the Verdacio config.
     */ parseConfiguredPackageGroups() {
        const configuredGroups = Object.values(this.config.packages || {}).flatMap((packageConfig)=>{
            return [
                "access",
                "publish",
                "unpublish"
            ].flatMap((action)=>{
                const allowedGroups = packageConfig[action];
                if (typeof allowedGroups === "string") return allowedGroups;
                if (Array.isArray(allowedGroups) && allowedGroups.every((group)=>typeof group === "string"
                )) return allowedGroups;
                return [];
            });
        });
        const configuredGroupsDeduped = [
            ...new Set(configuredGroups)
        ];
        configuredGroupsDeduped.forEach((group)=>{
            const [providerId, key1, value1, key2, value2, key3] = group.split("/");
            if (providerId !== "github") return null;
            if (key1 === "user" && !key2) {
                const parsedUser = {
                    group: group,
                    user: value1
                };
                this.parsedUsers.push(parsedUser);
                this.configuredGroupsMap[group] = true;
            }
            if (key1 === "org" && key2 === "team" && !key3) {
                const parsedTeam = {
                    group: group,
                    org: value1,
                    team: value2
                };
                this.parsedTeams.push(parsedTeam);
                this.configuredGroupsMap[group] = true;
            }
            if ((key1 === "org" || key1 === "user") && key2 === "repo" && !key3) {
                const parsedRepo = {
                    group: group,
                    owner: value1,
                    repo: value2
                };
                this.parsedRepos.push(parsedRepo);
                this.configuredGroupsMap[group] = true;
            }
            if (key1 === "org" && !key2) {
                const parsedOrg = {
                    group: group,
                    org: value1
                };
                this.parsedOrgs.push(parsedOrg);
                this.configuredGroupsMap[group] = true;
            }
        });
    }
}



const $bb180bf64ad3ec26$export$1386576c8d11fa82 = __dirname + "/../client";
const $bb180bf64ad3ec26$export$9e7acdf171605e5c = "/-/static/" + $ba1a6b64c941fb12$export$18d4026d1ea86bb1;



class $05846f8bedfe1d92$export$a0f791cb3d82d3ef {
    constructor(config){
        this.config = config;
        /**
         * Patches `res.send` in order to inject style and script tags.
         */ this.patchResponse = (req, res, next)=>{
            const send = res.send;
            res.send = (html)=>{
                html = this.insertTags(req, html);
                return send.call(res, html);
            };
            next();
        };
        this.insertTags = (req, html)=>{
            html = String(html);
            if (!html.includes("__VERDACCIO_BASENAME_UI_OPTIONS")) return html;
            const baseUrl = $b5097e893ae96df2$export$f654b28f82155665(this.config, req);
            const basePath = `${baseUrl}${$bb180bf64ad3ec26$export$9e7acdf171605e5c}`;
            const scriptUrl = `${basePath}/verdaccio-6.js`;
            const scriptTag = `<script defer="defer" src="${scriptUrl}"></script>`;
            return html.replace(/<\/body>/, [
                scriptTag,
                "</body>"
            ].join(""));
        };
    }
    /**
     * IPluginMiddleware
     */ register_middlewares(app) {
        app.use(this.patchResponse);
    }
}




function $74a0a00a497c27cc$export$532884efc244643() {
    $820KG$globalagent.bootstrap();
    const config = JSON.stringify(GLOBAL_AGENT || {});
    $70d2b1f7dd25caad$export$af88d00dbe7f521.log("Proxy config:", config);
}




class $bac947b2757a6043$export$f8c4f582206e551c {
    /**
     * IPluginMiddleware
     */ register_middlewares(app) {
        app.use($bb180bf64ad3ec26$export$9e7acdf171605e5c, $820KG$express.static($bb180bf64ad3ec26$export$1386576c8d11fa82));
    }
}



// Most of this is duplicated Verdaccio code because it is unfortunately not available via API.
// https://github.com/verdaccio/verdaccio/blob/master/src/lib/auth-utils.ts#L129
const $97f02e36e143b137$var$TIME_EXPIRATION_7D = "7d";
const $97f02e36e143b137$var$defaultSecurity = {
    api: {
        legacy: true
    },
    web: {
        sign: {
            expiresIn: $97f02e36e143b137$var$TIME_EXPIRATION_7D
        },
        verify: {}
    }
};
function $97f02e36e143b137$var$getSecurity(config) {
    return ($parcel$interopDefault($820KG$lodashmerge))({}, $97f02e36e143b137$var$defaultSecurity, config.security);
}
class $97f02e36e143b137$export$8ba2c65662555ea6 {
    constructor(config){
        this.config = config;
        this.security = $97f02e36e143b137$var$getSecurity(this.config);
    }
    setAuth(auth) {
        this.auth = auth;
        return this;
    }
    async issueNpmToken(user, token) {
        const jwtSignOptions = this.security?.api?.jwt?.sign;
        if (jwtSignOptions) return this.issueVerdaccio4PlusJWT(user, jwtSignOptions);
        else return this.encrypt(user.name + ":" + token);
    }
    async issueUiToken(user) {
        const jwtSignOptions = this.security.web.sign;
        return this.issueVerdaccio4PlusJWT(user, jwtSignOptions);
    }
    // https://github.com/verdaccio/verdaccio/blob/master/src/api/web/endpoint/user.ts#L31
    async issueVerdaccio4PlusJWT(user, jwtSignOptions) {
        return this.auth.jwtEncrypt(user, jwtSignOptions);
    }
    encrypt(text) {
        try {
            // @ts-expect-error: Argument of type 'Buffer<ArrayBuffer>' is not assignable to parameter of type 'string'.ts(2345)
            return this.auth.aesEncrypt(Buffer.from(text)).toString("base64");
        } catch (error) {
            if (String(error).includes("TypeError")) // Newer versions of Verdaccio accept a string instead of a buffer and
            // output base64. I don't get why these APIs keep changing.
            return this.auth.aesEncrypt(text) ?? "";
            throw error;
        }
    }
}


class $d0e737f0ed38563a$export$901cf72dabf2112a extends $820KG$verdacciocore.pluginUtils.Plugin {
    constructor(config, options){
        super(config, options);
        this.config = config;
        this.parsedConfig = new $ce9936521a14f314$export$9ec2d706c52a0d56(this.config);
        this.provider = new $f2fc4b966cacffb5$export$eb365382158b13b(this.parsedConfig);
        this.cache = new $c89206e996d0f318$export$94affb487e701bf2(this.provider, this.parsedConfig.cacheTTLms);
        this.verdaccio = new $97f02e36e143b137$export$8ba2c65662555ea6(this.config);
        this.core = new $ffccfe0e2afe3e15$export$d28932b222e3657();
        $74a0a00a497c27cc$export$532884efc244643();
    }
    /**
     * pluginUtils.ExpressMiddleware
     */ register_middlewares(app, auth) {
        this.verdaccio.setAuth(auth);
        const children = [
            new $bac947b2757a6043$export$f8c4f582206e551c(),
            new $05846f8bedfe1d92$export$a0f791cb3d82d3ef(this.parsedConfig),
            new $2cf87e246db124ea$export$dcc64a48664bd665(this.verdaccio, this.parsedConfig, this.core, this.provider),
            new $c5a62cacb647752e$export$82589b1007098c46(this.verdaccio, this.core, this.provider), 
        ];
        for (const child of children)child.register_middlewares(app);
    }
    async userNameAndTokenMatch(userName, userToken) {
        try {
            const userNameForToken = await this.provider.getUserName(userToken);
            if (userNameForToken !== userName) {
                $70d2b1f7dd25caad$export$af88d00dbe7f521.error("The token does not match the user name");
                return false;
            }
            return true;
        } catch (error) {
            $70d2b1f7dd25caad$export$af88d00dbe7f521.error(error);
            return false;
        }
    }
    /**
     * pluginUtils.Auth
     */ async authenticate(userName, userToken, callback) {
        try {
            if (!userName || !userToken || !await this.userNameAndTokenMatch(userName, userToken)) {
                callback(null, false);
                return;
            }
            const user = await this.core.createAuthenticatedUser(userName);
            callback(null, user.real_groups);
        } catch (error) {
            callback(error, false);
        }
    }
    /**
     * pluginUtils.Auth
     */ async allow_access(user, pkg, callback) {
        if (!user.name) {
            // let other auth plugins and verdaccio's default handler deal with unauthenticated users
            callback(null, false);
            return;
        }
        const userGroups = await this.cache.getGroups(user.name);
        // pkg.access cannot be undefined here due to normalisePackageAccess() in @verdaccio/config
        const grant = pkg.access.some((group)=>userGroups.includes(group)
        );
        callback(null, grant);
    }
    /**
     * IPluginAuth
     */ async allow_publish(user, pkg, callback) {
        if (!user.name) {
            // let other auth plugins and verdaccio's default handler deal with unauthenticated users
            callback(null, false);
            return;
        }
        const userGroups = await this.cache.getGroups(user.name);
        // pkg.publish cannot be undefined here due to normalisePackageAccess() in @verdaccio/config
        const grant = pkg.publish.some((group)=>userGroups.includes(group)
        );
        callback(null, grant);
    }
    /**
     * IPluginAuth
     */ async allow_unpublish(user, pkg, callback) {
        console.info("DEBUG", JSON.stringify({
            user: user,
            pkg: pkg
        }));
        if (!user.name) {
            // let other auth plugins and verdaccio's default handler deal with unauthenticated users
            callback(null, false);
            return;
        }
        if (pkg.unpublish === false) {
            // let verdaccio's default behavior call allow_publish() for authentication
            callback(null, undefined);
            return;
        }
        if (pkg.unpublish === true) {
            // `true` is not a valid value - this should never happen - Verdaccio shouldn't even allow us to end up here
            // this here mostly to satisfy TypeScript and avoid an `as string[]` cast below
            callback($820KG$verdacciocore.errorUtils.getInternalError("Invalid package unpublish configuration"), false);
            return;
        }
        const userGroups = await this.cache.getGroups(user.name);
        // pkg.unpublish cannot be undefined here due to normalisePackageAccess() in @verdaccio/config
        const grant = pkg.unpublish.some((group)=>userGroups.includes(group)
        );
        callback(null, grant);
    }
}



($parcel$interopDefault($820KG$dotenv)).config();
var // plugins must be a default export
$24556c77bd0305ce$export$2e2bcd8739ae039 = $d0e737f0ed38563a$export$901cf72dabf2112a;


//# sourceMappingURL=index.js.map
