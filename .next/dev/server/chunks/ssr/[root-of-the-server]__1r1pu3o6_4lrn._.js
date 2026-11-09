module.exports = [
(()=>{"use strict";return[
"[project]/app/(public routes)/travellers/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TravellersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/hydration.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersList$2f$TravellersList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TravellersList/TravellersList.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$usersApi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/usersApi.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$public__routes$292f$travellers$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(public routes)/travellers/page.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer/Footer.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function TravellersPage() {
    const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QueryClient"]();
    await queryClient.prefetchInfiniteQuery({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRAVELLERS_QUERY_KEY"],
        queryFn: ({ pageParam })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$usersApi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchUsers"])({
                page: pageParam,
                perPage: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRAVELLERS_PER_PAGE"]
            }),
        initialPageParam: 1
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(public routes)/travellers/page.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$public__routes$292f$travellers$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HydrationBoundary"], {
                    state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dehydrate"])(queryClient),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersList$2f$TravellersList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/(public routes)/travellers/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(public routes)/travellers/page.tsx",
                    lineNumber: 27,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(public routes)/travellers/page.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(public routes)/travellers/page.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(public routes)/travellers/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/icon.png.mjs { IMAGE => \"[project]/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/icon.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 32,
    height: 32
};
}),
"[project]/components/Copyright/Copyright.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/Copyright/Copyright.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Copyright/Copyright.tsx", "default");
}),
"[project]/components/Copyright/Copyright.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Copyright$2f$Copyright$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/Copyright/Copyright.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Copyright$2f$Copyright$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/Footer/Footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Copyright$2f$Copyright$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Copyright/Copyright.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FooterNav$2f$FooterNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FooterNav/FooterNav.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Logo/Logo.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SocialList$2f$SocialList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SocialList/SocialList.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Footer/Footer.module.css [app-rsc] (css module)");
;
;
;
;
;
;
function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].footer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].top,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].logo
                        }, void 0, false, {
                            fileName: "[project]/components/Footer/Footer.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SocialList$2f$SocialList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].social
                        }, void 0, false, {
                            fileName: "[project]/components/Footer/Footer.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FooterNav$2f$FooterNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].nav
                        }, void 0, false, {
                            fileName: "[project]/components/Footer/Footer.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer/Footer.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].credits,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Copyright$2f$Copyright$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        serverYear: currentYear
                    }, void 0, false, {
                        fileName: "[project]/components/Footer/Footer.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Footer/Footer.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer/Footer.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer/Footer.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/FooterNav/FooterNav.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FooterNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FooterNav$2f$FooterNav$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/FooterNav/FooterNav.module.css [app-rsc] (css module)");
;
;
;
const navLinks = [
    {
        href: '/',
        label: 'Головна'
    },
    {
        href: '/stories',
        label: 'Статті'
    },
    {
        href: '/travellers',
        label: 'Еко-Мандрівники'
    }
];
function FooterNav({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: className,
        "aria-label": "Нижнє меню",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FooterNav$2f$FooterNav$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].list,
            children: navLinks.map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FooterNav$2f$FooterNav$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].link,
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/FooterNav/FooterNav.tsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this)
                }, href, false, {
                    fileName: "[project]/components/FooterNav/FooterNav.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/FooterNav/FooterNav.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/FooterNav/FooterNav.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Header/Header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/Header/Header.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Header/Header.tsx", "default");
}),
"[project]/components/Header/Header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/Header/Header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/Logo/Logo.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/icons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2f$Logo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Logo/Logo.module.css [app-rsc] (css module)");
;
;
;
;
function Logo({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        className: className ? `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2f$Logo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].logo} ${className}` : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2f$Logo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].logo,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EcoIcon"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2f$Logo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].icon
            }, void 0, false, {
                fileName: "[project]/components/Logo/Logo.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2f$Logo$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].text,
                children: [
                    "Природні",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/Logo/Logo.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    "Мандри"
                ]
            }, void 0, true, {
                fileName: "[project]/components/Logo/Logo.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Logo/Logo.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/SocialList/SocialList.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SocialList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/icons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SocialList$2f$SocialList$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/SocialList/SocialList.module.css [app-rsc] (css module)");
;
;
;
const socialLinks = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/',
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FacebookIcon"]
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/',
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InstagramIcon"]
    },
    {
        name: 'X',
        href: 'https://x.com/',
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["XIcon"]
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/',
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["YoutubeIcon"]
    }
];
function SocialList({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: className ? `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SocialList$2f$SocialList$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].list} ${className}` : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SocialList$2f$SocialList$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].list,
        children: socialLinks.map(({ name, href, Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SocialList$2f$SocialList$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].link,
                    href: href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": name,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SocialList$2f$SocialList$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].icon
                    }, void 0, false, {
                        fileName: "[project]/components/SocialList/SocialList.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/SocialList/SocialList.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this)
            }, name, false, {
                fileName: "[project]/components/SocialList/SocialList.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/SocialList/SocialList.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/TravellersList/TravellersList.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/TravellersList/TravellersList.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/TravellersList/TravellersList.tsx", "default");
}),
"[project]/components/TravellersList/TravellersList.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersList$2f$TravellersList$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/TravellersList/TravellersList.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersList$2f$TravellersList$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/icons/icons.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeftIcon",
    ()=>ArrowLeftIcon,
    "ArrowRightIcon",
    ()=>ArrowRightIcon,
    "EcoIcon",
    ()=>EcoIcon,
    "FacebookIcon",
    ()=>FacebookIcon,
    "InstagramIcon",
    ()=>InstagramIcon,
    "XIcon",
    ()=>XIcon,
    "YoutubeIcon",
    ()=>YoutubeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function FacebookIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M29.3334 16.405C29.3334 8.99625 23.3639 2.99023 16.0001 2.99023C8.63628 2.99023 2.66675 8.99625 2.66675 16.405C2.66675 23.1006 7.54253 28.6505 13.9167 29.6569V20.2828H10.5313V16.405H13.9167V13.4496C13.9167 10.0875 15.9074 8.23039 18.9529 8.23039C20.4118 8.23039 21.9375 8.49241 21.9375 8.49241V11.7937H20.2563C18.6001 11.7937 18.0834 12.8279 18.0834 13.8888V16.405H21.7813L21.1902 20.2828H18.0834V29.6569C24.4577 28.6505 29.3334 23.1009 29.3334 16.405Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons/icons.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function InstagramIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.0067 6.48738C19.2125 6.48738 19.592 6.50163 20.8526 6.55787C22.0246 6.60962 22.6568 6.80609 23.079 6.97032C23.6369 7.18629 24.0396 7.44875 24.4566 7.8657C24.8788 8.28789 25.136 8.68609 25.3565 9.24402C25.5207 9.66621 25.7172 10.3029 25.7689 11.4705C25.8251 12.7363 25.8394 13.1157 25.8394 16.3171C25.8394 19.5184 25.8251 19.9023 25.7689 21.1637C25.7172 22.3358 25.5207 22.9679 25.3565 23.3901C25.1405 23.9481 24.8788 24.3507 24.4611 24.7677C24.0389 25.1899 23.6407 25.4471 23.0835 25.6676C22.6613 25.8318 22.0239 26.0283 20.8571 26.08C19.5912 26.1363 19.2118 26.1505 16.0104 26.1505C12.8091 26.1505 12.4252 26.1363 11.1638 26.08C9.99175 26.0283 9.35959 25.8318 8.93739 25.6676C8.37947 25.4516 7.97677 25.1899 7.55908 24.7722C7.13688 24.35 6.87967 23.9518 6.6592 23.3946C6.49497 22.9724 6.2985 22.335 6.24675 21.1682C6.19051 19.9023 6.17626 19.5229 6.17626 16.3216C6.17626 13.1202 6.19051 12.7363 6.24675 11.475C6.2985 10.3029 6.49497 9.67071 6.6592 9.24851C6.87517 8.69059 7.13763 8.28789 7.55458 7.8702C7.97677 7.448 8.37497 7.19079 8.93289 6.97032C9.35509 6.80609 9.99175 6.60962 11.1593 6.55787C12.4199 6.50163 12.8001 6.48738 16.0059 6.48738H16.0067ZM16.0067 4.32692C12.7491 4.32692 12.3419 4.34117 11.0619 4.39741C9.78703 4.45365 8.9104 4.65988 8.1515 4.95534C7.3596 5.2643 6.68919 5.67224 6.02403 6.34265C5.35362 7.00856 4.94568 7.67822 4.63672 8.46562C4.34126 9.22977 4.13503 10.1012 4.07879 11.376C4.02255 12.6606 4.0083 13.0678 4.0083 16.3253C4.0083 19.5829 4.02255 19.9901 4.07879 21.2702C4.13503 22.545 4.34126 23.4216 4.63672 24.1805C4.94643 24.9724 5.35362 25.6428 6.02403 26.308C6.68919 26.9731 7.3596 27.3863 8.147 27.6908C8.91115 27.9863 9.78253 28.1925 11.0574 28.2487C12.3367 28.305 12.7446 28.3192 16.0022 28.3192C19.2598 28.3192 19.6677 28.305 20.947 28.2487C22.2219 28.1925 23.0985 27.9863 23.8574 27.6908C24.6448 27.3863 25.3152 26.9739 25.9804 26.308C26.6455 25.6421 27.0587 24.9724 27.3632 24.185C27.6586 23.4209 27.8649 22.5495 27.9211 21.2747C27.9774 19.9953 27.9916 19.5874 27.9916 16.3298C27.9916 13.0723 27.9774 12.6651 27.9211 11.385C27.8649 10.1101 27.6586 9.23352 27.3632 8.47462C27.0677 7.67747 26.6598 7.00781 25.9901 6.3419C25.325 5.67674 24.6545 5.26355 23.8672 4.95909C23.103 4.66363 22.2316 4.4574 20.9568 4.40116C19.673 4.34042 19.265 4.32617 16.0074 4.32617L16.0067 4.32692Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/components/icons/icons.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.0064 10.1621C12.6041 10.1621 9.84302 12.9225 9.84302 16.3255C9.84302 19.7286 12.6034 22.489 16.0064 22.489C19.4095 22.489 22.1699 19.7286 22.1699 16.3255C22.1699 12.9232 19.4095 10.1621 16.0064 10.1621ZM16.0064 20.3233C13.7987 20.3233 12.0087 18.5332 12.0087 16.3255C12.0087 14.1178 13.7987 12.3278 16.0064 12.3278C18.2142 12.3278 20.0042 14.1178 20.0042 16.3255C20.0042 18.5332 18.2142 20.3233 16.0064 20.3233Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/components/icons/icons.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23.8513 9.91953C23.8513 10.7144 23.2071 11.3586 22.4122 11.3586C21.6173 11.3586 20.9731 10.7144 20.9731 9.91953C20.9731 9.12463 21.6173 8.48047 22.4122 8.48047C23.2071 8.48047 23.8513 9.12463 23.8513 9.91953Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/components/icons/icons.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons/icons.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function XIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22.9015 5.65625H26.5816L18.5415 14.6928L28 26.9896H20.5941L14.7935 19.5317L8.15631 26.9896H4.47392L13.0736 17.324L4 5.65625H11.5939L16.8372 12.4731L22.9015 5.65625ZM21.6097 24.8235H23.6491L10.4859 7.70862H8.2976L21.6097 24.8235Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons/icons.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
function YoutubeIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M28.7906 9.60336C28.6388 9.03989 28.342 8.52603 27.9298 8.11292C27.5176 7.6998 27.0044 7.40184 26.4413 7.24869C24.3533 6.67536 16 6.66603 16 6.66603C16 6.66603 7.64795 6.65669 5.55862 7.20469C4.99585 7.36489 4.48371 7.66706 4.07137 8.0822C3.65903 8.49735 3.36033 9.01152 3.20395 9.57536C2.65328 11.6634 2.64795 15.994 2.64795 15.994C2.64795 15.994 2.64262 20.346 3.18928 22.4127C3.49595 23.5554 4.39595 24.458 5.53995 24.766C7.64929 25.3394 15.98 25.3487 15.98 25.3487C15.98 25.3487 24.3333 25.358 26.4213 24.8114C26.9846 24.6585 27.4983 24.3612 27.9115 23.9489C28.3247 23.5367 28.6231 23.0237 28.7773 22.4607C29.3293 20.374 29.3333 16.0447 29.3333 16.0447C29.3333 16.0447 29.36 11.6914 28.7906 9.60336ZM13.328 20.006L13.3346 12.006L20.2773 16.0127L13.328 20.006Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons/icons.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function EcoIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5.22334 19.7274C4.477 18.9614 3.89492 18.0759 3.47709 17.0711C3.05942 16.0664 2.85059 15.0389 2.85059 13.9886C2.85059 12.7601 3.06709 11.6327 3.50009 10.6064C3.93309 9.58002 4.57859 8.63785 5.43659 7.77985C6.50975 6.71068 8.03959 5.9416 10.0261 5.4726C12.0128 5.0036 14.4503 4.80277 17.3386 4.8701C17.7118 4.88677 18.0517 4.96243 18.3583 5.0971C18.6648 5.2316 18.9423 5.41918 19.1908 5.65985C19.4342 5.90368 19.6271 6.17902 19.7696 6.48585C19.9119 6.79268 19.9906 7.13477 20.0056 7.5121C20.0516 8.95627 20.0329 10.2902 19.9496 11.5139C19.8663 12.7377 19.7038 13.8516 19.4621 14.8556C19.2204 15.8594 18.9045 16.7528 18.5143 17.5356C18.1242 18.3183 17.6533 18.9861 17.1018 19.5391C16.252 20.3929 15.3267 21.0406 14.3258 21.4821C13.325 21.9234 12.2571 22.1441 11.1221 22.1441C9.94942 22.1441 8.876 21.9493 7.90184 21.5596C6.9275 21.1699 6.03467 20.5592 5.22334 19.7274ZM7.93009 19.5719C8.34942 19.8552 8.83342 20.0699 9.38209 20.2159C9.93075 20.3619 10.5097 20.4349 11.1188 20.4349C11.9948 20.4349 12.8453 20.2525 13.6701 19.8879C14.4948 19.5232 15.2428 18.9969 15.9143 18.3089C16.3922 17.8269 16.7904 17.2014 17.1091 16.4326C17.4278 15.6638 17.6811 14.7766 17.8691 13.7711C18.0571 12.7654 18.1785 11.6565 18.2333 10.4444C18.288 9.23218 18.284 7.94385 18.2213 6.57935C16.6667 6.54202 15.2724 6.56185 14.0386 6.63885C12.8049 6.71585 11.7161 6.85435 10.7721 7.05435C9.82809 7.25435 9.01842 7.50952 8.34309 7.81985C7.66775 8.13019 7.11934 8.50435 6.69784 8.94235C6.00984 9.64318 5.4805 10.3923 5.10984 11.1896C4.73917 11.9869 4.55384 12.7948 4.55384 13.6131C4.55384 14.3959 4.71967 15.2213 5.05134 16.0891C5.38317 16.9569 5.79967 17.6555 6.30084 18.1849C7.159 16.5754 8.19875 15.1286 9.42009 13.8446C10.6416 12.5606 11.9599 11.5336 13.3751 10.7636C11.9411 12.0176 10.7761 13.3718 9.88009 14.8261C8.98392 16.2804 8.33392 17.8624 7.93009 19.5719Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons/icons.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function ArrowRightIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 12H19M19 12L13 6M19 12L13 18",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons/icons.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
function ArrowLeftIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19 12H5M5 12L11 6M5 12L11 18",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons/icons.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/api/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/authStore.ts [app-rsc] (ecmascript)");
;
;
const authEndpoints = [
    'auth/login',
    'auth/register',
    'auth/refresh',
    'auth/logout'
];
let refreshPromise = null;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "/api") || '/api',
    withCredentials: true
});
function refreshSession() {
    if (!refreshPromise) {
        refreshPromise = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post('/api/auth/refresh', null, {
            withCredentials: true
        }).then(()=>undefined).finally(()=>{
            refreshPromise = null;
        });
    }
    return refreshPromise;
}
function handleRefreshFailure(error, wasAuthenticated) {
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useAuthStore"].getState().clearIsAuthenticated();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return Promise.reject(error);
}
api.interceptors.response.use((response)=>response, async (error)=>{
    const original = error.config;
    if (!original || error.response?.status !== 401 || original._retry) {
        return Promise.reject(error);
    }
    if (authEndpoints.some((endpoint)=>original.url?.includes(endpoint))) {
        return Promise.reject(error);
    }
    const wasAuthenticated = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useAuthStore"].getState().isAuthenticated;
    const isCurrentUserRequest = original.url?.includes('/users/me') ?? false;
    if (!wasAuthenticated && !isCurrentUserRequest) {
        return Promise.reject(error);
    }
    original._retry = true;
    try {
        await refreshSession();
        return api(original);
    } catch (refreshError) {
        try {
            return await api(original);
        } catch  {
            return handleRefreshFailure(refreshError, wasAuthenticated);
        }
    }
});
}),
"[project]/lib/api/usersApi.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchUsers",
    ()=>fetchUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
async function fetchUsers(params) {
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get('/users', {
            params
        });
        return response.data;
    } catch (error) {
        throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorMessage"])(error, 'Не вдалося завантажити мандрівників'));
    }
}
}),
"[project]/lib/constants.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_AVATAR_URL",
    ()=>DEFAULT_AVATAR_URL,
    "TRAVELLERS_PER_PAGE",
    ()=>TRAVELLERS_PER_PAGE,
    "TRAVELLERS_QUERY_KEY",
    ()=>TRAVELLERS_QUERY_KEY
]);
const TRAVELLERS_PER_PAGE = 12;
const TRAVELLERS_QUERY_KEY = [
    'users',
    'travellers-page'
];
const DEFAULT_AVATAR_URL = 'https://ac.goit.global/fullstack/react/default-avatar.jpg';
}),
"[project]/lib/store/authStore.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-rsc] (ecmascript)");
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        user: null,
        isAuthenticated: false,
        isAuthLoading: true,
        setUser: (user)=>set({
                user,
                isAuthenticated: true,
                isAuthLoading: false
            }),
        clearIsAuthenticated: ()=>set({
                user: null,
                isAuthenticated: false,
                isAuthLoading: false
            })
    }));
}),
"[project]/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getErrorMessage",
    ()=>getErrorMessage
]);
function getErrorMessage(error, fallback) {
    const message = error.response?.data?.message;
    return typeof message === 'string' ? message : fallback;
}
}),
]})(),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/app/(public routes)/travellers/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(public routes)/travellers/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/icon.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/icon.07z67gx7639ek.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/components/Footer/Footer.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "Footer-module__rnk_JG__container",
  "credits": "Footer-module__rnk_JG__credits",
  "footer": "Footer-module__rnk_JG__footer",
  "logo": "Footer-module__rnk_JG__logo",
  "nav": "Footer-module__rnk_JG__nav",
  "social": "Footer-module__rnk_JG__social",
  "top": "Footer-module__rnk_JG__top",
});
}),
"[project]/components/FooterNav/FooterNav.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "link": "FooterNav-module__rF_koW__link",
  "list": "FooterNav-module__rF_koW__list",
});
}),
"[project]/components/Logo/Logo.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "icon": "Logo-module__MSOgda__icon",
  "logo": "Logo-module__MSOgda__logo",
  "text": "Logo-module__MSOgda__text",
});
}),
"[project]/components/SocialList/SocialList.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "icon": "SocialList-module__2f__eG__icon",
  "link": "SocialList-module__2f__eG__link",
  "list": "SocialList-module__2f__eG__list",
});
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1r1pu3o6_4lrn._.js.map