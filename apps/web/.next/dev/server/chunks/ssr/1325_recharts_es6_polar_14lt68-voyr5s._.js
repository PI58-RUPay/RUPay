module.exports = [
"[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pie",
    ()=>Pie,
    "computePieSectors",
    ()=>computePieSectors,
    "defaultPieProps",
    ()=>defaultPieProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.4.6+df897a89478e04b5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$es$2d$toolkit$40$1$2e$53$2e$2$2f$node_modules$2f$es$2d$toolkit$2f$dist$2f$compat$2f$object$2f$get$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__get__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/object/get.mjs [app-ssr] (ecmascript) <export get as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$pieSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/state/selectors/pieSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/container/Layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/shape/Curve.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Sector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/shape/Sector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/component/Text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/component/Cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/util/PolarUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/util/DataUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/util/ChartUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/util/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ActiveShapeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/util/ActiveShapeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$tooltipContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/context/tooltipContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$SetTooltipEntrySettings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/state/SetTooltipEntrySettings.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$tooltipSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/state/selectors/tooltipSelectors.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$SetLegendPayload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/state/SetLegendPayload.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/util/Constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$AnimatedItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/animation/AnimatedItems.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$matchBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/animation/matchBy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/util/resolveDefaultProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$RegisterGraphicalItemId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/context/RegisterGraphicalItemId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$SetGraphicalItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/state/SetGraphicalItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/util/svgPropertiesNoEvents.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/component/LabelList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/component/Label.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$zIndex$2f$ZIndexLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/zIndex/ZIndexLayer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$zIndex$2f$DefaultZIndexes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/zIndex/DefaultZIndexes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$getClassNameFromUnknown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/util/getClassNameFromUnknown.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartLayoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/context/chartLayoutContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$labelTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/theme/labelTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$themeFill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/theme/themeFill.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$fill$2f$fillDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/fill/fillDefinitions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$useBackwardsCompatibleTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/theme/useBackwardsCompatibleTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$dataEntryStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/theme/dataEntryStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$activeStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/theme/activeStyles.js [app-ssr] (ecmascript)");
var _excluded = [
    "key"
], _excluded2 = [
    "onMouseEnter",
    "onClick",
    "onMouseLeave"
], _excluded3 = [
    "id",
    "graphicalItems",
    "explicitStyleProps",
    "pieFillObject"
], _excluded4 = [
    "id"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Properties needed by custom label renderers that happen to share their names with SVG
 * attributes. Everything else that is a valid SVG property must not leak from a data entry
 * onto the label line or the label text: labels keep the entry color only.
 * https://github.com/recharts/recharts/issues/7974
 */ var LABEL_GEOMETRY_PROP_KEYS = new Set([
    'cx',
    'cy',
    'r',
    'name'
]);
function filterEntryPropsForLabels(obj) {
    var result = {};
    for(var key in obj){
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
            continue;
        }
        if (key === 'id' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDataAttribute"])(key)) {
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSvgElementPropKey"])(key) && !LABEL_GEOMETRY_PROP_KEYS.has(key)) {
            continue;
        }
        result[key] = obj[key];
    }
    return result;
}
/**
 * @public
 */ /**
 * @public
 */ /**
 * @public
 */ /**
 * The `label` prop in Pie accepts a variety of alternatives.
 * @public
 */ /**
 * We spread the data object into the sector data item,
 * so we can't really know what is going to be inside.
 *
 * This type represents our best effort, but it all depends on the input data
 * and what is inside of it.
 *
 * https://github.com/recharts/recharts/issues/6380
 * https://github.com/recharts/recharts/discussions/6375
 * @public
 */ /**
 * @public
 */ /**
 * @public
 */ /**
 * Internal props, combination of external props + defaultProps + private Recharts state
 */ /**
 * The type is exported only so that TypeScript can name it in the declaration files of projects
 * that wrap Recharts components. It is not part of the public API and may change in any release.
 *
 * @internal
 */ /**
 * @public
 */ var defaultPieSectorShape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Sector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sector"];
/**
 * Props after the fill object is split off: `fill` is the base color.
 */ /**
 * Resolves the styles of a single sector when a theme is present.
 * Returns undefined without a theme, in which case the legacy styles apply.
 *
 * The legacy default fill and stroke of the Pie are never part of the result,
 * because they never apply together with a theme.
 *
 * @param payload the data entry, merged with the props of its Cell
 * @param index index of the sector
 * @param graphicalItems graphical item styles from the theme
 * @param explicitStyleProps style props that the user set on the Pie, before applying defaults
 */ function getThemedPieStyles(payload, index, graphicalItems, explicitStyleProps) {
    var _ownStyles$fillOpacit, _ownStyles$strokeOpac, _ownStyles$strokeWidt, _ownStyles$strokeDash;
    var graphicalItemStyle = graphicalItems[index % graphicalItems.length];
    if (graphicalItemStyle == null) {
        return undefined;
    }
    // A fill object in the data entry counts by its color only, so one without a color keeps the theme colors
    var entryStyles = payload != null && typeof payload === 'object' ? _objectSpread(_objectSpread({}, payload), {}, {
        fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$fill$2f$fillDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readEntryFill"])(payload).color
    }) : {};
    // The data entry wins over the Pie props, and both win over the theme.
    var ownStyles = _objectSpread(_objectSpread({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$dataEntryStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOwnStyles"])(explicitStyleProps)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$dataEntryStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOwnStyles"])(entryStyles));
    /*
   * If the data entry (or its Cell), or the Pie itself, brings its own colors,
   * the sector drops the theme fill and stroke together, so that the colors never mix.
   * Styles without a color of their own merge with the theme field by field.
   */ var hasExplicitColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$dataEntryStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwnColors"])(entryStyles) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$dataEntryStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwnColors"])(explicitStyleProps);
    return {
        fill: hasExplicitColors ? ownStyles.fill : graphicalItemStyle.fill,
        fillOpacity: (_ownStyles$fillOpacit = ownStyles.fillOpacity) !== null && _ownStyles$fillOpacit !== void 0 ? _ownStyles$fillOpacit : graphicalItemStyle.fillOpacity,
        stroke: hasExplicitColors ? ownStyles.stroke : graphicalItemStyle.stroke,
        strokeOpacity: (_ownStyles$strokeOpac = ownStyles.strokeOpacity) !== null && _ownStyles$strokeOpac !== void 0 ? _ownStyles$strokeOpac : graphicalItemStyle.strokeOpacity,
        strokeWidth: (_ownStyles$strokeWidt = ownStyles.strokeWidth) !== null && _ownStyles$strokeWidt !== void 0 ? _ownStyles$strokeWidt : graphicalItemStyle.strokeWidth,
        strokeDasharray: (_ownStyles$strokeDash = ownStyles.strokeDasharray) !== null && _ownStyles$strokeDash !== void 0 ? _ownStyles$strokeDash : graphicalItemStyle.strokeDasharray
    };
}
/**
 * Legend and Tooltip show a single color for each sector.
 * Pie sectors are primarily filled, so the fill wins. A sector that has no fill shows its stroke instead.
 */ function getPieEntryColor(styles) {
    return styles.fill && styles.fill !== 'none' ? styles.fill : styles.stroke;
}
function getThemedPieSector(sector, index, graphicalItems, explicitStyleProps) {
    var _sector$tooltipPayloa;
    var styles = getThemedPieStyles(sector.payload, index, graphicalItems, explicitStyleProps);
    if (styles == null) {
        return sector;
    }
    return _objectSpread(_objectSpread(_objectSpread({}, sector), styles), {}, {
        tooltipPayload: (_sector$tooltipPayloa = sector.tooltipPayload) === null || _sector$tooltipPayloa === void 0 ? void 0 : _sector$tooltipPayloa.map((item)=>_objectSpread(_objectSpread({}, item), {}, {
                color: getPieEntryColor(styles),
                fill: styles.fill
            }))
    });
}
function SetPiePayloadLegend(props) {
    var cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findAllByType"])(props.children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"]), [
        props.children
    ]);
    var themeFillObjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$fill$2f$fillDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThemeFillObjects"])();
    var legendPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$pieSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectPieLegend"])(state, props.id, cells));
    if (legendPayload == null) {
        return null;
    }
    var themedLegendPayload = legendPayload.map((entry, index)=>{
        var _cells$index;
        var payloadWithCell = _objectSpread(_objectSpread({}, entry.payload), cells === null || cells === void 0 || (_cells$index = cells[index]) === null || _cells$index === void 0 ? void 0 : _cells$index.props);
        var fill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$fill$2f$fillDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIndexedEntryFillObject"])(payloadWithCell, index, props.pieFillObject, themeFillObjects, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$dataEntryStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwnColors"])(props.explicitStyleProps));
        var styles = getThemedPieStyles(payloadWithCell, index, props.graphicalItems, props.explicitStyleProps);
        if (styles == null) {
            return fill == null ? entry : _objectSpread(_objectSpread({}, entry), {}, {
                fill
            });
        }
        return _objectSpread(_objectSpread({}, entry), {}, {
            color: getPieEntryColor(styles),
            fill
        });
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$SetLegendPayload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetPolarLegendPayload"], {
        legendPayload: themedLegendPayload
    });
}
function getActiveShapeFill(activeShape) {
    // activeShape can be boolean/function/element/object; only element/object can carry a static fill value.
    if (activeShape == null || typeof activeShape === 'boolean' || typeof activeShape === 'function') {
        return undefined;
    }
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](activeShape)) {
        var _activeShape$props;
        // React element form: <Sector fill="..."/> or custom element with fill prop.
        var _fill = (_activeShape$props = activeShape.props) === null || _activeShape$props === void 0 ? void 0 : _activeShape$props.fill;
        return typeof _fill === 'string' ? _fill : undefined;
    }
    var fill = activeShape.fill;
    return typeof fill === 'string' ? fill : undefined;
}
var SetPieTooltipEntrySettings = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"]((_ref)=>{
    var dataKey = _ref.dataKey, nameKey = _ref.nameKey, sectors = _ref.sectors, stroke = _ref.stroke, strokeWidth = _ref.strokeWidth, fill = _ref.fill, name = _ref.name, hide = _ref.hide, tooltipType = _ref.tooltipType, formatter = _ref.formatter, id = _ref.id, activeShape = _ref.activeShape;
    var activeShapeFill = getActiveShapeFill(activeShape);
    var tooltipDataDefinedOnItem = sectors.map((sector)=>{
        var sectorTooltipPayload = sector.tooltipPayload;
        if (activeShapeFill == null || sectorTooltipPayload == null) {
            return sectorTooltipPayload;
        }
        return sectorTooltipPayload.map((item)=>_objectSpread(_objectSpread({}, item), {}, {
                color: activeShapeFill,
                fill: activeShapeFill
            }));
    });
    var tooltipEntrySettings = {
        dataDefinedOnItem: tooltipDataDefinedOnItem,
        getPosition: (index)=>{
            var _sectors$Number;
            return (_sectors$Number = sectors[Number(index)]) === null || _sectors$Number === void 0 ? void 0 : _sectors$Number.tooltipPosition;
        },
        settings: {
            stroke,
            strokeWidth,
            fill,
            dataKey,
            nameKey,
            name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTooltipNameProp"])(name, dataKey),
            hide,
            type: tooltipType,
            color: fill,
            unit: '',
            // why doesn't Pie support unit?
            formatter,
            graphicalItemId: id
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$SetTooltipEntrySettings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetTooltipEntrySettings"], {
        tooltipEntrySettings: tooltipEntrySettings
    });
});
var getTextAnchor = (x, cx)=>{
    if (x > cx) {
        return 'start';
    }
    if (x < cx) {
        return 'end';
    }
    return 'middle';
};
var getOuterRadius = (dataPoint, outerRadius, maxPieRadius)=>{
    if (typeof outerRadius === 'function') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPercentValue"])(outerRadius(dataPoint), maxPieRadius, maxPieRadius * 0.8);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPercentValue"])(outerRadius, maxPieRadius, maxPieRadius * 0.8);
};
var parseCoordinateOfPie = (pieSettings, offset, dataPoint)=>{
    var _pieSettings$maxRadiu, _pieSettings$maxRadiu2;
    var top = offset.top, left = offset.left, width = offset.width, height = offset.height;
    var maxPieRadius = (_pieSettings$maxRadiu = pieSettings.maxRadius) !== null && _pieSettings$maxRadiu !== void 0 ? _pieSettings$maxRadiu : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxRadius"])(width, height);
    var cx = left + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPercentValue"])(pieSettings.cx, width, width / 2);
    var cy = top + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPercentValue"])(pieSettings.cy, height, height / 2);
    var innerRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPercentValue"])(pieSettings.innerRadius, maxPieRadius, 0);
    var outerRadius = getOuterRadius(dataPoint, pieSettings.outerRadius, maxPieRadius);
    var maxRadius = (_pieSettings$maxRadiu2 = pieSettings.maxRadius) !== null && _pieSettings$maxRadiu2 !== void 0 ? _pieSettings$maxRadiu2 : Math.sqrt(width * width + height * height) / 2;
    return {
        cx,
        cy,
        innerRadius,
        outerRadius,
        maxRadius
    };
};
var parseDeltaAngle = (startAngle, endAngle)=>{
    var sign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mathSign"])(endAngle - startAngle);
    var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
    return sign * deltaAngle;
};
var renderLabelLineItem = (option, props)=>{
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](option)) {
        // @ts-expect-error we can't know if the type of props matches the element
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](option, props);
    }
    if (typeof option === 'function') {
        return option(props);
    }
    var className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-pie-label-line', typeof option !== 'boolean' ? option.className : '');
    // React doesn't like it when we spread a key property onto an element
    var key = props.key, otherProps = _objectWithoutProperties(props, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Curve"], _extends({}, otherProps, {
        type: "linear",
        className: className
    }));
};
var renderLabelItem = (option, props, value, background)=>{
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](option)) {
        // @ts-expect-error element cloning is not typed
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](option, props);
    }
    var label = value;
    if (typeof option === 'function') {
        label = option(props);
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](label)) {
            return label;
        }
    }
    var className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-pie-label-text', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$getClassNameFromUnknown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClassNameFromUnknown"])(option));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], _extends({}, props, {
        alignmentBaseline: "middle",
        className: className,
        background: background
    }), label);
};
/**
 * Returns the props of the default Pie label, if the `label` prop sets them as an object.
 */ function getPieLabelObject(label) {
    if (label == null || typeof label !== 'object' || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](label) || 'position' in label) {
        return undefined;
    }
    return label;
}
function PieLabels(_ref2) {
    var sectors = _ref2.sectors, props = _ref2.props, showLabels = _ref2.showLabels;
    var resolveLabelTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$labelTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDataLabelThemeResolver"])();
    var label = props.label, labelLine = props.labelLine, dataKey = props.dataKey;
    if (!showLabels || !label || !sectors) {
        return null;
    }
    var pieProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEvents"])(props);
    var customLabelProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEventsFromUnknown"])(label);
    var labelObject = getPieLabelObject(label);
    var customLabelLineProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEventsFromUnknown"])(labelLine);
    var offsetRadius = typeof label === 'object' && 'offsetRadius' in label && typeof label.offsetRadius === 'number' && label.offsetRadius || 20;
    var labels = sectors.map((entry, i)=>{
        var _labelObject$style;
        var midAngle = (entry.startAngle + entry.endAngle) / 2;
        var endPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
        var entryLabelProps = filterEntryPropsForLabels(entry);
        var labelProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, pieProps), entryLabelProps), {}, {
            // @ts-expect-error entry fill is a valid label color
            fill: entry.fill,
            // @ts-expect-error customLabelProps is contributing unknown props
            stroke: 'none'
        }, customLabelProps), {}, {
            index: i,
            textAnchor: getTextAnchor(endPoint.x, entry.cx)
        }, endPoint);
        var themedLabelProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$labelTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyLabelTheme"])(resolveLabelTheme === null || resolveLabelTheme === void 0 ? void 0 : resolveLabelTheme(i), {
            fill: labelObject === null || labelObject === void 0 ? void 0 : labelObject.fill,
            style: (_labelObject$style = labelObject === null || labelObject === void 0 ? void 0 : labelObject.style) !== null && _labelObject$style !== void 0 ? _labelObject$style : labelProps.style,
            background: labelObject === null || labelObject === void 0 ? void 0 : labelObject.background
        }, labelProps.fill);
        var finalLabelProps = _objectSpread(_objectSpread({}, labelProps), themedLabelProps);
        var lineProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, pieProps), entryLabelProps), {}, {
            // @ts-expect-error customLabelLineProps is contributing unknown props
            fill: 'none',
            // @ts-expect-error customLabelLineProps is contributing unknown props
            stroke: entry.fill
        }, customLabelLineProps), {}, {
            index: i,
            points: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(entry.cx, entry.cy, entry.outerRadius, midAngle),
                endPoint
            ],
            key: 'line'
        });
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$zIndex$2f$ZIndexLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZIndexLayer"], {
            zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$zIndex$2f$DefaultZIndexes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultZIndexes"].label,
            key: "label-".concat(entry.startAngle, "-").concat(entry.endAngle, "-").concat(entry.midAngle, "-").concat(i)
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], null, labelLine && renderLabelLineItem(labelLine, lineProps), renderLabelItem(label, finalLabelProps, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueByDataKey"])(entry.payload, dataKey, entry.value), themedLabelProps.background)));
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
        className: "recharts-pie-labels"
    }, labels);
}
function PieLabelList(_ref3) {
    var sectors = _ref3.sectors, props = _ref3.props, showLabels = _ref3.showLabels;
    var label = props.label;
    if (typeof label === 'object' && label != null && 'position' in label) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LabelListFromLabelProp"], {
            label: label
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](PieLabels, {
        sectors: sectors,
        props: props,
        showLabels: showLabels
    });
}
function PieSectors(props) {
    var sectors = props.sectors, activeShape = props.activeShape, inactiveShapeProp = props.inactiveShape, allOtherPieProps = props.allOtherPieProps, shape = props.shape, id = props.id, animationElapsedTime = props.animationElapsedTime, isAnimating = props.isAnimating, isEntrance = props.isEntrance, indexedActiveStyles = props.indexedActiveStyles;
    var activeIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$tooltipSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["selectActiveTooltipIndex"]);
    var activeDataKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$tooltipSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["selectActiveTooltipDataKey"]);
    var activeGraphicalItemId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$tooltipSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["selectActiveTooltipGraphicalItemId"]);
    var onMouseEnterFromProps = allOtherPieProps.onMouseEnter, onItemClickFromProps = allOtherPieProps.onClick, onMouseLeaveFromProps = allOtherPieProps.onMouseLeave, restOfAllOtherProps = _objectWithoutProperties(allOtherPieProps, _excluded2);
    var onMouseEnterFromContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$tooltipContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMouseEnterItemDispatch"])(onMouseEnterFromProps, allOtherPieProps.dataKey, id);
    var onMouseLeaveFromContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$tooltipContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMouseLeaveItemDispatch"])(onMouseLeaveFromProps);
    var onClickFromContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$tooltipContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMouseClickItemDispatch"])(onItemClickFromProps, allOtherPieProps.dataKey, id);
    if (sectors == null || sectors.length === 0) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, sectors.map((entry, i)=>{
        var _allOtherPieProps$sec, _allOtherPieProps$sec2;
        if ((entry === null || entry === void 0 ? void 0 : entry.startAngle) === 0 && (entry === null || entry === void 0 ? void 0 : entry.endAngle) === 0 && sectors.length !== 1) return null;
        // For Pie charts, when multiple Pies share the same dataKey, we need to ensure only the hovered Pie's sector is active.
        // We do this by checking if the active graphical item ID matches this Pie's ID.
        var graphicalItemMatches = activeGraphicalItemId == null || activeGraphicalItemId === id;
        var isActive = String(i) === activeIndex && (activeDataKey == null || allOtherPieProps.dataKey === activeDataKey) && graphicalItemMatches;
        var inactiveShape = activeIndex ? inactiveShapeProp : null;
        /*
     * Same as `activeBar` in Bar: `activeShape={true}` renders the `shape`,
     * so a custom `shape` renders the active sector too, and it decides on its own how the active state looks like.
     */ var option;
        var usesInactiveShape = false;
        if (isActive && activeShape) {
            option = activeShape === true ? shape : activeShape;
        } else if (inactiveShape != null) {
            option = inactiveShape;
            usesInactiveShape = true;
        } else {
            option = shape;
        }
        var sectorProps = _objectSpread(_objectSpread({}, entry), {}, {
            fill: (_allOtherPieProps$sec = (_allOtherPieProps$sec2 = allOtherPieProps.sectorPaintFills) === null || _allOtherPieProps$sec2 === void 0 ? void 0 : _allOtherPieProps$sec2[i]) !== null && _allOtherPieProps$sec !== void 0 ? _allOtherPieProps$sec : entry.fill,
            stroke: entry.stroke,
            tabIndex: -1,
            index: i,
            isActive,
            animationElapsedTime,
            isAnimating,
            isEntrance,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATA_ITEM_INDEX_ATTRIBUTE_NAME"]]: i,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME"]]: id
        });
        /*
     * The theme active styles only apply to the default sector, or to an `activeShape` object on top of it.
     * A custom `shape` or `activeShape` (function or element) receives none of them,
     * and neither does the deprecated `inactiveShape` when it renders the active sector.
     */ var activeStyleOverrides = isActive && !usesInactiveShape ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$activeStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveStyleOverrides"])(option === defaultPieSectorShape ? true : option, indexedActiveStyles[i % indexedActiveStyles.length], entry.payload) : undefined;
        var activeSectorProps = activeStyleOverrides == null ? sectorProps : _objectSpread(_objectSpread({}, sectorProps), activeStyleOverrides);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], _extends({
            key: "sector-".concat(entry === null || entry === void 0 ? void 0 : entry.startAngle, "-").concat(entry === null || entry === void 0 ? void 0 : entry.endAngle, "-").concat(entry.midAngle, "-").concat(i),
            tabIndex: -1,
            className: "recharts-pie-sector"
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adaptEventsOfChild"])(restOfAllOtherProps, entry, i), {
            onMouseEnter: onMouseEnterFromContext(entry, i),
            onMouseLeave: onMouseLeaveFromContext(entry, i),
            onClick: onClickFromContext(entry, i)
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ActiveShapeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shape"], {
            option: option,
            DefaultShape: defaultPieSectorShape,
            shapeProps: activeSectorProps
        }));
    }));
}
// getValueByDataKey returns null as-is (the default applies only to undefined), so treat it like 0.
// See: https://github.com/recharts/recharts/issues/7965
function isNonZeroNumber(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(value) && value !== 0;
}
function computePieSectors(_ref4) {
    var _pieSettings$paddingA;
    var pieSettings = _ref4.pieSettings, displayedData = _ref4.displayedData, cells = _ref4.cells, offset = _ref4.offset;
    var cornerRadius = pieSettings.cornerRadius, startAngle = pieSettings.startAngle, endAngle = pieSettings.endAngle, dataKey = pieSettings.dataKey, nameKey = pieSettings.nameKey, tooltipType = pieSettings.tooltipType;
    var minAngle = Math.abs(pieSettings.minAngle);
    var deltaAngle = parseDeltaAngle(startAngle, endAngle);
    var absDeltaAngle = Math.abs(deltaAngle);
    var notZeroItemCount = displayedData.filter((entry)=>isNonZeroNumber((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueByDataKey"])(entry, dataKey, 0))).length;
    var paddingAngle = notZeroItemCount <= 1 ? 0 : (_pieSettings$paddingA = pieSettings.paddingAngle) !== null && _pieSettings$paddingA !== void 0 ? _pieSettings$paddingA : 0;
    var firstNonZeroIndex = displayedData.findIndex((entry)=>isNonZeroNumber((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueByDataKey"])(entry, dataKey, 0)));
    var totalPaddingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
    var sum = displayedData.reduce((result, entry)=>{
        var val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueByDataKey"])(entry, dataKey, 0);
        return result + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(val) ? val : 0);
    }, 0);
    // Only apply minAngle redistribution when at least one non-zero segment's
    // natural angle falls below the minAngle threshold. Otherwise, minAngle
    // unnecessarily shifts all segments even when none need the boost.
    // See: https://github.com/recharts/recharts/issues/6814
    var needsMinAngleAdjustment = minAngle > 0 && sum > 0 && displayedData.some((entry)=>{
        var val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueByDataKey"])(entry, dataKey, 0);
        var percent = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(val) ? val : 0) / sum;
        return isNonZeroNumber(val) && percent * absDeltaAngle < minAngle;
    });
    var effectiveMinAngle = needsMinAngleAdjustment ? minAngle : 0;
    var realTotalAngle = absDeltaAngle - notZeroItemCount * effectiveMinAngle - totalPaddingAngle;
    var sectors;
    if (sum > 0) {
        var prev;
        sectors = displayedData.map((entry, i)=>{
            var _entryFill$color;
            var val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueByDataKey"])(entry, dataKey, 0);
            var name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueByDataKey"])(entry, nameKey, i);
            var coordinate = parseCoordinateOfPie(pieSettings, offset, entry);
            var percent = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(val) ? val : 0) / sum;
            var tempStartAngle;
            // @ts-expect-error can't spread unknown
            var entryWithCellInfo = _objectSpread(_objectSpread({}, entry), cells && cells[i] && cells[i].props);
            // `id` from a data entry is never spread on rendered elements to avoid duplicate DOM ids.
            // The raw entry, id included, stays available through `payload`.
            var entryWithoutId = _objectSpread({}, entryWithCellInfo);
            delete entryWithoutId.id;
            var entryFill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$fill$2f$fillDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readEntryFill"])(entryWithCellInfo);
            var sectorColor = (_entryFill$color = entryFill.color) !== null && _entryFill$color !== void 0 ? _entryFill$color : pieSettings.fill;
            // Leading zero values take no space, so the first visible sector gets no padding in front of it.
            var isFirstAfterLeadingZeros = i > 0 && i === firstNonZeroIndex;
            var hasPadding = isNonZeroNumber(val) && !isFirstAfterLeadingZeros;
            if (i) {
                tempStartAngle = prev.endAngle + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mathSign"])(deltaAngle) * paddingAngle * (hasPadding ? 1 : 0);
            } else {
                tempStartAngle = startAngle;
            }
            var tempEndAngle = tempStartAngle + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mathSign"])(deltaAngle) * ((isNonZeroNumber(val) ? effectiveMinAngle : 0) + percent * realTotalAngle);
            var midAngle = (tempStartAngle + tempEndAngle) / 2;
            var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
            var tooltipPayload = [
                {
                    name,
                    value: val,
                    payload: entryWithCellInfo,
                    dataKey,
                    type: tooltipType,
                    color: sectorColor,
                    fill: sectorColor,
                    graphicalItemId: pieSettings.id
                }
            ];
            var tooltipPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(coordinate.cx, coordinate.cy, middleRadius, midAngle);
            prev = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, pieSettings.presentationProps), {}, {
                percent,
                cornerRadius: typeof cornerRadius === 'string' ? parseFloat(cornerRadius) : cornerRadius,
                name,
                tooltipPayload,
                midAngle,
                middleRadius,
                tooltipPosition
            }, entryWithoutId), entryFill.fillObject == null ? undefined : {
                fill: sectorColor
            }), coordinate), {}, {
                value: val,
                dataKey,
                startAngle: tempStartAngle,
                endAngle: tempEndAngle,
                payload: entryWithCellInfo,
                paddingAngle: hasPadding ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mathSign"])(deltaAngle) * paddingAngle : 0
            });
            return prev;
        });
    }
    return sectors;
}
function PieLabelListProvider(_ref5) {
    var showLabels = _ref5.showLabels, sectors = _ref5.sectors, children = _ref5.children;
    var labelListEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!showLabels || !sectors) {
            return [];
        }
        return sectors.map((entry)=>({
                value: entry.value,
                payload: entry.payload,
                clockWise: false,
                parentViewBox: undefined,
                viewBox: {
                    cx: entry.cx,
                    cy: entry.cy,
                    innerRadius: entry.innerRadius,
                    outerRadius: entry.outerRadius,
                    startAngle: entry.startAngle,
                    endAngle: entry.endAngle,
                    clockWise: false
                },
                fill: entry.fill
            }));
    }, [
        sectors,
        showLabels
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarLabelListContextProvider"], {
        value: showLabels ? labelListEntries : undefined
    }, children);
}
var defaultPieAnimateItems = (items, animationElapsedTime)=>{
    if (items == null) return [];
    var stepData = [];
    var firstNonRemoved = items.find((item)=>item.status !== 'removed');
    var curAngle = firstNonRemoved ? firstNonRemoved.next.startAngle : 0;
    items.forEach((item, index)=>{
        if (item.status === 'removed') return;
        if (item.status === 'matched') {
            /*
       * The padding angle can itself change between prev and next (for example when a segment's
       * value crosses zero, its padding drops to 0). Interpolate it the same way as the arc angle
       * itself, otherwise the gap snaps to its final value on the very first animation frame,
       * throwing off every angle computed afterwards, including the closing gap of the last sector.
       */ var paddingAngle = index > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$es$2d$toolkit$40$1$2e$53$2e$2$2f$node_modules$2f$es$2d$toolkit$2f$dist$2f$compat$2f$object$2f$get$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__get__as__default$3e$__["default"])(item.prev, 'paddingAngle', 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$es$2d$toolkit$40$1$2e$53$2e$2$2f$node_modules$2f$es$2d$toolkit$2f$dist$2f$compat$2f$object$2f$get$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__get__as__default$3e$__["default"])(item.next, 'paddingAngle', 0), animationElapsedTime) : 0;
            var angle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(item.prev.endAngle - item.prev.startAngle, item.next.endAngle - item.next.startAngle, animationElapsedTime);
            var latest = _objectSpread(_objectSpread({}, item.next), {}, {
                startAngle: curAngle + paddingAngle,
                endAngle: curAngle + angle + paddingAngle
            });
            stepData.push(latest);
            curAngle = latest.endAngle;
        } else {
            // added
            var _paddingAngle = index > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$es$2d$toolkit$40$1$2e$53$2e$2$2f$node_modules$2f$es$2d$toolkit$2f$dist$2f$compat$2f$object$2f$get$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__get__as__default$3e$__["default"])(item.next, 'paddingAngle', 0) : 0;
            var deltaAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(0, item.next.endAngle - item.next.startAngle, animationElapsedTime);
            var _latest = _objectSpread(_objectSpread({}, item.next), {}, {
                startAngle: curAngle + _paddingAngle,
                endAngle: curAngle + deltaAngle + _paddingAngle
            });
            stepData.push(_latest);
            curAngle = _latest.endAngle;
        }
    });
    return stepData;
};
function SectorsWithAnimation(_ref6) {
    var _firstSector$cx, _firstSector$cy, _firstSector$innerRad, _firstSector$outerRad;
    var props = _ref6.props, previousSectorsRef = _ref6.previousSectorsRef, id = _ref6.id, graphicalItems = _ref6.graphicalItems, indexedActiveStyles = _ref6.indexedActiveStyles;
    var sectors = props.sectors, activeShape = props.activeShape, inactiveShape = props.inactiveShape, animationInterpolateFn = props.animationInterpolateFn;
    var resolveLabelTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$labelTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIndexedLabelThemeResolver"])(graphicalItems);
    var _useAnimationCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$AnimatedItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimationCallbacks"])(props.onAnimationStart, props.onAnimationEnd), isAnimating = _useAnimationCallback.isAnimating, handleAnimationStart = _useAnimationCallback.handleAnimationStart, handleAnimationEnd = _useAnimationCallback.handleAnimationEnd;
    var layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartLayoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePolarChartLayout"])();
    if (layout == null) return null;
    var firstSector = sectors[0];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$labelTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataLabelThemeContextProvider"], {
        value: resolveLabelTheme
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$labelTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataLabelColorsContextProvider"], {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$labelTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filledShapeLabelColors"]
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](PieLabelListProvider, {
        showLabels: !isAnimating,
        sectors: sectors
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$AnimatedItems$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedItems"], {
        animationInput: props,
        animationIdPrefix: "recharts-pie-",
        items: sectors,
        previousItemsRef: previousSectorsRef,
        isAnimationActive: props.isAnimationActive,
        animationBegin: props.animationBegin,
        animationDuration: props.animationDuration,
        animationEasing: props.animationEasing,
        onAnimationStart: handleAnimationStart,
        onAnimationEnd: handleAnimationEnd,
        animationInterpolateFn: animationInterpolateFn,
        animationMatchBy: props.animationMatchBy,
        layout: layout
    }, (stepData, animationElapsedTime, isEntrance)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](PieSectors, {
            sectors: stepData,
            activeShape: activeShape,
            inactiveShape: inactiveShape,
            allOtherPieProps: props,
            shape: props.shape,
            id: id,
            indexedActiveStyles: indexedActiveStyles,
            animationElapsedTime: animationElapsedTime,
            isAnimating: isAnimating || animationElapsedTime < 1,
            isEntrance: isEntrance
        }))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](PieLabelList, {
        showLabels: !isAnimating,
        sectors: sectors,
        props: props
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarLabelContextProvider"], {
        cx: (_firstSector$cx = firstSector === null || firstSector === void 0 ? void 0 : firstSector.cx) !== null && _firstSector$cx !== void 0 ? _firstSector$cx : 0,
        cy: (_firstSector$cy = firstSector === null || firstSector === void 0 ? void 0 : firstSector.cy) !== null && _firstSector$cy !== void 0 ? _firstSector$cy : 0,
        innerRadius: (_firstSector$innerRad = firstSector === null || firstSector === void 0 ? void 0 : firstSector.innerRadius) !== null && _firstSector$innerRad !== void 0 ? _firstSector$innerRad : 0,
        outerRadius: (_firstSector$outerRad = firstSector === null || firstSector === void 0 ? void 0 : firstSector.outerRadius) !== null && _firstSector$outerRad !== void 0 ? _firstSector$outerRad : 0,
        startAngle: props.startAngle,
        endAngle: props.endAngle,
        clockWise: false
    }, props.children))));
}
var defaultPieProps = {
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: 'ease',
    animationInterpolateFn: defaultPieAnimateItems,
    animationMatchBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$matchBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchAppend"],
    cx: '50%',
    cy: '50%',
    dataKey: 'value',
    endAngle: 360,
    fill: '#808080',
    hide: false,
    innerRadius: 0,
    isAnimationActive: 'auto',
    label: false,
    labelLine: true,
    legendType: 'rect',
    minAngle: 0,
    nameKey: 'name',
    outerRadius: '80%',
    paddingAngle: 0,
    rootTabIndex: 0,
    shape: defaultPieSectorShape,
    startAngle: 0,
    stroke: '#fff',
    zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$zIndex$2f$DefaultZIndexes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultZIndexes"].area
};
function PieImpl(props) {
    var id = props.id, graphicalItems = props.graphicalItems, explicitStyleProps = props.explicitStyleProps, pieFillObject = props.pieFillObject, propsWithoutId = _objectWithoutProperties(props, _excluded3);
    var hide = props.hide, className = props.className, rootTabIndex = props.rootTabIndex;
    var themeFillObjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$fill$2f$fillDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThemeFillObjects"])();
    var cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findAllByType"])(props.children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"]), [
        props.children
    ]);
    // The theme active colors go with the theme colors, so a Pie with its own colors drops them in the active state too.
    var hasExplicitColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$dataEntryStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwnColors"])(explicitStyleProps);
    var indexedActiveStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>graphicalItems.map((style)=>hasExplicitColors ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$dataEntryStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withoutColors"])(style.active) : style.active), [
        graphicalItems,
        hasExplicitColors
    ]);
    var sectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$pieSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectPieSectors"])(state, id, cells));
    var previousSectorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    var layerClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-pie', className);
    if (hide || sectors == null) {
        previousSectorsRef.current = null;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
            tabIndex: rootTabIndex,
            className: layerClass
        });
    }
    var themedSectors = sectors.map((sector, index)=>getThemedPieSector(sector, index, graphicalItems, explicitStyleProps));
    var sectorFillObjects = themedSectors.map((sector, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$fill$2f$fillDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIndexedEntryFillObject"])(sector.payload, index, pieFillObject, themeFillObjects, hasExplicitColors));
    var sectorPaintFills = sectorFillObjects.map((fillObject, index)=>fillObject == null ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$fill$2f$fillDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFillUrl"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$fill$2f$fillDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEntryFillId"])(id, index)));
    // The legacy default fill and stroke never apply together with a theme, and that is true in the Tooltip too.
    var isThemed = graphicalItems.length > 0;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$zIndex$2f$ZIndexLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZIndexLayer"], {
        zIndex: props.zIndex
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](SetPieTooltipEntrySettings, {
        dataKey: props.dataKey,
        nameKey: props.nameKey,
        sectors: themedSectors,
        stroke: isThemed ? explicitStyleProps.stroke : props.stroke,
        strokeWidth: isThemed ? explicitStyleProps.strokeWidth : props.strokeWidth,
        fill: isThemed ? explicitStyleProps.fill : props.fill,
        name: props.name,
        hide: props.hide,
        tooltipType: props.tooltipType,
        formatter: props.formatter,
        id: id,
        activeShape: props.activeShape
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
        tabIndex: rootTabIndex,
        className: layerClass
    }, sectorFillObjects.some((fillObject)=>fillObject != null) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("defs", null, sectorFillObjects.map((fillObject, index)=>{
        var _themedSectors$index;
        return fillObject == null ? null : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$fill$2f$fillDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FillObjectDefinition"], {
            key: index,
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$fill$2f$fillDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEntryFillId"])(id, index),
            fillObject: fillObject,
            color: (_themedSectors$index = themedSectors[index]) === null || _themedSectors$index === void 0 ? void 0 : _themedSectors$index.fill
        });
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](SectorsWithAnimation, {
        props: _objectSpread(_objectSpread({}, propsWithoutId), {}, {
            sectors: themedSectors,
            sectorPaintFills
        }),
        previousSectorsRef: previousSectorsRef,
        id: id,
        graphicalItems: graphicalItems,
        indexedActiveStyles: indexedActiveStyles
    })));
}
/**
 * @consumes PolarChartContext
 * @provides LabelListContext
 * @provides CellReader
 */ function PieFn(propsWithFillObject) {
    var _splitFill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$fill$2f$fillDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitFill"])(propsWithFillObject.fill), fillColor = _splitFill.color, pieFillObject = _splitFill.fillObject;
    // From here on, `fill` is the base color
    var outsideProps = _objectSpread(_objectSpread({}, propsWithFillObject), {}, {
        fill: fillColor
    });
    var props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveDefaultProps"])(outsideProps, defaultPieProps);
    var theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$useBackwardsCompatibleTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBackwardsCompatibleTheme"])((rechartsTheme)=>({
            graphicalItems: rechartsTheme.graphicalItems
        }), {}, undefined);
    var explicitStyleProps = {
        fill: outsideProps.fill,
        fillOpacity: outsideProps.fillOpacity,
        stroke: outsideProps.stroke,
        strokeOpacity: outsideProps.strokeOpacity,
        strokeWidth: outsideProps.strokeWidth,
        strokeDasharray: outsideProps.strokeDasharray
    };
    var externalId = props.id, propsWithoutId = _objectWithoutProperties(props, _excluded4);
    var presentationProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEvents"])(propsWithoutId);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$RegisterGraphicalItemId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterGraphicalItemId"], {
        id: externalId,
        type: "pie"
    }, (id)=>{
        var _getColorGraphicalIte, _getColorGraphicalIte2;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$SetGraphicalItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetPolarGraphicalItem"], {
            type: "pie",
            id: id,
            data: propsWithoutId.data,
            dataKey: propsWithoutId.dataKey,
            hide: propsWithoutId.hide,
            angleAxisId: 0,
            radiusAxisId: 0,
            name: propsWithoutId.name,
            nameKey: propsWithoutId.nameKey,
            tooltipType: propsWithoutId.tooltipType,
            legendType: propsWithoutId.legendType,
            fill: propsWithoutId.fill,
            cx: propsWithoutId.cx,
            cy: propsWithoutId.cy,
            startAngle: propsWithoutId.startAngle,
            endAngle: propsWithoutId.endAngle,
            paddingAngle: propsWithoutId.paddingAngle,
            minAngle: propsWithoutId.minAngle,
            innerRadius: propsWithoutId.innerRadius,
            outerRadius: propsWithoutId.outerRadius,
            cornerRadius: propsWithoutId.cornerRadius,
            presentationProps: presentationProps,
            maxRadius: props.maxRadius
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](SetPiePayloadLegend, _extends({}, propsWithoutId, {
            id: id,
            graphicalItems: (_getColorGraphicalIte = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$themeFill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorGraphicalItems"])(theme === null || theme === void 0 ? void 0 : theme.graphicalItems)) !== null && _getColorGraphicalIte !== void 0 ? _getColorGraphicalIte : [],
            explicitStyleProps: explicitStyleProps,
            pieFillObject: pieFillObject
        })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$4$2e$6$2b$df897a89478e04b5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](PieImpl, _extends({}, propsWithoutId, {
            id: id,
            graphicalItems: (_getColorGraphicalIte2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$theme$2f$themeFill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorGraphicalItems"])(theme === null || theme === void 0 ? void 0 : theme.graphicalItems)) !== null && _getColorGraphicalIte2 !== void 0 ? _getColorGraphicalIte2 : [],
            explicitStyleProps: explicitStyleProps,
            pieFillObject: pieFillObject
        })));
    });
}
var Pie = PieFn;
// @ts-expect-error we need to set the displayName for debugging purposes
Pie.displayName = 'Pie';
}),
"[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/polar/defaultPolarAngleAxisProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultPolarAngleAxisProps",
    ()=>defaultPolarAngleAxisProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$zIndex$2f$DefaultZIndexes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/zIndex/DefaultZIndexes.js [app-ssr] (ecmascript)");
;
var defaultPolarAngleAxisProps = {
    allowDecimals: false,
    allowDuplicatedCategory: true,
    // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
    allowDataOverflow: false,
    angle: 0,
    angleAxisId: 0,
    axisLine: true,
    axisLineType: 'polygon',
    cx: 0,
    cy: 0,
    hide: false,
    includeHidden: false,
    label: false,
    niceTicks: 'auto',
    orientation: 'outer',
    reversed: false,
    scale: 'auto',
    tick: true,
    tickLine: true,
    tickSize: 8,
    type: 'auto',
    zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$zIndex$2f$DefaultZIndexes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultZIndexes"].axis
};
}),
"[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/polar/defaultPolarRadiusAxisProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultPolarRadiusAxisProps",
    ()=>defaultPolarRadiusAxisProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$zIndex$2f$DefaultZIndexes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/zIndex/DefaultZIndexes.js [app-ssr] (ecmascript)");
;
var defaultPolarRadiusAxisProps = {
    allowDataOverflow: false,
    allowDecimals: false,
    allowDuplicatedCategory: true,
    angle: 0,
    axisLine: true,
    includeHidden: false,
    hide: false,
    niceTicks: 'auto',
    label: false,
    orientation: 'right',
    radiusAxisId: 0,
    reversed: false,
    scale: 'auto',
    tick: true,
    tickCount: 5,
    tickLine: true,
    type: 'auto',
    zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$recharts$40$3$2e$11$2e$1$2b$2ed8a649724df515$2f$node_modules$2f$recharts$2f$es6$2f$zIndex$2f$DefaultZIndexes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultZIndexes"].axis
};
}),
"[project]/node_modules/.bun/recharts@3.11.1+2ed8a649724df515/node_modules/recharts/es6/polar/isOutsidePolarPosition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isOutsidePolarPosition",
    ()=>isOutsidePolarPosition
]);
var outsidePolarPositions = [
    'outside',
    'end',
    'center',
    'centerTop',
    'centerBottom'
];
function isOutsidePolarPosition(position) {
    return outsidePolarPositions.some((p)=>p === position);
}
}),
];

//# sourceMappingURL=1325_recharts_es6_polar_14lt68-voyr5s._.js.map