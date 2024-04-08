// <define:__ROUTES__>
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.11.0.", include: ["/*"], exclude: ["/_next/static/*"] };

// ../../Library/Application Support/fnm/node-versions/v20.5.1/installation/lib/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/aiden/development/april-24-portfolio/.wrangler/tmp/pages-u59KOR/bundledWorker-0.5533918026903797.mjs";
export * from "/Users/aiden/development/april-24-portfolio/.wrangler/tmp/pages-u59KOR/bundledWorker-0.5533918026903797.mjs";
import { isRoutingRuleMatch } from "/Users/aiden/Library/Application Support/fnm/node-versions/v20.5.1/installation/lib/node_modules/wrangler/templates/pages-dev-util.ts";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=2g49akqentt.js.map
