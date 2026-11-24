module.exports = [
"[turbopack-node]/transforms/postcss.ts?config=[project]/apps/web/postcss.config.mjs { CONFIG => \"[project]/apps/web/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/node_modules__bun_0_gnixiuy564x._.js",
  "chunks/[root-of-the-server]__0pw5h5yjib6_v._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts?config=[project]/apps/web/postcss.config.mjs { CONFIG => \"[project]/apps/web/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];