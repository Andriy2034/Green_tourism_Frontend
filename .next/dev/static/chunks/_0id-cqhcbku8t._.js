(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/app/(public routes)/stories/StoriesClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoriesClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersStories$2f$TravellersStories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TravellersStories/TravellersStories.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/clientApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadMore$2f$LoadMore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoadMore/LoadMore.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePerPage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePerPage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$public__routes$292f$stories$2f$StoriesClient$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(public routes)/stories/StoriesClient.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CategoriesFilter/CategoriesFilter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function StoriesClient() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "1159fc5d0ebad54d0d8fbc6aabd4f9de016050435bc62e439317abc5d4b04f2f") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1159fc5d0ebad54d0d8fbc6aabd4f9de016050435bc62e439317abc5d4b04f2f";
    }
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const perPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePerPage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    let t0;
    if ($[1] !== perPage || $[2] !== selectedCategory) {
        t0 = {
            queryKey: [
                "stories",
                selectedCategory,
                perPage
            ],
            queryFn: (t1)=>{
                const { pageParam } = t1;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchStories"])({
                    page: pageParam,
                    perPage,
                    ...selectedCategory !== "all" && {
                        category: selectedCategory
                    }
                });
            },
            initialPageParam: 1,
            getNextPageParam: _temp,
            refetchOnMount: false
        };
        $[1] = perPage;
        $[2] = selectedCategory;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const { data, isError, error, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])(t0);
    let t1;
    if ($[4] !== data?.pages) {
        t1 = data?.pages.flatMap(_StoriesClientAnonymous) ?? [];
        $[4] = data?.pages;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const stories = t1;
    let t2;
    let t3;
    if ($[6] !== error || $[7] !== isError) {
        t2 = ({
            "StoriesClient[useEffect()]": ()=>{
                if (isError) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Не вдалося завантажити історії. ${error.message}`);
                }
            }
        })["StoriesClient[useEffect()]"];
        t3 = [
            isError,
            error
        ];
        $[6] = error;
        $[7] = isError;
        $[8] = t2;
        $[9] = t3;
    } else {
        t2 = $[8];
        t3 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (isLoading) {
        let t4;
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$public__routes$292f$stories$2f$StoriesClient$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "Завантаження історій..."
            }, void 0, false, {
                fileName: "[project]/app/(public routes)/stories/StoriesClient.tsx",
                lineNumber: 90,
                columnNumber: 12
            }, this);
            $[10] = t4;
        } else {
            t4 = $[10];
        }
        return t4;
    }
    let t4;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Статті"
        }, void 0, false, {
            fileName: "[project]/app/(public routes)/stories/StoriesClient.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== selectedCategory) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            selectedCategory: selectedCategory,
            onCategoryChange: setSelectedCategory
        }, void 0, false, {
            fileName: "[project]/app/(public routes)/stories/StoriesClient.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[12] = selectedCategory;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== fetchNextPage) {
        t6 = ({
            "StoriesClient[<LoadMore>.onLoadMore]": ()=>fetchNextPage()
        })["StoriesClient[<LoadMore>.onLoadMore]"];
        $[14] = fetchNextPage;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== hasNextPage || $[17] !== isFetchingNextPage || $[18] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadMore$2f$LoadMore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onLoadMore: t6,
            hasMore: hasNextPage,
            isLoading: isFetchingNextPage
        }, void 0, false, {
            fileName: "[project]/app/(public routes)/stories/StoriesClient.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[16] = hasNextPage;
        $[17] = isFetchingNextPage;
        $[18] = t6;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== stories || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersStories$2f$TravellersStories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            stories: stories,
            children: t7
        }, void 0, false, {
            fileName: "[project]/app/(public routes)/stories/StoriesClient.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[20] = stories;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
            position: "top-center",
            toastOptions: {
                style: {
                    fontSize: "16px",
                    padding: "10px 14px",
                    maxWidth: "360px",
                    width: "auto",
                    whiteSpace: "nowrap"
                }
            }
        }, void 0, false, {
            fileName: "[project]/app/(public routes)/stories/StoriesClient.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== t5 || $[25] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$public__routes$292f$stories$2f$StoriesClient$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].storiespage,
            children: [
                t4,
                t5,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/app/(public routes)/stories/StoriesClient.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[24] = t5;
        $[25] = t8;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    return t10;
}
_s(StoriesClient, "89Ljn7eqOvIuVDR1i8jzzNkOBYY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePerPage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
_c = StoriesClient;
function _StoriesClientAnonymous(page) {
    return page.stories;
}
function _temp(lastPage) {
    if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
    }
}
var _c;
__turbopack_context__.k.register(_c, "StoriesClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AuthNavigation/AuthNavigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthNavigation$2f$AuthNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/AuthNavigation/AuthNavigation.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const login = {
    href: '/login',
    label: 'Вхід'
};
const register = {
    href: '/register',
    label: 'Реєстрація'
};
function AuthNavigation(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "4d8c0f810470255213a6dc6905527dfef6e49576bc14cdce1dcfb5a075055102") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4d8c0f810470255213a6dc6905527dfef6e49576bc14cdce1dcfb5a075055102";
    }
    const { variant: t1 } = t0;
    const variant = t1 === undefined ? "header" : t1;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t2;
    if ($[1] !== variant) {
        t2 = variant === "auth" ? [
            register,
            login
        ] : [
            login,
            register
        ];
        $[1] = variant;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const links = t2;
    const t3 = `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthNavigation$2f$AuthNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigation} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthNavigation$2f$AuthNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant]}`;
    let t4;
    if ($[3] !== links || $[4] !== pathname) {
        t4 = links.map({
            "AuthNavigation[links.map()]": (t5)=>{
                const { href, label } = t5;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: href,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthNavigation$2f$AuthNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link} ${pathname === href ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthNavigation$2f$AuthNavigation$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                    "aria-current": pathname === href ? "page" : undefined,
                    children: label
                }, href, false, {
                    fileName: "[project]/components/AuthNavigation/AuthNavigation.tsx",
                    lineNumber: 49,
                    columnNumber: 16
                }, this);
            }
        }["AuthNavigation[links.map()]"]);
        $[3] = links;
        $[4] = pathname;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t3 || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t3,
            "aria-label": "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0456\u044F",
            children: t4
        }, void 0, false, {
            fileName: "[project]/components/AuthNavigation/AuthNavigation.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_s(AuthNavigation, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AuthNavigation;
var _c;
__turbopack_context__.k.register(_c, "AuthNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CategoriesFilter/ArrowIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArrowIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function ArrowIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "f041a52eb269776ac2b9a945be64797f6a8929795a0b57ccc9c2cf6d7e6d91e7") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f041a52eb269776ac2b9a945be64797f6a8929795a0b57ccc9c2cf6d7e6d91e7";
    }
    const { isOpen } = t0;
    const t1 = isOpen ? "rotate(180deg)" : "rotate(0deg)";
    let t2;
    if ($[1] !== t1) {
        t2 = {
            transform: t1,
            transition: "transform 200ms ease",
            flexShrink: 0
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M11.9998 15.2019C11.8878 15.2019 11.7822 15.1813 11.683 15.1399C11.5837 15.0986 11.4884 15.0323 11.397 14.9409L6.45305 9.99694C6.28305 9.82694 6.20221 9.62385 6.21055 9.38769C6.21888 9.15152 6.30805 8.94844 6.47805 8.77844C6.64805 8.60844 6.85113 8.52344 7.0873 8.52344C7.32346 8.52344 7.52655 8.60844 7.69655 8.77844L11.9998 13.1067L16.328 8.77844C16.498 8.60844 16.697 8.5276 16.9248 8.53594C17.1526 8.54427 17.3515 8.63344 17.5215 8.80344C17.6915 8.97344 17.7765 9.17652 17.7765 9.41269C17.7765 9.64885 17.6915 9.85194 17.5215 10.0219L12.6025 14.9409C12.5112 15.0323 12.4159 15.0986 12.3165 15.1399C12.2174 15.1813 12.1118 15.2019 11.9998 15.2019Z",
            fill: "black",
            fillOpacity: "0.6"
        }, void 0, false, {
            fileName: "[project]/components/CategoriesFilter/ArrowIcon.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/CategoriesFilter/ArrowIcon.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c = ArrowIcon;
var _c;
__turbopack_context__.k.register(_c, "ArrowIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CategoriesFilter/CategoriesFilter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/clientApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/CategoriesFilter/CategoriesFilter.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$ArrowIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CategoriesFilter/ArrowIcon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const CategoriesFilter = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(53);
    if ($[0] !== "705b1480e8ea4178c761aee3626e9f9c7b05b48850b3462e0459440624e7fa64") {
        for(let $i = 0; $i < 53; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "705b1480e8ea4178c761aee3626e9f9c7b05b48850b3462e0459440624e7fa64";
    }
    const { selectedCategory, onCategoryChange } = t0;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            queryKey: [
                "categories"
            ],
            queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCategories"],
            staleTime: 86400000
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const { data: t2, isLoading, isFetching, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t1);
    let t3;
    if ($[2] !== t2) {
        t3 = t2 === undefined ? [] : t2;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const categories = t3;
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>{
            const handleClickOutside = (event)=>{
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            };
            const handleKeyDown = (event_0)=>{
                if (event_0.key === "Escape") {
                    setIsOpen(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
            return ()=>{
                document.removeEventListener("mousedown", handleClickOutside);
                document.removeEventListener("keydown", handleKeyDown);
            };
        };
        t5 = [];
        $[4] = t4;
        $[5] = t5;
    } else {
        t4 = $[4];
        t5 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const t6 = `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${selectedCategory === "all" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t7;
    if ($[6] !== onCategoryChange) {
        t7 = ()=>onCategoryChange("all");
        $[6] = onCategoryChange;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== t6 || $[9] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: t6,
            onClick: t7,
            children: "Всі статті"
        }, void 0, false, {
            fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t6;
        $[9] = t7;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== categories || $[12] !== onCategoryChange || $[13] !== selectedCategory) {
        let t10;
        if ($[15] !== onCategoryChange || $[16] !== selectedCategory) {
            t10 = (t11)=>{
                const { _id, category } = t11;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${selectedCategory === category ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                    onClick: ()=>onCategoryChange(category),
                    children: category
                }, _id, false, {
                    fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
                    lineNumber: 110,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            };
            $[15] = onCategoryChange;
            $[16] = selectedCategory;
            $[17] = t10;
        } else {
            t10 = $[17];
        }
        t9 = categories.map(t10);
        $[11] = categories;
        $[12] = onCategoryChange;
        $[13] = selectedCategory;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[18] !== t8 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttons,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t8;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            children: "Категорії"
        }, void 0, false, {
            fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    const t12 = `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectOpen : ""}`;
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ()=>setIsOpen(_temp);
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    const t14 = selectedCategory === "all" ? "\u0412\u0441\u0456 \u0441\u0442\u0430\u0442\u0442\u0456" : selectedCategory;
    let t15;
    if ($[23] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t14
        }, void 0, false, {
            fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t14;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== isOpen) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$ArrowIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: isOpen
        }, void 0, false, {
            fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = isOpen;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[27] !== isOpen || $[28] !== t12 || $[29] !== t15 || $[30] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: t12,
            onClick: t13,
            "aria-expanded": isOpen,
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = isOpen;
        $[28] = t12;
        $[29] = t15;
        $[30] = t16;
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] !== categories || $[33] !== isOpen || $[34] !== onCategoryChange || $[35] !== selectedCategory) {
        t18 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].options,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option} ${selectedCategory === "all" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectedOption : ""}`,
                        onClick: ()=>{
                            onCategoryChange("all");
                            setIsOpen(false);
                        },
                        children: "Всі статті"
                    }, void 0, false, {
                        fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
                        lineNumber: 180,
                        columnNumber: 56
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
                    lineNumber: 180,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0)),
                categories.map((t19)=>{
                    const { _id: _id_0, category: category_0 } = t19;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option} ${selectedCategory === category_0 ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectedOption : ""}`,
                            onClick: ()=>{
                                onCategoryChange(category_0);
                                setIsOpen(false);
                            },
                            children: category_0
                        }, void 0, false, {
                            fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
                            lineNumber: 188,
                            columnNumber: 32
                        }, ("TURBOPACK compile-time value", void 0))
                    }, _id_0, false, {
                        fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
                        lineNumber: 188,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0));
                })
            ]
        }, void 0, true, {
            fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
            lineNumber: 180,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = categories;
        $[33] = isOpen;
        $[34] = onCategoryChange;
        $[35] = selectedCategory;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== t17 || $[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectWrapper,
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdown,
                    ref: dropdownRef,
                    children: [
                        t17,
                        t18
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
                    lineNumber: 203,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t17;
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== isLoading) {
        t20 = isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status,
            children: "Завантаження категорій..."
        }, void 0, false, {
            fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
            lineNumber: 212,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = isLoading;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== isFetching || $[43] !== isLoading) {
        t21 = isFetching && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status,
            children: "Оновлення даних..."
        }, void 0, false, {
            fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
            lineNumber: 220,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = isFetching;
        $[43] = isLoading;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== error) {
        t22 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
            children: "Не вдалося завантажити категорії."
        }, void 0, false, {
            fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
            lineNumber: 229,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = error;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] !== t10 || $[48] !== t19 || $[49] !== t20 || $[50] !== t21 || $[51] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CategoriesFilter$2f$CategoriesFilter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filter,
            children: [
                t10,
                t19,
                t20,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/components/CategoriesFilter/CategoriesFilter.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t10;
        $[48] = t19;
        $[49] = t20;
        $[50] = t21;
        $[51] = t22;
        $[52] = t23;
    } else {
        t23 = $[52];
    }
    return t23;
};
_s(CategoriesFilter, "RlWlfOA8WX5q0T+ti9pvyp5o5L4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = CategoriesFilter;
const __TURBOPACK__default__export__ = CategoriesFilter;
function _temp(prev) {
    return !prev;
}
var _c;
__turbopack_context__.k.register(_c, "CategoriesFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ConfirmModal/ConfirmModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfirmModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConfirmModal$2f$ConfirmModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ConfirmModal/ConfirmModal.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Modal/Modal.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function ConfirmModal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "5b71c37cc8cc38377f11a94a915e62f81d98427376d9d9cfee36d9225b337e7c") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b71c37cc8cc38377f11a94a915e62f81d98427376d9d9cfee36d9225b337e7c";
    }
    const { title, description, confirmButtonText, cancelButtonText, onConfirm, onCancel } = t0;
    let t1;
    if ($[1] !== onCancel) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConfirmModal$2f$ConfirmModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
            onClick: onCancel,
            "aria-label": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u0435 \u0432\u0456\u043A\u043D\u043E",
            children: "×"
        }, void 0, false, {
            fileName: "[project]/components/ConfirmModal/ConfirmModal.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[1] = onCancel;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConfirmModal$2f$ConfirmModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
            children: title
        }, void 0, false, {
            fileName: "[project]/components/ConfirmModal/ConfirmModal.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== description) {
        t3 = description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConfirmModal$2f$ConfirmModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
            children: description
        }, void 0, false, {
            fileName: "[project]/components/ConfirmModal/ConfirmModal.tsx",
            lineNumber: 48,
            columnNumber: 25
        }, this);
        $[5] = description;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== cancelButtonText || $[8] !== onCancel) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConfirmModal$2f$ConfirmModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelBtn,
            onClick: onCancel,
            children: cancelButtonText
        }, void 0, false, {
            fileName: "[project]/components/ConfirmModal/ConfirmModal.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[7] = cancelButtonText;
        $[8] = onCancel;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== confirmButtonText || $[11] !== onConfirm) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConfirmModal$2f$ConfirmModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmBtn,
            onClick: onConfirm,
            children: confirmButtonText
        }, void 0, false, {
            fileName: "[project]/components/ConfirmModal/ConfirmModal.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[10] = confirmButtonText;
        $[11] = onConfirm;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConfirmModal$2f$ConfirmModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonGroup,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/components/ConfirmModal/ConfirmModal.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== t1 || $[17] !== t2 || $[18] !== t3 || $[19] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConfirmModal$2f$ConfirmModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmContent,
            children: [
                t1,
                t2,
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/ConfirmModal/ConfirmModal.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[16] = t1;
        $[17] = t2;
        $[18] = t3;
        $[19] = t6;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] !== onCancel || $[22] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClose: onCancel,
            children: t7
        }, void 0, false, {
            fileName: "[project]/components/ConfirmModal/ConfirmModal.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[21] = onCancel;
        $[22] = t7;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    return t8;
}
_c = ConfirmModal;
var _c;
__turbopack_context__.k.register(_c, "ConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Copyright/Copyright.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Copyright
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Copyright$2f$Copyright$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Copyright/Copyright.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function subscribe() {
    return ()=>{};
}
function getSnapshot() {
    return new Date().getFullYear();
}
function Copyright(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "4c98ec9339b3ba994ada659d1861bcd145cbc52bb4c204d71f0b4999eb7f16dd") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4c98ec9339b3ba994ada659d1861bcd145cbc52bb4c204d71f0b4999eb7f16dd";
    }
    const { serverYear } = t0;
    let t1;
    if ($[1] !== serverYear) {
        t1 = ({
            "Copyright[useSyncExternalStore()]": ()=>serverYear
        })["Copyright[useSyncExternalStore()]"];
        $[1] = serverYear;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getSnapshot, t1);
    let t2;
    if ($[3] !== year) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Copyright$2f$Copyright$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyright,
            children: [
                "© ",
                year,
                " Природні Мандри. Усі права захищені."
            ]
        }, void 0, true, {
            fileName: "[project]/components/Copyright/Copyright.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[3] = year;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
}
_s(Copyright, "M1GijZD0ZazE9Pj/zlEk2/3TAPo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = Copyright;
var _c;
__turbopack_context__.k.register(_c, "Copyright");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ErrorWhileSavingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorWhileSavingModal$2f$ErrorWhileSavingModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ErrorWhileSavingModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "924e002dcd3e38fde1456df795d75dfacef702bc0e9816fd7c4e0893a9d88135") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "924e002dcd3e38fde1456df795d75dfacef702bc0e9816fd7c4e0893a9d88135";
    }
    const { onClose } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[1] !== router) {
        t1 = ({
            "ErrorWhileSavingModal[register]": ()=>router.push("/register")
        })["ErrorWhileSavingModal[register]"];
        $[1] = router;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const register = t1;
    let t2;
    if ($[3] !== router) {
        t2 = ({
            "ErrorWhileSavingModal[login]": ()=>router.push("/login")
        })["ErrorWhileSavingModal[login]"];
        $[3] = router;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const login = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
            src: "/icons/close.svg",
            width: 13,
            height: 13,
            alt: ""
        }, void 0, false, {
            fileName: "[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== onClose) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorWhileSavingModal$2f$ErrorWhileSavingModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
            "aria-label": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
            onClick: onClose,
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[6] = onClose;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorWhileSavingModal$2f$ErrorWhileSavingModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
            children: [
                "Помилка під час ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.tsx",
                    lineNumber: 62,
                    columnNumber: 52
                }, this),
                " збереження"
            ]
        }, void 0, true, {
            fileName: "[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorWhileSavingModal$2f$ErrorWhileSavingModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
            children: [
                "Щоб зберегти статтю вам треба увійти, якщо ще немає ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.tsx",
                    lineNumber: 69,
                    columnNumber: 86
                }, this),
                "облікового запису зареєструйтесь"
            ]
        }, void 0, true, {
            fileName: "[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== login) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorWhileSavingModal$2f$ErrorWhileSavingModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginButton,
            onClick: login,
            children: "Увійти"
        }, void 0, false, {
            fileName: "[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[10] = login;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== register) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorWhileSavingModal$2f$ErrorWhileSavingModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].registerButton,
            onClick: register,
            children: "Зареєструватись"
        }, void 0, false, {
            fileName: "[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[12] = register;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t7 || $[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorWhileSavingModal$2f$ErrorWhileSavingModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentContainer,
            children: [
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorWhileSavingModal$2f$ErrorWhileSavingModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttons,
                    children: [
                        t7,
                        t8
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.tsx",
                    lineNumber: 92,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[14] = t7;
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t4 || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorWhileSavingModal$2f$ErrorWhileSavingModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t4,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[17] = t4;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== onClose || $[21] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClose: onClose,
            children: t10
        }, void 0, false, {
            fileName: "[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[20] = onClose;
        $[21] = t10;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    return t11;
}
_s(ErrorWhileSavingModal, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ErrorWhileSavingModal;
var _c;
__turbopack_context__.k.register(_c, "ErrorWhileSavingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/clientApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Logo/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBar$2f$UserBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/UserBar/UserBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthNavigation$2f$AuthNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AuthNavigation/AuthNavigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Header/Header.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
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
const navigationLinks = [
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
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "44979ae2cd813346032d73f4692f4af094e784720ddc05fa346041f2e83fac08") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "44979ae2cd813346032d73f4692f4af094e784720ddc05fa346041f2e83fac08";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_HeaderUseAuthStore);
    const isAuthenticated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_HeaderUseAuthStore2);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_HeaderUseAuthStore3);
    let t0;
    if ($[1] !== clear || $[2] !== queryClient || $[3] !== router) {
        t0 = async function handleLogout() {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"])();
            await queryClient.cancelQueries();
            queryClient.clear();
            clear();
            router.replace("/");
            router.refresh();
        };
        $[1] = clear;
        $[2] = queryClient;
        $[3] = router;
        $[4] = t0;
    } else {
        t0 = $[4];
    }
    const handleLogout = t0;
    if (pathname === "/login" || pathname === "/register") {
        return null;
    }
    const t1 = isAuthenticated && Boolean(user);
    let t2;
    if ($[5] !== handleLogout || $[6] !== pathname || $[7] !== t1 || $[8] !== user) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderContent, {
            pathname: pathname,
            isAuthenticated: t1,
            user: user,
            onLogout: handleLogout
        }, void 0, false, {
            fileName: "[project]/components/Header/Header.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[5] = handleLogout;
        $[6] = pathname;
        $[7] = t1;
        $[8] = user;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
}
_s(Header, "7AHpwQnWNQvMrmEb3AxDch5F+Pk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = Header;
function _HeaderUseAuthStore3(state_1) {
    return state_1.clearIsAuthenticated;
}
function _HeaderUseAuthStore2(state_0) {
    return state_0.isAuthenticated;
}
function _HeaderUseAuthStore(state) {
    return state.user;
}
function HeaderContent(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "44979ae2cd813346032d73f4692f4af094e784720ddc05fa346041f2e83fac08") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "44979ae2cd813346032d73f4692f4af094e784720ddc05fa346041f2e83fac08";
    }
    const { pathname, isAuthenticated, user, onLogout } = t0;
    const [openMenuPath, setOpenMenuPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isMenuOpen = openMenuPath === pathname;
    const burgerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = function closeMenu() {
            setOpenMenuPath(null);
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const closeMenu = t1;
    let t2;
    if ($[2] !== onLogout) {
        t2 = async function handleLogout() {
            await onLogout();
            closeMenu();
        };
        $[2] = onLogout;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleLogout = t2;
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "HeaderContent[useEffect()]": ()=>{
                const desktop = window.matchMedia("(min-width: 1440px)");
                const handleResize = function handleResize() {
                    if (desktop.matches) {
                        setOpenMenuPath(null);
                    }
                };
                desktop.addEventListener("change", handleResize);
                return ()=>{
                    desktop.removeEventListener("change", handleResize);
                };
            }
        })["HeaderContent[useEffect()]"];
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[6] !== isMenuOpen) {
        t5 = ({
            "HeaderContent[useEffect()]": ()=>{
                if (!isMenuOpen) {
                    return;
                }
                const previousOverflow = document.body.style.overflow;
                document.body.style.overflow = "hidden";
                return ()=>{
                    document.body.style.overflow = previousOverflow;
                };
            }
        })["HeaderContent[useEffect()]"];
        t6 = [
            isMenuOpen
        ];
        $[6] = isMenuOpen;
        $[7] = t5;
        $[8] = t6;
    } else {
        t5 = $[7];
        t6 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[9] !== pathname) {
        t7 = function renderLinks() {
            return navigationLinks.map({
                "HeaderContent[renderLinks > navigationLinks.map()]": (t8)=>{
                    const { href, label } = t8;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLink,
                        "aria-current": pathname === href ? "page" : undefined,
                        onClick: closeMenu,
                        children: label
                    }, href, false, {
                        fileName: "[project]/components/Header/Header.tsx",
                        lineNumber: 187,
                        columnNumber: 18
                    }, this);
                }
            }["HeaderContent[renderLinks > navigationLinks.map()]"]);
        };
        $[9] = pathname;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const renderLinks = t7;
    const t8 = `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} ${isMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerOpen : ""}`;
    let t9;
    if ($[11] !== isMenuOpen) {
        t9 = ({
            "HeaderContent[<header>.onKeyDown]": (event)=>{
                if (event.key === "Escape" && isMenuOpen) {
                    closeMenu();
                    burgerRef.current?.focus();
                }
            }
        })["HeaderContent[<header>.onKeyDown]"];
        $[11] = isMenuOpen;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/Header/Header.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== renderLinks) {
        t11 = renderLinks();
        $[14] = renderLinks;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== isAuthenticated || $[17] !== pathname) {
        t12 = isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/profile/saved",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLink,
            "aria-current": pathname.startsWith("/profile") ? "page" : undefined,
            children: "Мій профіль"
        }, void 0, false, {
            fileName: "[project]/components/Header/Header.tsx",
            lineNumber: 230,
            columnNumber: 30
        }, this);
        $[16] = isAuthenticated;
        $[17] = pathname;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== t11 || $[20] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].desktopNavigation,
            "aria-label": "\u041E\u0441\u043D\u043E\u0432\u043D\u0430 \u043D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u044F",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header/Header.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t12;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== handleLogout || $[23] !== isAuthenticated || $[24] !== user?.avatarUrl || $[25] !== user?.name) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topActions,
            children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/new-story",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].publishLink,
                        children: "Опублікувати статтю"
                    }, void 0, false, {
                        fileName: "[project]/components/Header/Header.tsx",
                        lineNumber: 248,
                        columnNumber: 64
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].desktopUserBar,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBar$2f$UserBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: user?.name || "\u041C\u0430\u043D\u0434\u0440\u0456\u0432\u043D\u0438\u043A",
                            avatarUrl: user?.avatarUrl,
                            onLogout: handleLogout
                        }, void 0, false, {
                            fileName: "[project]/components/Header/Header.tsx",
                            lineNumber: 248,
                            columnNumber: 178
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Header/Header.tsx",
                        lineNumber: 248,
                        columnNumber: 142
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header/Header.tsx",
                lineNumber: 248,
                columnNumber: 62
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthNavigation$2f$AuthNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "header"
            }, void 0, false, {
                fileName: "[project]/components/Header/Header.tsx",
                lineNumber: 248,
                columnNumber: 337
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Header/Header.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[22] = handleLogout;
        $[23] = isAuthenticated;
        $[24] = user?.avatarUrl;
        $[25] = user?.name;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    const t15 = isMenuOpen ? "\u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u043C\u0435\u043D\u044E" : "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043C\u0435\u043D\u044E";
    let t16;
    if ($[27] !== pathname) {
        t16 = ({
            "HeaderContent[<button>.onClick]": ()=>setOpenMenuPath({
                    "HeaderContent[<button>.onClick > setOpenMenuPath()]": (current)=>current === pathname ? null : pathname
                }["HeaderContent[<button>.onClick > setOpenMenuPath()]"])
        })["HeaderContent[<button>.onClick]"];
        $[27] = pathname;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    const t17 = isMenuOpen ? "/icons/close.svg" : "/icons/burger.svg";
    let t18;
    if ($[29] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
            src: t17,
            alt: "",
            width: 24,
            height: 24
        }, void 0, false, {
            fileName: "[project]/components/Header/Header.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[29] = t17;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] !== isMenuOpen || $[32] !== t15 || $[33] !== t16 || $[34] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            ref: burgerRef,
            type: "button",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].burger,
            "aria-label": t15,
            "aria-expanded": isMenuOpen,
            "aria-controls": "header-menu",
            onClick: t16,
            children: t18
        }, void 0, false, {
            fileName: "[project]/components/Header/Header.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[31] = isMenuOpen;
        $[32] = t15;
        $[33] = t16;
        $[34] = t18;
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    let t20;
    if ($[36] !== t13 || $[37] !== t14 || $[38] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topBar,
            children: [
                t10,
                t13,
                t14,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header/Header.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[36] = t13;
        $[37] = t14;
        $[38] = t19;
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    const t21 = !isMenuOpen;
    let t22;
    if ($[40] !== renderLinks) {
        t22 = renderLinks();
        $[40] = renderLinks;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    let t23;
    if ($[42] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuNavigation,
            "aria-label": "\u041E\u0441\u043D\u043E\u0432\u043D\u0430 \u043D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u044F",
            children: t22
        }, void 0, false, {
            fileName: "[project]/components/Header/Header.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[42] = t22;
        $[43] = t23;
    } else {
        t23 = $[43];
    }
    let t24;
    if ($[44] !== handleLogout || $[45] !== isAuthenticated || $[46] !== user?.avatarUrl || $[47] !== user?.name) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuBottom,
            children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/new-story",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].publishLink} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobilePublish}`,
                        onClick: closeMenu,
                        children: "Опублікувати статтю"
                    }, void 0, false, {
                        fileName: "[project]/components/Header/Header.tsx",
                        lineNumber: 319,
                        columnNumber: 64
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBar$2f$UserBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        name: user?.name || "\u041C\u0430\u043D\u0434\u0440\u0456\u0432\u043D\u0438\u043A",
                        avatarUrl: user?.avatarUrl,
                        onLogout: handleLogout
                    }, void 0, false, {
                        fileName: "[project]/components/Header/Header.tsx",
                        lineNumber: 319,
                        columnNumber: 188
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header/Header.tsx",
                lineNumber: 319,
                columnNumber: 62
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileAuth,
                onClick: closeMenu,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthNavigation$2f$AuthNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    variant: "header"
                }, void 0, false, {
                    fileName: "[project]/components/Header/Header.tsx",
                    lineNumber: 319,
                    columnNumber: 393
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header/Header.tsx",
                lineNumber: 319,
                columnNumber: 341
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Header/Header.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[44] = handleLogout;
        $[45] = isAuthenticated;
        $[46] = user?.avatarUrl;
        $[47] = user?.name;
        $[48] = t24;
    } else {
        t24 = $[48];
    }
    let t25;
    if ($[49] !== t21 || $[50] !== t23 || $[51] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "header-menu",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuPanel,
            hidden: t21,
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header/Header.tsx",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[49] = t21;
        $[50] = t23;
        $[51] = t24;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] !== t20 || $[54] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t20,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header/Header.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[53] = t20;
        $[54] = t25;
        $[55] = t26;
    } else {
        t26 = $[55];
    }
    let t27;
    if ($[56] !== t26 || $[57] !== t8 || $[58] !== t9) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: t8,
            onKeyDown: t9,
            children: t26
        }, void 0, false, {
            fileName: "[project]/components/Header/Header.tsx",
            lineNumber: 349,
            columnNumber: 11
        }, this);
        $[56] = t26;
        $[57] = t8;
        $[58] = t9;
        $[59] = t27;
    } else {
        t27 = $[59];
    }
    return t27;
}
_s1(HeaderContent, "qtt5MTQo1J5HPNZ2jAw1H6KdHZg=");
_c1 = HeaderContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "Header");
__turbopack_context__.k.register(_c1, "HeaderContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LoadMore/LoadMore.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadMore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadMore$2f$LoadMore$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/LoadMore/LoadMore.module.css [app-client] (css module)");
;
;
;
function LoadMore(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "822c3179e0e51395841114023066f1b0d181456c4bb4ddbda4b95274ca3c799b") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "822c3179e0e51395841114023066f1b0d181456c4bb4ddbda4b95274ca3c799b";
    }
    const { onLoadMore, isLoading, hasMore, className } = t0;
    if (!hasMore) {
        return null;
    }
    const t1 = `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadMore$2f$LoadMore$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadbtn} ${className || ""} ${isLoading ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadMore$2f$LoadMore$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading : ""}`;
    const t2 = isLoading ? "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F" : "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0449\u0435";
    let t3;
    if ($[1] !== isLoading) {
        t3 = isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadMore$2f$LoadMore$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner
        }, void 0, false, {
            fileName: "[project]/components/LoadMore/LoadMore.tsx",
            lineNumber: 30,
            columnNumber: 23
        }, this);
        $[1] = isLoading;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== isLoading || $[4] !== onLoadMore || $[5] !== t1 || $[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onLoadMore,
            disabled: isLoading,
            className: t1,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/LoadMore/LoadMore.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[3] = isLoading;
        $[4] = onLoadMore;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_c = LoadMore;
var _c;
__turbopack_context__.k.register(_c, "LoadMore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Logo/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2f$Logo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Logo/Logo.module.css [app-client] (css module)");
;
;
;
;
;
function Logo(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "d4b3b7b3c09951f3a18dbe190d4b6f14fd3e36e694985d4f830640fca2acb2a0") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d4b3b7b3c09951f3a18dbe190d4b6f14fd3e36e694985d4f830640fca2acb2a0";
    }
    const { className } = t0;
    const t1 = className ? `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2f$Logo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo} ${className}` : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2f$Logo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EcoIcon"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2f$Logo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon
        }, void 0, false, {
            fileName: "[project]/components/Logo/Logo.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2f$Logo$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
            children: [
                "Природні",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/components/Logo/Logo.tsx",
                    lineNumber: 29,
                    columnNumber: 45
                }, this),
                "Мандри"
            ]
        }, void 0, true, {
            fileName: "[project]/components/Logo/Logo.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== t1) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: t1,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/Logo/Logo.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Modal/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Modal/Modal.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Modal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "a58bbe54f085a8e1b9d410c68845282e29d829bd225f8a4e8d882199dc934eb0") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a58bbe54f085a8e1b9d410c68845282e29d829bd225f8a4e8d882199dc934eb0";
    }
    const { children, onClose } = t0;
    let t1;
    if ($[1] !== onClose) {
        t1 = ({
            "Modal[handleBackdropClick]": (event)=>{
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }
        })["Modal[handleBackdropClick]"];
        $[1] = onClose;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleBackdropClick = t1;
    let t2;
    let t3;
    if ($[3] !== onClose) {
        t2 = ({
            "Modal[useEffect()]": ()=>{
                const handleKeyDown = {
                    "Modal[useEffect() > handleKeyDown]": (e)=>{
                        if (e.key === "Escape") {
                            onClose();
                        }
                    }
                }["Modal[useEffect() > handleKeyDown]"];
                document.addEventListener("keydown", handleKeyDown);
                document.body.style.overflow = "hidden";
                return ()=>{
                    document.removeEventListener("keydown", handleKeyDown);
                    document.body.style.overflow = "";
                };
            }
        })["Modal[useEffect()]"];
        t3 = [
            onClose
        ];
        $[3] = onClose;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] !== children) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/Modal/Modal.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== handleBackdropClick || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backdrop,
            role: "dialog",
            "aria-modal": "true",
            onClick: handleBackdropClick,
            children: t4
        }, void 0, false, {
            fileName: "[project]/components/Modal/Modal.tsx",
            lineNumber: 77,
            columnNumber: 23
        }, this), document.body);
        $[8] = handleBackdropClick;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/StoryCard/StoryCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$storyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/storyApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorWhileSavingModal$2f$ErrorWhileSavingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/StoryCard/StoryCard.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function BookmarkIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "3ac885cb94f5dceff3d25522fef5d800dc33c01651afa4351f86ab1200c330f0") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3ac885cb94f5dceff3d25522fef5d800dc33c01651afa4351f86ab1200c330f0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.75 4.75A1.75 1.75 0 0 1 8.5 3h7a1.75 1.75 0 0 1 1.75 1.75V21l-5.25-3.5L6.75 21V4.75Z",
                stroke: "currentColor",
                strokeWidth: "1.7",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/StoryCard/StoryCard.tsx",
                lineNumber: 31,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = BookmarkIcon;
function LoadingSpinner() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "3ac885cb94f5dceff3d25522fef5d800dc33c01651afa4351f86ab1200c330f0") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3ac885cb94f5dceff3d25522fef5d800dc33c01651afa4351f86ab1200c330f0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = LoadingSpinner;
function StoryCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(58);
    if ($[0] !== "3ac885cb94f5dceff3d25522fef5d800dc33c01651afa4351f86ab1200c330f0") {
        for(let $i = 0; $i < 58; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3ac885cb94f5dceff3d25522fef5d800dc33c01651afa4351f86ab1200c330f0";
    }
    const { story, authorName, savedCount, className } = t0;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_StoryCardUseAuthStore);
    const isAuthenticated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_StoryCardUseAuthStore2);
    const setUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])(_StoryCardUseAuthStore3);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(savedCount);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== story._id || $[2] !== user?.savedArticles) {
        t1 = user?.savedArticles?.includes(story._id) ?? false;
        $[1] = story._id;
        $[2] = user?.savedArticles;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const isSaved = t1;
    let t2;
    if ($[4] !== isSaved || $[5] !== story._id) {
        t2 = ()=>isSaved ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$storyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsaveStory"])(story._id) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$storyApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveStory"])(story._id);
        $[4] = isSaved;
        $[5] = story._id;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== isSaved || $[8] !== queryClient || $[9] !== setUser || $[10] !== user) {
        t3 = (data)=>{
            if (user) {
                setUser({
                    ...user,
                    savedArticles: data.savedArticles
                });
            }
            setCount({
                "StoryCard[<anonymous> > setCount()]": (current)=>isSaved ? current - 1 : current + 1
            }["StoryCard[<anonymous> > setCount()]"]);
            queryClient.invalidateQueries({
                queryKey: [
                    "profileStories"
                ]
            });
        };
        $[7] = isSaved;
        $[8] = queryClient;
        $[9] = setUser;
        $[10] = user;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    let t4;
    if ($[12] !== t2 || $[13] !== t3) {
        t4 = {
            mutationFn: t2,
            onSuccess: t3,
            onError: _temp
        };
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    const { mutate, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t4);
    let t5;
    if ($[15] !== isAuthenticated || $[16] !== mutate) {
        t5 = ({
            "StoryCard[handleBookmarkClick]": ()=>{
                if (!isAuthenticated) {
                    setIsModalOpen(true);
                    return;
                }
                mutate();
            }
        })["StoryCard[handleBookmarkClick]"];
        $[15] = isAuthenticated;
        $[16] = mutate;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    const handleBookmarkClick = t5;
    const cardClassName = className ? `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${className}` : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card;
    const bookmarkLabel = isSaved ? "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0441\u0442\u0430\u0442\u0442\u044E \u0437\u0456 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0438\u0445" : "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0441\u0442\u0430\u0442\u0442\u044E";
    let t6;
    if ($[18] !== story.img || $[19] !== story.title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrap,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image,
                src: story.img,
                alt: story.title,
                fill: true,
                sizes: "(min-width: 100%; height:100%) 100vw, 33vw"
            }, void 0, false, {
                fileName: "[project]/components/StoryCard/StoryCard.tsx",
                lineNumber: 157,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[18] = story.img;
        $[19] = story.title;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    let t7;
    if ($[21] !== authorName) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].author,
            children: authorName
        }, void 0, false, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        $[21] = authorName;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    const t8 = `Збережено ${count} разів`;
    let t9;
    if ($[23] !== count) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: count
        }, void 0, false, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 175,
            columnNumber: 10
        }, this);
        $[23] = count;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookmarkIcon, {}, void 0, false, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== t8 || $[27] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].savedCount,
            "aria-label": t8,
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[26] = t8;
        $[27] = t9;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== t11 || $[30] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
            children: [
                t7,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[29] = t11;
        $[30] = t7;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    let t13;
    if ($[32] !== story.title) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
            children: story.title
        }, void 0, false, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[32] = story.title;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    const t14 = `/stories/${encodeURIComponent(story._id)}`;
    let t15;
    if ($[34] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readButton,
            href: t14,
            children: "Переглянути статтю"
        }, void 0, false, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[34] = t14;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    const t16 = isPending ? "\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0441\u0442\u0430\u0442\u0442\u0456" : bookmarkLabel;
    let t17;
    if ($[36] !== isPending) {
        t17 = isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingSpinner, {}, void 0, false, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 226,
            columnNumber: 23
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookmarkIcon, {}, void 0, false, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 226,
            columnNumber: 44
        }, this);
        $[36] = isPending;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== handleBookmarkClick || $[39] !== isPending || $[40] !== isSaved || $[41] !== t16 || $[42] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookmarkButton,
            "aria-label": t16,
            "aria-pressed": isSaved,
            "aria-busy": isPending,
            disabled: isPending,
            onClick: handleBookmarkClick,
            children: t17
        }, void 0, false, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[38] = handleBookmarkClick;
        $[39] = isPending;
        $[40] = isSaved;
        $[41] = t16;
        $[42] = t17;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] !== t15 || $[45] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
            children: [
                t15,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[44] = t15;
        $[45] = t18;
        $[46] = t19;
    } else {
        t19 = $[46];
    }
    let t20;
    if ($[47] !== t12 || $[48] !== t13 || $[49] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
            children: [
                t12,
                t13,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[47] = t12;
        $[48] = t13;
        $[49] = t19;
        $[50] = t20;
    } else {
        t20 = $[50];
    }
    let t21;
    if ($[51] !== isModalOpen) {
        t21 = isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorWhileSavingModal$2f$ErrorWhileSavingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClose: {
                "StoryCard[<ErrorWhileSavingModal>.onClose]": ()=>setIsModalOpen(false)
            }["StoryCard[<ErrorWhileSavingModal>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 265,
            columnNumber: 26
        }, this);
        $[51] = isModalOpen;
        $[52] = t21;
    } else {
        t21 = $[52];
    }
    let t22;
    if ($[53] !== cardClassName || $[54] !== t20 || $[55] !== t21 || $[56] !== t6) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: cardClassName,
            children: [
                t6,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/components/StoryCard/StoryCard.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[53] = cardClassName;
        $[54] = t20;
        $[55] = t21;
        $[56] = t6;
        $[57] = t22;
    } else {
        t22 = $[57];
    }
    return t22;
}
_s(StoryCard, "GGZVmn3pRFNQuJkHhdsYVTxmAAk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c2 = StoryCard;
function _temp(error) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorMessage"])(error, "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043E\u043D\u043E\u0432\u0438\u0442\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0456 \u0456\u0441\u0442\u043E\u0440\u0456\u0457"));
}
function _StoryCardUseAuthStore3(state_1) {
    return state_1.setUser;
}
function _StoryCardUseAuthStore2(state_0) {
    return state_0.isAuthenticated;
}
function _StoryCardUseAuthStore(state) {
    return state.user;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "BookmarkIcon");
__turbopack_context__.k.register(_c1, "LoadingSpinner");
__turbopack_context__.k.register(_c2, "StoryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TravellersStories/TravellersStories.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TravellersStories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersStories$2f$TravellersStories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/TravellersStories/TravellersStories.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StoryCard/StoryCard.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function TravellersStories(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "3e55fae2e343b1c3d3ac508f098b2ecd1d2139116b2db49df7e49c8d30f03312") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e55fae2e343b1c3d3ac508f098b2ecd1d2139116b2db49df7e49c8d30f03312";
    }
    const { stories, children } = t0;
    let t1;
    if ($[1] !== stories) {
        t1 = stories.map(_TravellersStoriesStoriesMap);
        $[1] = stories;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersStories$2f$TravellersStories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/TravellersStories/TravellersStories.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== children || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersStories$2f$TravellersStories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stories,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersStories$2f$TravellersStories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: [
                    t2,
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/components/TravellersStories/TravellersStories.tsx",
                lineNumber: 42,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/TravellersStories/TravellersStories.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[5] = children;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_c = TravellersStories;
function _TravellersStoriesStoriesMap(story) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersStories$2f$TravellersStories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2f$StoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            story: story,
            authorName: story.ownerId.name,
            savedCount: story.rate
        }, void 0, false, {
            fileName: "[project]/components/TravellersStories/TravellersStories.tsx",
            lineNumber: 52,
            columnNumber: 55
        }, this)
    }, story._id, false, {
        fileName: "[project]/components/TravellersStories/TravellersStories.tsx",
        lineNumber: 52,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TravellersStories");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/UserBar/UserBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConfirmModal$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ConfirmModal/ConfirmModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBar$2f$UserBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/UserBar/UserBar.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function UserBar({ name, avatarUrl, onLogout }) {
    _s();
    const [failedSrc, setFailedSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoggingOut, setIsLoggingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isConfirmOpen, setIsConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const photoSrc = avatarUrl?.trim();
    const src = photoSrc && failedSrc !== photoSrc ? photoSrc : '/icons/avatar.svg';
    function openLogoutModal() {
        setError('');
        setIsConfirmOpen(true);
    }
    function closeLogoutModal() {
        if (isLoggingOut) return;
        setIsConfirmOpen(false);
        setError('');
    }
    async function handleLogout() {
        if (!onLogout || isLoggingOut) return;
        setIsLoggingOut(true);
        setError('');
        try {
            await onLogout();
            setIsConfirmOpen(false);
        } catch  {
            setError('Не вдалося вийти. Спробуйте ще раз.');
        } finally{
            setIsLoggingOut(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBar$2f$UserBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBar$2f$UserBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/profile/saved",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBar$2f$UserBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profile,
                        "aria-label": `Профіль: ${name}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBar$2f$UserBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                    src: src,
                                    alt: "",
                                    width: 32,
                                    height: 32,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBar$2f$UserBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarImage,
                                    unoptimized: true,
                                    onError: ()=>{
                                        if (photoSrc && src === photoSrc) {
                                            setFailedSrc(photoSrc);
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/UserBar/UserBar.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/UserBar/UserBar.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBar$2f$UserBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/components/UserBar/UserBar.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/UserBar/UserBar.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    onLogout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBar$2f$UserBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].separator,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/UserBar/UserBar.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserBar$2f$UserBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logout,
                                onClick: openLogoutModal,
                                disabled: isLoggingOut,
                                "aria-label": "Вийти з акаунта",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                    src: "/icons/logout.svg",
                                    alt: "",
                                    width: 24,
                                    height: 24
                                }, void 0, false, {
                                    fileName: "[project]/components/UserBar/UserBar.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/UserBar/UserBar.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/UserBar/UserBar.tsx",
                        lineNumber: 60,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/UserBar/UserBar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            isConfirmOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConfirmModal$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Вийти з акаунта?",
                description: error || 'Ви впевнені, що хочете вийти з акаунта?',
                confirmButtonText: isLoggingOut ? 'Виходимо…' : 'Вийти',
                cancelButtonText: "Скасувати",
                onConfirm: handleLogout,
                onCancel: closeLogoutModal
            }, void 0, false, {
                fileName: "[project]/components/UserBar/UserBar.tsx",
                lineNumber: 70,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/UserBar/UserBar.tsx",
        lineNumber: 46,
        columnNumber: 10
    }, this);
}
_s(UserBar, "HAzO4q/XF/4SvwVPeojNJ2ZBymA=");
_c = UserBar;
var _c;
__turbopack_context__.k.register(_c, "UserBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/icons/icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function FacebookIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "11347e9dbd0f60c55d6e2a908385e596d6d9d3169ee36415ff225f488748bf07") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11347e9dbd0f60c55d6e2a908385e596d6d9d3169ee36415ff225f488748bf07";
    }
    const { className } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M29.3334 16.405C29.3334 8.99625 23.3639 2.99023 16.0001 2.99023C8.63628 2.99023 2.66675 8.99625 2.66675 16.405C2.66675 23.1006 7.54253 28.6505 13.9167 29.6569V20.2828H10.5313V16.405H13.9167V13.4496C13.9167 10.0875 15.9074 8.23039 18.9529 8.23039C20.4118 8.23039 21.9375 8.49241 21.9375 8.49241V11.7937H20.2563C18.6001 11.7937 18.0834 12.8279 18.0834 13.8888V16.405H21.7813L21.1902 20.2828H18.0834V29.6569C24.4577 28.6505 29.3334 23.1009 29.3334 16.405Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== className) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[2] = className;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = FacebookIcon;
function InstagramIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "11347e9dbd0f60c55d6e2a908385e596d6d9d3169ee36415ff225f488748bf07") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11347e9dbd0f60c55d6e2a908385e596d6d9d3169ee36415ff225f488748bf07";
    }
    const { className } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16.0067 6.48738C19.2125 6.48738 19.592 6.50163 20.8526 6.55787C22.0246 6.60962 22.6568 6.80609 23.079 6.97032C23.6369 7.18629 24.0396 7.44875 24.4566 7.8657C24.8788 8.28789 25.136 8.68609 25.3565 9.24402C25.5207 9.66621 25.7172 10.3029 25.7689 11.4705C25.8251 12.7363 25.8394 13.1157 25.8394 16.3171C25.8394 19.5184 25.8251 19.9023 25.7689 21.1637C25.7172 22.3358 25.5207 22.9679 25.3565 23.3901C25.1405 23.9481 24.8788 24.3507 24.4611 24.7677C24.0389 25.1899 23.6407 25.4471 23.0835 25.6676C22.6613 25.8318 22.0239 26.0283 20.8571 26.08C19.5912 26.1363 19.2118 26.1505 16.0104 26.1505C12.8091 26.1505 12.4252 26.1363 11.1638 26.08C9.99175 26.0283 9.35959 25.8318 8.93739 25.6676C8.37947 25.4516 7.97677 25.1899 7.55908 24.7722C7.13688 24.35 6.87967 23.9518 6.6592 23.3946C6.49497 22.9724 6.2985 22.335 6.24675 21.1682C6.19051 19.9023 6.17626 19.5229 6.17626 16.3216C6.17626 13.1202 6.19051 12.7363 6.24675 11.475C6.2985 10.3029 6.49497 9.67071 6.6592 9.24851C6.87517 8.69059 7.13763 8.28789 7.55458 7.8702C7.97677 7.448 8.37497 7.19079 8.93289 6.97032C9.35509 6.80609 9.99175 6.60962 11.1593 6.55787C12.4199 6.50163 12.8001 6.48738 16.0059 6.48738H16.0067ZM16.0067 4.32692C12.7491 4.32692 12.3419 4.34117 11.0619 4.39741C9.78703 4.45365 8.9104 4.65988 8.1515 4.95534C7.3596 5.2643 6.68919 5.67224 6.02403 6.34265C5.35362 7.00856 4.94568 7.67822 4.63672 8.46562C4.34126 9.22977 4.13503 10.1012 4.07879 11.376C4.02255 12.6606 4.0083 13.0678 4.0083 16.3253C4.0083 19.5829 4.02255 19.9901 4.07879 21.2702C4.13503 22.545 4.34126 23.4216 4.63672 24.1805C4.94643 24.9724 5.35362 25.6428 6.02403 26.308C6.68919 26.9731 7.3596 27.3863 8.147 27.6908C8.91115 27.9863 9.78253 28.1925 11.0574 28.2487C12.3367 28.305 12.7446 28.3192 16.0022 28.3192C19.2598 28.3192 19.6677 28.305 20.947 28.2487C22.2219 28.1925 23.0985 27.9863 23.8574 27.6908C24.6448 27.3863 25.3152 26.9739 25.9804 26.308C26.6455 25.6421 27.0587 24.9724 27.3632 24.185C27.6586 23.4209 27.8649 22.5495 27.9211 21.2747C27.9774 19.9953 27.9916 19.5874 27.9916 16.3298C27.9916 13.0723 27.9774 12.6651 27.9211 11.385C27.8649 10.1101 27.6586 9.23352 27.3632 8.47462C27.0677 7.67747 26.6598 7.00781 25.9901 6.3419C25.325 5.67674 24.6545 5.26355 23.8672 4.95909C23.103 4.66363 22.2316 4.4574 20.9568 4.40116C19.673 4.34042 19.265 4.32617 16.0074 4.32617L16.0067 4.32692Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16.0064 10.1621C12.6041 10.1621 9.84302 12.9225 9.84302 16.3255C9.84302 19.7286 12.6034 22.489 16.0064 22.489C19.4095 22.489 22.1699 19.7286 22.1699 16.3255C22.1699 12.9232 19.4095 10.1621 16.0064 10.1621ZM16.0064 20.3233C13.7987 20.3233 12.0087 18.5332 12.0087 16.3255C12.0087 14.1178 13.7987 12.3278 16.0064 12.3278C18.2142 12.3278 20.0042 14.1178 20.0042 16.3255C20.0042 18.5332 18.2142 20.3233 16.0064 20.3233Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M23.8513 9.91953C23.8513 10.7144 23.2071 11.3586 22.4122 11.3586C21.6173 11.3586 20.9731 10.7144 20.9731 9.91953C20.9731 9.12463 21.6173 8.48047 22.4122 8.48047C23.2071 8.48047 23.8513 9.12463 23.8513 9.91953Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== className) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[4] = className;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c1 = InstagramIcon;
function XIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "11347e9dbd0f60c55d6e2a908385e596d6d9d3169ee36415ff225f488748bf07") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11347e9dbd0f60c55d6e2a908385e596d6d9d3169ee36415ff225f488748bf07";
    }
    const { className } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22.9015 5.65625H26.5816L18.5415 14.6928L28 26.9896H20.5941L14.7935 19.5317L8.15631 26.9896H4.47392L13.0736 17.324L4 5.65625H11.5939L16.8372 12.4731L22.9015 5.65625ZM21.6097 24.8235H23.6491L10.4859 7.70862H8.2976L21.6097 24.8235Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== className) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[2] = className;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c2 = XIcon;
function YoutubeIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "11347e9dbd0f60c55d6e2a908385e596d6d9d3169ee36415ff225f488748bf07") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11347e9dbd0f60c55d6e2a908385e596d6d9d3169ee36415ff225f488748bf07";
    }
    const { className } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M28.7906 9.60336C28.6388 9.03989 28.342 8.52603 27.9298 8.11292C27.5176 7.6998 27.0044 7.40184 26.4413 7.24869C24.3533 6.67536 16 6.66603 16 6.66603C16 6.66603 7.64795 6.65669 5.55862 7.20469C4.99585 7.36489 4.48371 7.66706 4.07137 8.0822C3.65903 8.49735 3.36033 9.01152 3.20395 9.57536C2.65328 11.6634 2.64795 15.994 2.64795 15.994C2.64795 15.994 2.64262 20.346 3.18928 22.4127C3.49595 23.5554 4.39595 24.458 5.53995 24.766C7.64929 25.3394 15.98 25.3487 15.98 25.3487C15.98 25.3487 24.3333 25.358 26.4213 24.8114C26.9846 24.6585 27.4983 24.3612 27.9115 23.9489C28.3247 23.5367 28.6231 23.0237 28.7773 22.4607C29.3293 20.374 29.3333 16.0447 29.3333 16.0447C29.3333 16.0447 29.36 11.6914 28.7906 9.60336ZM13.328 20.006L13.3346 12.006L20.2773 16.0127L13.328 20.006Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== className) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[2] = className;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c3 = YoutubeIcon;
function EcoIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "11347e9dbd0f60c55d6e2a908385e596d6d9d3169ee36415ff225f488748bf07") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11347e9dbd0f60c55d6e2a908385e596d6d9d3169ee36415ff225f488748bf07";
    }
    const { className } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5.22334 19.7274C4.477 18.9614 3.89492 18.0759 3.47709 17.0711C3.05942 16.0664 2.85059 15.0389 2.85059 13.9886C2.85059 12.7601 3.06709 11.6327 3.50009 10.6064C3.93309 9.58002 4.57859 8.63785 5.43659 7.77985C6.50975 6.71068 8.03959 5.9416 10.0261 5.4726C12.0128 5.0036 14.4503 4.80277 17.3386 4.8701C17.7118 4.88677 18.0517 4.96243 18.3583 5.0971C18.6648 5.2316 18.9423 5.41918 19.1908 5.65985C19.4342 5.90368 19.6271 6.17902 19.7696 6.48585C19.9119 6.79268 19.9906 7.13477 20.0056 7.5121C20.0516 8.95627 20.0329 10.2902 19.9496 11.5139C19.8663 12.7377 19.7038 13.8516 19.4621 14.8556C19.2204 15.8594 18.9045 16.7528 18.5143 17.5356C18.1242 18.3183 17.6533 18.9861 17.1018 19.5391C16.252 20.3929 15.3267 21.0406 14.3258 21.4821C13.325 21.9234 12.2571 22.1441 11.1221 22.1441C9.94942 22.1441 8.876 21.9493 7.90184 21.5596C6.9275 21.1699 6.03467 20.5592 5.22334 19.7274ZM7.93009 19.5719C8.34942 19.8552 8.83342 20.0699 9.38209 20.2159C9.93075 20.3619 10.5097 20.4349 11.1188 20.4349C11.9948 20.4349 12.8453 20.2525 13.6701 19.8879C14.4948 19.5232 15.2428 18.9969 15.9143 18.3089C16.3922 17.8269 16.7904 17.2014 17.1091 16.4326C17.4278 15.6638 17.6811 14.7766 17.8691 13.7711C18.0571 12.7654 18.1785 11.6565 18.2333 10.4444C18.288 9.23218 18.284 7.94385 18.2213 6.57935C16.6667 6.54202 15.2724 6.56185 14.0386 6.63885C12.8049 6.71585 11.7161 6.85435 10.7721 7.05435C9.82809 7.25435 9.01842 7.50952 8.34309 7.81985C7.66775 8.13019 7.11934 8.50435 6.69784 8.94235C6.00984 9.64318 5.4805 10.3923 5.10984 11.1896C4.73917 11.9869 4.55384 12.7948 4.55384 13.6131C4.55384 14.3959 4.71967 15.2213 5.05134 16.0891C5.38317 16.9569 5.79967 17.6555 6.30084 18.1849C7.159 16.5754 8.19875 15.1286 9.42009 13.8446C10.6416 12.5606 11.9599 11.5336 13.3751 10.7636C11.9411 12.0176 10.7761 13.3718 9.88009 14.8261C8.98392 16.2804 8.33392 17.8624 7.93009 19.5719Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== className) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[2] = className;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c4 = EcoIcon;
function ArrowRightIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "11347e9dbd0f60c55d6e2a908385e596d6d9d3169ee36415ff225f488748bf07") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11347e9dbd0f60c55d6e2a908385e596d6d9d3169ee36415ff225f488748bf07";
    }
    const { className } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 12H19M19 12L13 6M19 12L13 18",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== className) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 173,
            columnNumber: 10
        }, this);
        $[2] = className;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c5 = ArrowRightIcon;
function ArrowLeftIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "11347e9dbd0f60c55d6e2a908385e596d6d9d3169ee36415ff225f488748bf07") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11347e9dbd0f60c55d6e2a908385e596d6d9d3169ee36415ff225f488748bf07";
    }
    const { className } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19 12H5M5 12L11 6M5 12L11 18",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 194,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== className) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/icons/icons.tsx",
            lineNumber: 201,
            columnNumber: 10
        }, this);
        $[2] = className;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c6 = ArrowLeftIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "FacebookIcon");
__turbopack_context__.k.register(_c1, "InstagramIcon");
__turbopack_context__.k.register(_c2, "XIcon");
__turbopack_context__.k.register(_c3, "YoutubeIcon");
__turbopack_context__.k.register(_c4, "EcoIcon");
__turbopack_context__.k.register(_c5, "ArrowRightIcon");
__turbopack_context__.k.register(_c6, "ArrowLeftIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/usePerPage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>usePerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function usePerPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "7e914fc7cfc48df7b66410bed0a065dc23e58733c18e95a229811560853832c5") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7e914fc7cfc48df7b66410bed0a065dc23e58733c18e95a229811560853832c5";
    }
    const [perPage, setPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "usePerPage[useEffect()]": ()=>{
                const updatePerPage = {
                    "usePerPage[useEffect() > updatePerPage]": ()=>{
                        if (window.innerWidth < 1440) {
                            setPerPage(8);
                        } else {
                            setPerPage(9);
                        }
                    }
                }["usePerPage[useEffect() > updatePerPage]"];
                updatePerPage();
                window.addEventListener("resize", updatePerPage);
                return ()=>{
                    window.removeEventListener("resize", updatePerPage);
                };
            }
        })["usePerPage[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return perPage;
}
_s(usePerPage, "UiKz8JTlNlfaZ/YV3+jtrw4Pfnw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/storyApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSavedStories",
    ()=>getSavedStories,
    "getStoryById",
    ()=>getStoryById,
    "saveStory",
    ()=>saveStory,
    "unsaveStory",
    ()=>unsaveStory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/api.ts [app-client] (ecmascript)");
;
const getStoryById = async (storyId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/stories/${storyId}`);
    return response.data;
};
const saveStory = async (storyId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/users/saved-articles/${storyId}`);
    return response.data;
};
const unsaveStory = async (storyId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/users/saved-articles/${storyId}`);
    return response.data;
};
const getSavedStories = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/users/me/saved-stories');
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getErrorMessage",
    ()=>getErrorMessage
]);
function getErrorMessage(error, fallback) {
    const message = error.response?.data?.message;
    return typeof message === 'string' ? message : fallback;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/app/(public routes)/stories/StoriesClient.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "loading": "StoriesClient-module__dyJk-a__loading",
  "storiespage": "StoriesClient-module__dyJk-a__storiespage",
});
}),
"[project]/components/AuthNavigation/AuthNavigation.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "AuthNavigation-module__DN8toa__active",
  "auth": "AuthNavigation-module__DN8toa__auth",
  "error": "AuthNavigation-module__DN8toa__error",
  "header": "AuthNavigation-module__DN8toa__header",
  "link": "AuthNavigation-module__DN8toa__link",
  "logoutButton": "AuthNavigation-module__DN8toa__logoutButton",
  "navigation": "AuthNavigation-module__DN8toa__navigation",
  "userActions": "AuthNavigation-module__DN8toa__userActions",
  "userEmail": "AuthNavigation-module__DN8toa__userEmail",
});
}),
"[project]/components/CategoriesFilter/CategoriesFilter.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "CategoriesFilter-module__o98GrG__active",
  "button": "CategoriesFilter-module__o98GrG__button",
  "buttons": "CategoriesFilter-module__o98GrG__buttons",
  "dropdown": "CategoriesFilter-module__o98GrG__dropdown",
  "error": "CategoriesFilter-module__o98GrG__error",
  "filter": "CategoriesFilter-module__o98GrG__filter",
  "label": "CategoriesFilter-module__o98GrG__label",
  "option": "CategoriesFilter-module__o98GrG__option",
  "options": "CategoriesFilter-module__o98GrG__options",
  "select": "CategoriesFilter-module__o98GrG__select",
  "selectOpen": "CategoriesFilter-module__o98GrG__selectOpen",
  "selectWrapper": "CategoriesFilter-module__o98GrG__selectWrapper",
  "selectedOption": "CategoriesFilter-module__o98GrG__selectedOption",
  "status": "CategoriesFilter-module__o98GrG__status",
});
}),
"[project]/components/ConfirmModal/ConfirmModal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttonGroup": "ConfirmModal-module__fKnKKa__buttonGroup",
  "cancelBtn": "ConfirmModal-module__fKnKKa__cancelBtn",
  "closeButton": "ConfirmModal-module__fKnKKa__closeButton",
  "confirmBtn": "ConfirmModal-module__fKnKKa__confirmBtn",
  "confirmContent": "ConfirmModal-module__fKnKKa__confirmContent",
  "description": "ConfirmModal-module__fKnKKa__description",
  "title": "ConfirmModal-module__fKnKKa__title",
});
}),
"[project]/components/Copyright/Copyright.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "copyright": "Copyright-module__XktGcW__copyright",
});
}),
"[project]/components/ErrorWhileSavingModal/ErrorWhileSavingModal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttons": "ErrorWhileSavingModal-module__VoZbDq__buttons",
  "closeButton": "ErrorWhileSavingModal-module__VoZbDq__closeButton",
  "container": "ErrorWhileSavingModal-module__VoZbDq__container",
  "contentContainer": "ErrorWhileSavingModal-module__VoZbDq__contentContainer",
  "loginButton": "ErrorWhileSavingModal-module__VoZbDq__loginButton",
  "registerButton": "ErrorWhileSavingModal-module__VoZbDq__registerButton",
  "text": "ErrorWhileSavingModal-module__VoZbDq__text",
  "title": "ErrorWhileSavingModal-module__VoZbDq__title",
});
}),
"[project]/components/Header/Header.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "burger": "Header-module__arFiJq__burger",
  "container": "Header-module__arFiJq__container",
  "desktopNavigation": "Header-module__arFiJq__desktopNavigation",
  "desktopUserBar": "Header-module__arFiJq__desktopUserBar",
  "header": "Header-module__arFiJq__header",
  "headerOpen": "Header-module__arFiJq__headerOpen",
  "menuBottom": "Header-module__arFiJq__menuBottom",
  "menuNavigation": "Header-module__arFiJq__menuNavigation",
  "menuPanel": "Header-module__arFiJq__menuPanel",
  "mobileAuth": "Header-module__arFiJq__mobileAuth",
  "mobilePublish": "Header-module__arFiJq__mobilePublish",
  "navLink": "Header-module__arFiJq__navLink",
  "publishLink": "Header-module__arFiJq__publishLink",
  "topActions": "Header-module__arFiJq__topActions",
  "topBar": "Header-module__arFiJq__topBar",
});
}),
"[project]/components/LoadMore/LoadMore.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "loadbtn": "LoadMore-module__daHK_W__loadbtn",
  "spin": "LoadMore-module__daHK_W__spin",
  "spinner": "LoadMore-module__daHK_W__spinner",
});
}),
"[project]/components/Logo/Logo.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "icon": "Logo-module__MSOgda__icon",
  "logo": "Logo-module__MSOgda__logo",
  "text": "Logo-module__MSOgda__text",
});
}),
"[project]/components/Modal/Modal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backdrop": "Modal-module__sR2AWG__backdrop",
  "modal": "Modal-module__sR2AWG__modal",
});
}),
"[project]/components/StoryCard/StoryCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "author": "StoryCard-module__dbHd6q__author",
  "bookmarkButton": "StoryCard-module__dbHd6q__bookmarkButton",
  "card": "StoryCard-module__dbHd6q__card",
  "content": "StoryCard-module__dbHd6q__content",
  "footer": "StoryCard-module__dbHd6q__footer",
  "image": "StoryCard-module__dbHd6q__image",
  "imageWrap": "StoryCard-module__dbHd6q__imageWrap",
  "meta": "StoryCard-module__dbHd6q__meta",
  "readButton": "StoryCard-module__dbHd6q__readButton",
  "savedCount": "StoryCard-module__dbHd6q__savedCount",
  "spin": "StoryCard-module__dbHd6q__spin",
  "spinner": "StoryCard-module__dbHd6q__spinner",
  "title": "StoryCard-module__dbHd6q__title",
});
}),
"[project]/components/TravellersStories/TravellersStories.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "TravellersStories-module__pRhsTW__container",
  "fadeIn": "TravellersStories-module__pRhsTW__fadeIn",
  "list": "TravellersStories-module__pRhsTW__list",
  "listItem": "TravellersStories-module__pRhsTW__listItem",
  "stories": "TravellersStories-module__pRhsTW__stories",
});
}),
"[project]/components/UserBar/UserBar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "UserBar-module__CB8jsq__avatar",
  "avatarImage": "UserBar-module__CB8jsq__avatarImage",
  "error": "UserBar-module__CB8jsq__error",
  "logout": "UserBar-module__CB8jsq__logout",
  "name": "UserBar-module__CB8jsq__name",
  "profile": "UserBar-module__CB8jsq__profile",
  "separator": "UserBar-module__CB8jsq__separator",
  "userBar": "UserBar-module__CB8jsq__userBar",
  "wrapper": "UserBar-module__CB8jsq__wrapper",
});
}),
]);

//# sourceMappingURL=_0id-cqhcbku8t._.js.map