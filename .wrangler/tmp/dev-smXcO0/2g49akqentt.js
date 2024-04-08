// .wrangler/tmp/bundle-oHIs2P/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// ../../Library/Application Support/fnm/node-versions/v20.5.1/installation/lib/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/pages-u59KOR/bundledWorker-0.5533918026903797.mjs
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ALSes_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  const requestContextAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
        get: (_, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  globalThis[Symbol.for("__cloudflare-request-context__")] = new Proxy(
    {},
    {
      ownKeys: () => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
      getOwnPropertyDescriptor: (_, ...args) => Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args),
      get: (_, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
      set: (_, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value)
    }
  );
  return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
}).catch(() => null);
var te = Object.create;
var V = Object.defineProperty;
var se = Object.getOwnPropertyDescriptor;
var re = Object.getOwnPropertyNames;
var ae = Object.getPrototypeOf;
var ne = Object.prototype.hasOwnProperty;
var N = (e, t) => () => (e && (t = e(e = 0)), t);
var O = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var ie = (e, t, r, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of re(t))
      !ne.call(e, n) && n !== r && V(e, n, { get: () => t[n], enumerable: !(s = se(t, n)) || s.enumerable });
  return e;
};
var j = (e, t, r) => (r = e != null ? te(ae(e)) : {}, ie(t || !e || !e.__esModule ? V(r, "default", { value: e, enumerable: true }) : r, e));
var g;
var l = N(() => {
  g = { collectedLocales: [] };
});
var f;
var h = N(() => {
  f = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^/$", has: [{ type: "header", key: "next-router-prefetch" }], dest: "/index.prefetch.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "next-router-prefetch" }], dest: "/$1.prefetch.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/$", has: [{ type: "header", key: "rsc" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }], filesystem: [{ src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true }, { src: "^/index.prefetch.rsc$", dest: "/index.rsc", has: [{ type: "header", key: "next-router-prefetch" }], continue: true, override: true }, { src: "^/(.+?).prefetch.rsc(?:/)?$", dest: "/$1.rsc", has: [{ type: "header", key: "next-router-prefetch" }], continue: true, override: true }], miss: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$", status: 404, check: true, dest: "$0" }], rewrite: [{ src: "^/_next/data/(.*)$", dest: "/404", status: 404 }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|FzZHC5EN18dOQkiEtxVFs)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*)$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/404", status: 404 }, { src: "^/.*$", dest: "/500", status: 500 }] }, images: { domains: [], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "inline" }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "404.rsc.json": { path: "404.rsc", contentType: "application/json" } }, framework: { version: "14.1.4" }, crons: [], flags: [] };
});
var m;
var d = N(() => {
  m = { "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.rsc.json": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/FzZHC5EN18dOQkiEtxVFs/_buildManifest.js": { type: "static" }, "/_next/static/FzZHC5EN18dOQkiEtxVFs/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/0ea7b743-bc03d9c36869e992.js": { type: "static" }, "/_next/static/chunks/69-e73784e5a86a4b4c.js": { type: "static" }, "/_next/static/chunks/725-3ced6601bd14a007.js": { type: "static" }, "/_next/static/chunks/a3cd4a83-9667346dd41c04f4.js": { type: "static" }, "/_next/static/chunks/app/_not-found-4ba7ad6421927116.js": { type: "static" }, "/_next/static/chunks/app/layout-f2c99d745c4c3a06.js": { type: "static" }, "/_next/static/chunks/app/page-e00d1bb7cacc18d5.js": { type: "static" }, "/_next/static/chunks/b536a0f1-fc8013d7fbbc66f6.js": { type: "static" }, "/_next/static/chunks/c15bf2b0-cb472e806bc3b1e2.js": { type: "static" }, "/_next/static/chunks/fd9d1056-8afb9c6be371ce9c.js": { type: "static" }, "/_next/static/chunks/framework-aec844d2ccbe7592.js": { type: "static" }, "/_next/static/chunks/main-6fa696985ef7683c.js": { type: "static" }, "/_next/static/chunks/main-app-6c2cab9870dacd62.js": { type: "static" }, "/_next/static/chunks/pages/_app-75f6107b0260711c.js": { type: "static" }, "/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js": { type: "static" }, "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js": { type: "static" }, "/_next/static/chunks/webpack-ce3707bbe988fd79.js": { type: "static" }, "/_next/static/css/f4b0b6dc5810e274.css": { type: "static" }, "/_next/static/media/0939ccbd88d29479-s.p.woff2": { type: "static" }, "/_next/static/media/19c6f7bc71ae6455-s.woff2": { type: "static" }, "/_next/static/media/3525ee4f1fc80052-s.p.ttf": { type: "static" }, "/_next/static/media/a3f10806bfaadecd-s.woff2": { type: "static" }, "/_next/static/media/b.c63277ee.png": { type: "static" }, "/_next/static/media/cd31ca627c8e47ef-s.woff2": { type: "static" }, "/_next/static/media/d.712ce0f8.png": { type: "static" }, "/_next/static/media/e09ef39f9e6d759f-s.woff2": { type: "static" }, "/_next/static/media/ran-flipped.7fa039f5.png": { type: "static" }, "/_next/static/media/ran.840b1e8d.png": { type: "static" }, "/_next/static/media/uil.812bd93f.png": { type: "static" }, "/next.svg": { type: "static" }, "/vercel.svg": { type: "static" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/404.rsc": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/favicon.ico": { type: "override", path: "/favicon.ico", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "image/x-icon", "x-next-cache-tags": "_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.html": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.rsc": { type: "override", path: "/index.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } } };
});
var $ = O((Fe, F) => {
  "use strict";
  l();
  h();
  d();
  function w(e, t) {
    e = String(e || "").trim();
    let r = e, s, n = "";
    if (/^[^a-zA-Z\\\s]/.test(e)) {
      s = e[0];
      let o = e.lastIndexOf(s);
      n += e.substring(o + 1), e = e.substring(1, o);
    }
    let a = 0;
    return e = ue(e, (o) => {
      if (/^\(\?[P<']/.test(o)) {
        let c = /^\(\?P?[<']([^>']+)[>']/.exec(o);
        if (!c)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);
        let u = o.substring(c[0].length, o.length - 1);
        return t && (t[a] = c[1]), a++, `(${u})`;
      }
      return o.substring(0, 3) === "(?:" || a++, o;
    }), e = e.replace(/\[:([^:]+):\]/g, (o, c) => w.characterClasses[c] || o), new w.PCRE(e, n, r, n, s);
  }
  function ue(e, t) {
    let r = 0, s = 0, n = false;
    for (let i = 0; i < e.length; i++) {
      let a = e[i];
      if (n) {
        n = false;
        continue;
      }
      switch (a) {
        case "(":
          s === 0 && (r = i), s++;
          break;
        case ")":
          if (s > 0 && (s--, s === 0)) {
            let o = i + 1, c = r === 0 ? "" : e.substring(0, r), u = e.substring(o), p = String(t(e.substring(r, o)));
            e = c + p + u, i = r;
          }
          break;
        case "\\":
          n = true;
          break;
        default:
          break;
      }
    }
    return e;
  }
  (function(e) {
    class t extends RegExp {
      constructor(s, n, i, a, o) {
        super(s, n), this.pcrePattern = i, this.pcreFlags = a, this.delimiter = o;
      }
    }
    e.PCRE = t, e.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(w || (w = {}));
  w.prototype = w.PCRE.prototype;
  F.exports = w;
});
var X = O((U) => {
  "use strict";
  l();
  h();
  d();
  U.parse = we;
  U.serialize = _e;
  var Re = Object.prototype.toString, k = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function we(e, t) {
    if (typeof e != "string")
      throw new TypeError("argument str must be a string");
    for (var r = {}, s = t || {}, n = s.decode || ve, i = 0; i < e.length; ) {
      var a = e.indexOf("=", i);
      if (a === -1)
        break;
      var o = e.indexOf(";", i);
      if (o === -1)
        o = e.length;
      else if (o < a) {
        i = e.lastIndexOf(";", a - 1) + 1;
        continue;
      }
      var c = e.slice(i, a).trim();
      if (r[c] === void 0) {
        var u = e.slice(a + 1, o).trim();
        u.charCodeAt(0) === 34 && (u = u.slice(1, -1)), r[c] = Se(u, n);
      }
      i = o + 1;
    }
    return r;
  }
  function _e(e, t, r) {
    var s = r || {}, n = s.encode || be;
    if (typeof n != "function")
      throw new TypeError("option encode is invalid");
    if (!k.test(e))
      throw new TypeError("argument name is invalid");
    var i = n(t);
    if (i && !k.test(i))
      throw new TypeError("argument val is invalid");
    var a = e + "=" + i;
    if (s.maxAge != null) {
      var o = s.maxAge - 0;
      if (isNaN(o) || !isFinite(o))
        throw new TypeError("option maxAge is invalid");
      a += "; Max-Age=" + Math.floor(o);
    }
    if (s.domain) {
      if (!k.test(s.domain))
        throw new TypeError("option domain is invalid");
      a += "; Domain=" + s.domain;
    }
    if (s.path) {
      if (!k.test(s.path))
        throw new TypeError("option path is invalid");
      a += "; Path=" + s.path;
    }
    if (s.expires) {
      var c = s.expires;
      if (!Pe(c) || isNaN(c.valueOf()))
        throw new TypeError("option expires is invalid");
      a += "; Expires=" + c.toUTCString();
    }
    if (s.httpOnly && (a += "; HttpOnly"), s.secure && (a += "; Secure"), s.priority) {
      var u = typeof s.priority == "string" ? s.priority.toLowerCase() : s.priority;
      switch (u) {
        case "low":
          a += "; Priority=Low";
          break;
        case "medium":
          a += "; Priority=Medium";
          break;
        case "high":
          a += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (s.sameSite) {
      var p = typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite;
      switch (p) {
        case true:
          a += "; SameSite=Strict";
          break;
        case "lax":
          a += "; SameSite=Lax";
          break;
        case "strict":
          a += "; SameSite=Strict";
          break;
        case "none":
          a += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return a;
  }
  function ve(e) {
    return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
  }
  function be(e) {
    return encodeURIComponent(e);
  }
  function Pe(e) {
    return Re.call(e) === "[object Date]" || e instanceof Date;
  }
  function Se(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
});
l();
h();
d();
l();
h();
d();
l();
h();
d();
var v = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
l();
h();
d();
l();
h();
d();
l();
h();
d();
l();
h();
d();
var q = j($());
function C(e, t, r) {
  if (t == null)
    return { match: null, captureGroupKeys: [] };
  let s = r ? "" : "i", n = [];
  return { match: (0, q.default)(`%${e}%${s}`, n).exec(t), captureGroupKeys: n };
}
function b(e, t, r, { namedOnly: s } = {}) {
  return e.replace(/\$([a-zA-Z0-9_]+)/g, (n, i) => {
    let a = r.indexOf(i);
    return s && a === -1 ? n : (a === -1 ? t[parseInt(i, 10)] : t[a + 1]) || "";
  });
}
function L(e, { url: t, cookies: r, headers: s, routeDest: n }) {
  switch (e.type) {
    case "host":
      return { valid: t.hostname === e.value };
    case "header":
      return e.value !== void 0 ? M(e.value, s.get(e.key), n) : { valid: s.has(e.key) };
    case "cookie": {
      let i = r[e.key];
      return i && e.value !== void 0 ? M(e.value, i, n) : { valid: i !== void 0 };
    }
    case "query":
      return e.value !== void 0 ? M(e.value, t.searchParams.get(e.key), n) : { valid: t.searchParams.has(e.key) };
  }
}
function M(e, t, r) {
  let { match: s, captureGroupKeys: n } = C(e, t);
  return r && s && n.length ? { valid: !!s, newRouteDest: b(r, s, n, { namedOnly: true }) } : { valid: !!s };
}
l();
h();
d();
function D(e) {
  let t = new Headers(e.headers);
  return e.cf && (t.set("x-vercel-ip-city", e.cf.city), t.set("x-vercel-ip-country", e.cf.country), t.set("x-vercel-ip-country-region", e.cf.region), t.set("x-vercel-ip-latitude", e.cf.latitude), t.set("x-vercel-ip-longitude", e.cf.longitude)), t.set("x-vercel-sc-host", v), new Request(e, { headers: t });
}
l();
h();
d();
function x(e, t, r) {
  let s = t instanceof Headers ? t.entries() : Object.entries(t);
  for (let [n, i] of s) {
    let a = n.toLowerCase(), o = r?.match ? b(i, r.match, r.captureGroupKeys) : i;
    a === "set-cookie" ? e.append(a, o) : e.set(a, o);
  }
}
function P(e) {
  return /^https?:\/\//.test(e);
}
function R(e, t) {
  for (let [r, s] of t.entries()) {
    let n = /^nxtP(.+)$/.exec(r), i = /^nxtI(.+)$/.exec(r);
    n?.[1] ? (e.set(r, s), e.set(n[1], s)) : i?.[1] ? e.set(i[1], s.replace(/(\(\.+\))+/, "")) : (!e.has(r) || !!s && !e.getAll(r).includes(s)) && e.append(r, s);
  }
}
function A(e, t) {
  let r = new URL(t, e.url);
  return R(r.searchParams, new URL(e.url).searchParams), r.pathname = r.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(r, e);
}
function S(e) {
  return new Response(e.body, e);
}
function H(e) {
  return e.split(",").map((t) => {
    let [r, s] = t.split(";"), n = parseFloat((s ?? "q=1").replace(/q *= */gi, ""));
    return [r.trim(), isNaN(n) ? 1 : n];
  }).sort((t, r) => r[1] - t[1]).map(([t]) => t === "*" || t === "" ? [] : t).flat();
}
l();
h();
d();
function I(e) {
  switch (e) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
async function E(e, { request: t, assetsFetcher: r, ctx: s }, { path: n, searchParams: i }) {
  let a, o = new URL(t.url);
  R(o.searchParams, i);
  let c = new Request(o, t);
  try {
    switch (e?.type) {
      case "function":
      case "middleware": {
        let u = await import(e.entrypoint);
        try {
          a = await u.default(c, s);
        } catch (p) {
          let y = p;
          throw y.name === "TypeError" && y.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${e.entrypoint})`) : p;
        }
        break;
      }
      case "override": {
        a = S(await r.fetch(A(c, e.path ?? n))), e.headers && x(a.headers, e.headers);
        break;
      }
      case "static": {
        a = await r.fetch(A(c, n));
        break;
      }
      default:
        a = new Response("Not Found", { status: 404 });
    }
  } catch (u) {
    return console.error(u), new Response("Internal Server Error", { status: 500 });
  }
  return S(a);
}
function B(e, t) {
  let r = "^//?(?:", s = ")/(.*)$";
  return !e.startsWith(r) || !e.endsWith(s) ? false : e.slice(r.length, -s.length).split("|").every((i) => t.has(i));
}
l();
h();
d();
function le(e, { protocol: t, hostname: r, port: s, pathname: n }) {
  return !(t && e.protocol.replace(/:$/, "") !== t || !new RegExp(r).test(e.hostname) || s && !new RegExp(s).test(e.port) || n && !new RegExp(n).test(e.pathname));
}
function he(e, t) {
  if (e.method !== "GET")
    return;
  let { origin: r, searchParams: s } = new URL(e.url), n = s.get("url"), i = Number.parseInt(s.get("w") ?? "", 10), a = Number.parseInt(s.get("q") ?? "75", 10);
  if (!n || Number.isNaN(i) || Number.isNaN(a) || !t?.sizes?.includes(i) || a < 0 || a > 100)
    return;
  let o = new URL(n, r);
  if (o.pathname.endsWith(".svg") && !t?.dangerouslyAllowSVG)
    return;
  let c = n.startsWith("//"), u = n.startsWith("/") && !c;
  if (!u && !t?.domains?.includes(o.hostname) && !t?.remotePatterns?.find((_) => le(o, _)))
    return;
  let p = e.headers.get("Accept") ?? "", y = t?.formats?.find((_) => p.includes(_))?.replace("image/", "");
  return { isRelative: u, imageUrl: o, options: { width: i, quality: a, format: y } };
}
function de(e, t, r) {
  let s = new Headers();
  if (r?.contentSecurityPolicy && s.set("Content-Security-Policy", r.contentSecurityPolicy), r?.contentDispositionType) {
    let i = t.pathname.split("/").pop(), a = i ? `${r.contentDispositionType}; filename="${i}"` : r.contentDispositionType;
    s.set("Content-Disposition", a);
  }
  e.headers.has("Cache-Control") || s.set("Cache-Control", `public, max-age=${r?.minimumCacheTTL ?? 60}`);
  let n = S(e);
  return x(n.headers, s), n;
}
async function z(e, { buildOutput: t, assetsFetcher: r, imagesConfig: s }) {
  let n = he(e, s);
  if (!n)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: i, imageUrl: a } = n, c = await (i && a.pathname in t ? r.fetch.bind(r) : fetch)(a);
  return de(c, a, s);
}
l();
h();
d();
l();
h();
d();
var pe = "x-vercel-cache-tags";
var fe = "x-next-cache-soft-tags";
async function W(e) {
  let t = `https://${v}/v1/suspense-cache/`;
  if (!e.url.startsWith(t))
    return null;
  try {
    let r = new URL(e.url), s = await me();
    if (r.pathname === "/v1/suspense-cache/revalidate") {
      let i = r.searchParams.get("tags")?.split(",") ?? [];
      for (let a of i)
        await s.revalidateTag(a);
      return new Response(null, { status: 200 });
    }
    let n = r.pathname.replace("/v1/suspense-cache/", "");
    if (!n.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (e.method) {
      case "GET": {
        let i = K(e, fe), a = await s.get(n, { softTags: i });
        return a ? new Response(JSON.stringify(a.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (a.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let i = await e.json();
        return i.data.tags === void 0 && (i.tags ??= K(e, pe) ?? []), await s.set(n, i), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (r) {
    return console.error(r), new Response("Error handling cache request", { status: 500 });
  }
}
async function me() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? G("kv") : G("cache-api");
}
async function G(e) {
  let t = await import(`./__next-on-pages-dist__/cache/${e}.js`);
  return new t.default();
}
function K(e, t) {
  return e.headers.get(t)?.split(",")?.filter(Boolean);
}
function Z() {
  globalThis.fetch[J] || (ge(), globalThis.fetch[J] = true);
}
function ge() {
  let e = globalThis.fetch;
  globalThis.fetch = async (...t) => {
    let r = new Request(...t), s = await ye(r);
    return s || (s = await W(r), s) ? s : (xe(r), e(r));
  };
}
async function ye(e) {
  if (e.url.startsWith("blob:"))
    try {
      let r = (await import(`./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`)).default, s = { async arrayBuffer() {
        return r;
      }, get body() {
        return new ReadableStream({ start(n) {
          let i = Buffer.from(r);
          n.enqueue(i), n.close();
        } });
      }, async text() {
        return Buffer.from(r).toString();
      }, async json() {
        let n = Buffer.from(r);
        return JSON.stringify(n.toString());
      }, async blob() {
        return new Blob(r);
      } };
      return s.clone = () => ({ ...s }), s;
    } catch {
    }
  return null;
}
function xe(e) {
  e.headers.has("user-agent") || e.headers.set("user-agent", "Next.js Middleware");
}
var J = Symbol.for("next-on-pages fetch patch");
l();
h();
d();
var Q = j(X());
var T = class {
  constructor(t, r, s, n, i) {
    this.routes = t;
    this.output = r;
    this.reqCtx = s;
    this.url = new URL(s.request.url), this.cookies = (0, Q.parse)(s.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), R(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = i?.find((a) => a.domain === this.url.hostname), this.locales = new Set(n.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(t, { checkStatus: r, checkIntercept: s }) {
    let n = C(t.src, this.path, t.caseSensitive);
    if (!n.match || t.methods && !t.methods.map((a) => a.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let i = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: t.dest };
    if (!t.has?.find((a) => {
      let o = L(a, i);
      return o.newRouteDest && (i.routeDest = o.newRouteDest), !o.valid;
    }) && !t.missing?.find((a) => L(a, i).valid) && !(r && t.status !== this.status)) {
      if (s && t.dest) {
        let a = /\/(\(\.+\))+/, o = a.test(t.dest), c = a.test(this.path);
        if (o && !c)
          return;
      }
      return { routeMatch: n, routeDest: i.routeDest };
    }
  }
  processMiddlewareResp(t) {
    let r = "x-middleware-override-headers", s = t.headers.get(r);
    if (s) {
      let c = new Set(s.split(",").map((u) => u.trim()));
      for (let u of c.keys()) {
        let p = `x-middleware-request-${u}`, y = t.headers.get(p);
        this.reqCtx.request.headers.get(u) !== y && (y ? this.reqCtx.request.headers.set(u, y) : this.reqCtx.request.headers.delete(u)), t.headers.delete(p);
      }
      t.headers.delete(r);
    }
    let n = "x-middleware-rewrite", i = t.headers.get(n);
    if (i) {
      let c = new URL(i, this.url), u = this.url.hostname !== c.hostname;
      this.path = u ? `${c}` : c.pathname, R(this.searchParams, c.searchParams), t.headers.delete(n);
    }
    let a = "x-middleware-next";
    t.headers.get(a) ? t.headers.delete(a) : !i && !t.headers.has("location") && (this.body = t.body, this.status = t.status), x(this.headers.normal, t.headers), this.headers.middlewareLocation = t.headers.get("location");
  }
  async runRouteMiddleware(t) {
    if (!t)
      return true;
    let r = t && this.output[t];
    if (!r || r.type !== "middleware")
      return this.status = 500, false;
    let s = await E(r, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(t), s.status === 500 ? (this.status = s.status, false) : (this.processMiddlewareResp(s), true);
  }
  applyRouteOverrides(t) {
    !t.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(t, r, s) {
    !t.headers || (x(this.headers.normal, t.headers, { match: r, captureGroupKeys: s }), t.important && x(this.headers.important, t.headers, { match: r, captureGroupKeys: s }));
  }
  applyRouteStatus(t) {
    !t.status || (this.status = t.status);
  }
  applyRouteDest(t, r, s) {
    if (!t.dest)
      return this.path;
    let n = this.path, i = t.dest;
    this.wildcardMatch && /\$wildcard/.test(i) && (i = i.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = b(i, r, s);
    let a = /\/index\.rsc$/i.test(this.path), o = /^\/(?:index)?$/i.test(n), c = /^\/__index\.prefetch\.rsc$/i.test(n);
    a && !o && !c && (this.path = n);
    let u = /\.rsc$/i.test(this.path), p = /\.prefetch\.rsc$/i.test(this.path), y = this.path in this.output;
    u && !p && !y && (this.path = this.path.replace(/\.rsc/i, ""));
    let _ = new URL(this.path, this.url);
    return R(this.searchParams, _.searchParams), P(this.path) || (this.path = _.pathname), n;
  }
  applyLocaleRedirects(t) {
    if (!t.locale?.redirect || !/^\^(.)*$/.test(t.src) && t.src !== this.path || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: s, cookie: n } } = t, i = n && this.cookies[n], a = H(i ?? ""), o = H(this.reqCtx.request.headers.get("accept-language") ?? ""), p = [...a, ...o].map((y) => s[y]).filter(Boolean)[0];
    if (p) {
      !this.path.startsWith(p) && (this.headers.normal.set("location", p), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(t, r) {
    return !this.locales || r !== "miss" ? t : B(t.src, this.locales) ? { ...t, src: t.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : t;
  }
  async checkRoute(t, r) {
    let s = this.getLocaleFriendlyRoute(r, t), { routeMatch: n, routeDest: i } = this.checkRouteMatch(s, { checkStatus: t === "error", checkIntercept: t === "rewrite" }) ?? {}, a = { ...s, dest: i };
    if (!n?.match || a.middlewarePath && this.middlewareInvoked.includes(a.middlewarePath))
      return "skip";
    let { match: o, captureGroupKeys: c } = n;
    if (this.applyRouteOverrides(a), this.applyLocaleRedirects(a), !await this.runRouteMiddleware(a.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(a, o, c), this.applyRouteStatus(a);
    let p = this.applyRouteDest(a, o, c);
    if (a.check && !P(this.path))
      if (p === this.path) {
        if (t !== "miss")
          return this.checkPhase(I(t));
        this.status = 404;
      } else if (t === "miss") {
        if (!(this.path in this.output) && !(this.path.replace(/\/$/, "") in this.output))
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else
        return this.checkPhase("none");
    return !a.continue || a.status && a.status >= 300 && a.status <= 399 ? "done" : "next";
  }
  async checkPhase(t) {
    if (this.checkPhaseCounter++ >= 50)
      return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let r = true;
    for (let i of this.routes[t]) {
      let a = await this.checkRoute(t, i);
      if (a === "error")
        return "error";
      if (a === "done") {
        r = false;
        break;
      }
    }
    if (t === "hit" || P(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    if (t === "none")
      for (let i of this.locales) {
        let a = new RegExp(`/${i}(/.*)`), c = this.path.match(a)?.[1];
        if (c && c in this.output) {
          this.path = c;
          break;
        }
      }
    let s = this.path in this.output;
    if (!s && this.path.endsWith("/")) {
      let i = this.path.replace(/\/$/, "");
      s = i in this.output, s && (this.path = i);
    }
    if (t === "miss" && !s) {
      let i = !this.status || this.status < 400;
      this.status = i ? 404 : this.status;
    }
    let n = "miss";
    return s || t === "miss" || t === "error" ? n = "hit" : r && (n = I(t)), this.checkPhase(n);
  }
  async run(t = "none") {
    this.checkPhaseCounter = 0;
    let r = await this.checkPhase(t);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), r;
  }
};
async function Y(e, t, r, s) {
  let n = new T(t.routes, r, e, s, t.wildcard), i = await ee(n);
  return Ce(e, i, r);
}
async function ee(e, t = "none", r = false) {
  return await e.run(t) === "error" || !r && e.status && e.status >= 400 ? ee(e, "error", true) : { path: e.path, status: e.status, headers: e.headers, searchParams: e.searchParams, body: e.body };
}
async function Ce(e, { path: t = "/404", status: r, headers: s, searchParams: n, body: i }, a) {
  let o = s.normal.get("location");
  if (o) {
    if (o !== s.middlewareLocation) {
      let p = [...n.keys()].length ? `?${n.toString()}` : "";
      s.normal.set("location", `${o ?? "/"}${p}`);
    }
    return new Response(null, { status: r, headers: s.normal });
  }
  let c;
  if (i !== void 0)
    c = new Response(i, { status: r });
  else if (P(t)) {
    let p = new URL(t);
    R(p.searchParams, n), c = await fetch(p, e.request);
  } else
    c = await E(a[t], e, { path: t, status: r, headers: s, searchParams: n });
  let u = s.normal;
  return x(u, c.headers), x(u, s.important), c = new Response(c.body, { ...c, status: r || c.status, headers: u }), c;
}
var ns = { async fetch(e, t, r) {
  Z();
  let s = await __ALSes_PROMISE__;
  if (!s) {
    let a = new URL(e.url), o = await t.ASSETS.fetch(`${a.protocol}//${a.host}/cdn-cgi/errors/no-nodejs_compat.html`), c = o.ok ? o.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(c, { status: 503 });
  }
  let { envAsyncLocalStorage: n, requestContextAsyncLocalStorage: i } = s;
  return n.run({ ...t, NODE_ENV: "production", SUSPENSE_CACHE_URL: v }, async () => i.run({ env: t, ctx: r, cf: e.cf }, async () => {
    if (new URL(e.url).pathname.startsWith("/_next/image"))
      return z(e, { buildOutput: m, assetsFetcher: t.ASSETS, imagesConfig: f.images });
    let o = D(e);
    return Y({ request: o, ctx: r, assetsFetcher: t.ASSETS }, f, m, g);
  }));
} };

// ../../Library/Application Support/fnm/node-versions/v20.5.1/installation/lib/node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}

// .wrangler/tmp/pages-u59KOR/2g49akqentt.js
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.11.0.", include: ["/*"], exclude: ["/_next/static/*"] };
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
        if (ns.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return ns.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// ../../Library/Application Support/fnm/node-versions/v20.5.1/installation/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;

// .wrangler/tmp/bundle-oHIs2P/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...pages_dev_pipeline_default,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...pages_dev_pipeline_default.middleware ? pages_dev_pipeline_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// .wrangler/tmp/bundle-oHIs2P/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  middleware_loader_entry_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=2g49akqentt.js.map
