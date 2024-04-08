				import worker, * as OTHER_EXPORTS from "/Users/aiden/development/april-24-portfolio/.wrangler/tmp/pages-u59KOR/2g49akqentt.js";
				import * as __MIDDLEWARE_0__ from "/Users/aiden/Library/Application Support/fnm/node-versions/v20.5.1/installation/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "/Users/aiden/development/april-24-portfolio/.wrangler/tmp/pages-u59KOR/2g49akqentt.js";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;