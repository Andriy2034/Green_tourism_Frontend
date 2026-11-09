(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
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
"[project]/components/MessageNoStories/MessageNoStories.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageNoStories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MessageNoStories$2f$MessageNoStories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/MessageNoStories/MessageNoStories.module.css [app-client] (css module)");
;
;
;
;
function MessageNoStories(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "673c5afc43871f72d423fc5295271a07f40bc1283a19a335505016e4805cc1b1") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "673c5afc43871f72d423fc5295271a07f40bc1283a19a335505016e4805cc1b1";
    }
    const { text, buttonText, linkTo } = t0;
    let t1;
    if ($[1] !== text) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MessageNoStories$2f$MessageNoStories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
            children: text
        }, void 0, false, {
            fileName: "[project]/components/MessageNoStories/MessageNoStories.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = text;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== buttonText || $[4] !== linkTo) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: linkTo,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MessageNoStories$2f$MessageNoStories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
            children: buttonText
        }, void 0, false, {
            fileName: "[project]/components/MessageNoStories/MessageNoStories.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = buttonText;
        $[4] = linkTo;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t1 || $[7] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MessageNoStories$2f$MessageNoStories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MessageNoStories$2f$MessageNoStories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].containerBox,
                children: [
                    t1,
                    t2
                ]
            }, void 0, true, {
                fileName: "[project]/components/MessageNoStories/MessageNoStories.tsx",
                lineNumber: 41,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/MessageNoStories/MessageNoStories.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
}
_c = MessageNoStories;
var _c;
__turbopack_context__.k.register(_c, "MessageNoStories");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProfileStories/ProfileStories.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileStories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersStories$2f$TravellersStories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TravellersStories/TravellersStories.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadMore$2f$LoadMore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoadMore/LoadMore.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MessageNoStories$2f$MessageNoStories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MessageNoStories/MessageNoStories.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/clientApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProfileStories$2f$ProfileStories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ProfileStories/ProfileStories.module.css [app-client] (css module)");
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
function ProfileStories(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "9e0e9d4a2910d829849d39461c6396c19464428b84fc6007728ce20aa2282013") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9e0e9d4a2910d829849d39461c6396c19464428b84fc6007728ce20aa2282013";
    }
    const { tab } = t0;
    let t1;
    if ($[1] !== tab) {
        t1 = {
            queryKey: [
                "profileStories",
                tab
            ],
            queryFn: (t2)=>{
                const { pageParam } = t2;
                return tab === "saved" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSavedStories"])({
                    page: pageParam,
                    perPage: 6
                }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMyStories"])({
                    page: pageParam,
                    perPage: 6
                });
            },
            initialPageParam: 1,
            getNextPageParam: _temp
        };
        $[1] = tab;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])(t1);
    if (isLoading) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProfileStories$2f$ProfileStories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status} container`,
                children: "Завантаження історій..."
            }, void 0, false, {
                fileName: "[project]/components/ProfileStories/ProfileStories.tsx",
                lineNumber: 56,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    if (isError && !data) {
        let t2;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProfileStories$2f$ProfileStories$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status} container`,
                children: "Не вдалося завантажити історії."
            }, void 0, false, {
                fileName: "[project]/components/ProfileStories/ProfileStories.tsx",
                lineNumber: 66,
                columnNumber: 12
            }, this);
            $[4] = t2;
        } else {
            t2 = $[4];
        }
        return t2;
    }
    let t2;
    if ($[5] !== data?.pages) {
        t2 = data?.pages.flatMap(_ProfileStoriesAnonymous) ?? [];
        $[5] = data?.pages;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const stories = t2;
    if (stories.length === 0) {
        let t3;
        if ($[7] !== tab) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: tab === "saved" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MessageNoStories$2f$MessageNoStories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "\u0423 \u0432\u0430\u0441 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0438\u0445 \u0456\u0441\u0442\u043E\u0440\u0456\u0439, \u043C\u0435\u0440\u0448\u0456\u0439 \u0437\u0431\u0435\u0440\u0435\u0436\u0456\u0442\u044C \u0432\u0430\u0448\u0443 \u043F\u0435\u0440\u0448\u0443 \u0456\u0441\u0442\u043E\u0440\u0456\u044E!",
                    buttonText: "\u0414\u043E \u0456\u0441\u0442\u043E\u0440\u0456\u0439",
                    linkTo: "/stories"
                }, void 0, false, {
                    fileName: "[project]/components/ProfileStories/ProfileStories.tsx",
                    lineNumber: 85,
                    columnNumber: 58
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MessageNoStories$2f$MessageNoStories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "\u0412\u0438 \u0449\u0435 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0432\u0430\u043B\u0438, \u043F\u043E\u0434\u0456\u043B\u0456\u0442\u044C\u0441\u044F \u0441\u0432\u043E\u0454\u044E \u043F\u0435\u0440\u0448\u043E\u044E \u0456\u0441\u0442\u043E\u0440\u0456\u0454\u044E!",
                    buttonText: "\u041E\u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0432\u0430\u0442\u0438 \u0456\u0441\u0442\u043E\u0440\u0456\u044E",
                    linkTo: "/new-story"
                }, void 0, false, {
                    fileName: "[project]/components/ProfileStories/ProfileStories.tsx",
                    lineNumber: 85,
                    columnNumber: 546
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProfileStories/ProfileStories.tsx",
                lineNumber: 85,
                columnNumber: 12
            }, this);
            $[7] = tab;
            $[8] = t3;
        } else {
            t3 = $[8];
        }
        return t3;
    }
    let t3;
    if ($[9] !== fetchNextPage) {
        t3 = ({
            "ProfileStories[<LoadMore>.onLoadMore]": ()=>fetchNextPage()
        })["ProfileStories[<LoadMore>.onLoadMore]"];
        $[9] = fetchNextPage;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== hasNextPage || $[12] !== isFetchingNextPage || $[13] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadMore$2f$LoadMore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onLoadMore: t3,
            hasMore: hasNextPage,
            isLoading: isFetchingNextPage
        }, void 0, false, {
            fileName: "[project]/components/ProfileStories/ProfileStories.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[11] = hasNextPage;
        $[12] = isFetchingNextPage;
        $[13] = t3;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== stories || $[16] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersStories$2f$TravellersStories$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            stories: stories,
            children: t4
        }, void 0, false, {
            fileName: "[project]/components/ProfileStories/ProfileStories.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[15] = stories;
        $[16] = t4;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    return t5;
}
_s(ProfileStories, "XCSvMw+PgnoJnBEG5U1HtaMXLow=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
_c = ProfileStories;
function _ProfileStoriesAnonymous(page) {
    return page.stories;
}
function _temp(lastPage, allPages) {
    return allPages.length < lastPage.totalPages ? allPages.length + 1 : undefined;
}
var _c;
__turbopack_context__.k.register(_c, "ProfileStories");
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
"[project]/node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfiniteQueryObserver",
    ()=>InfiniteQueryObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)");
;
;
//#region src/infiniteQueryObserver.ts
/**
* An `InfiniteQueryObserver` extends `QueryObserver` to observe and switch
* between infinite queries. It augments the base `QueryObserverResult` with
* infinite-query-specific fields and methods, such as `hasNextPage` and
* `fetchNextPage`, and is the primitive that framework adapters (e.g.
* `useInfiniteQuery`) build their hooks on top of.
* @example
* ```ts
* const observer = new InfiniteQueryObserver(queryClient, {
*   queryKey: ['projects'],
*   queryFn: ({ pageParam }) => fetchProjects(pageParam),
*   initialPageParam: 0,
*   getNextPageParam: (lastPage) => lastPage.nextCursor,
* })
*
* const unsubscribe = observer.subscribe((result) => console.log(result))
* ```
*/ var InfiniteQueryObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryObserver"] {
    constructor(client, options){
        super(client, options);
    }
    bindMethods() {
        super.bindMethods();
        this.fetchNextPage = this.fetchNextPage.bind(this);
        this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
    }
    /**
	* Updates the observer's options. Behaves the same as
	* `QueryObserver.setOptions`, additionally marking the options as
	* belonging to an infinite query before delegating to the base
	* implementation.
	* @param options - The new infinite query observer options.
	*/ setOptions(options) {
        options._type = "infinite";
        super.setOptions(options);
    }
    /**
	* The infinite-query counterpart of {@link QueryObserver#getOptimisticResult}, marking the
	* options as an infinite query before delegating to it. Called by framework adapters (e.g.
	* `useInfiniteQuery`) ahead of subscribing, to compute the current `InfiniteQueryObserverResult`
	* synchronously.
	* @param options - The defaulted infinite query observer options to compute the result for.
	* @returns The result for the given options.
	*/ getOptimisticResult(options) {
        options._type = "infinite";
        return super.getOptimisticResult(options);
    }
    /**
	* Fetches the next page of the infinite query and returns a promise that
	* resolves with the resulting `InfiniteQueryObserverResult`. The page
	* param used for the fetch is determined by `getNextPageParam`, which
	* receives the current pages/page params and whose result also determines
	* `hasNextPage`.
	* @param options - Set `cancelRefetch` to `false` to ignore the call while a fetch is running,
	* and `throwOnError` to `true` to reject when the fetch fails.
	* @returns A promise that resolves with the result after the next page is fetched. With
	* `cancelRefetch: false`, a running fetch is reused instead, so the next page may not be fetched.
	* @see {@link InfiniteQueryObserver#fetchPreviousPage}
	* @example
	* ```ts
	* const { hasNextPage } = observer.getCurrentResult()
	*
	* if (hasNextPage) {
	*   await observer.fetchNextPage()
	* }
	* ```
	*/ fetchNextPage(options) {
        return this.fetch({
            ...options,
            meta: {
                fetchMore: {
                    direction: "forward"
                }
            }
        });
    }
    /**
	* Fetches the previous page of the infinite query and returns a promise
	* that resolves with the resulting `InfiniteQueryObserverResult`. The page
	* param used for the fetch is determined by `getPreviousPageParam`, which
	* receives the current pages/page params and whose result also determines
	* `hasPreviousPage`.
	* @param options - Set `cancelRefetch` to `false` to ignore the call while a fetch is running,
	* and `throwOnError` to `true` to reject when the fetch fails.
	* @returns A promise that resolves with the result after the previous page is fetched. With
	* `cancelRefetch: false`, a running fetch is reused instead, so the previous page may not be fetched.
	* @see {@link InfiniteQueryObserver#fetchNextPage}
	* @example
	* ```ts
	* const { hasPreviousPage } = observer.getCurrentResult()
	*
	* if (hasPreviousPage) {
	*   await observer.fetchPreviousPage()
	* }
	* ```
	*/ fetchPreviousPage(options) {
        return this.fetch({
            ...options,
            meta: {
                fetchMore: {
                    direction: "backward"
                }
            }
        });
    }
    createResult(query, options) {
        const { state } = query;
        const parentResult = super.createResult(query, options);
        const { isFetching, isRefetching, isError, isRefetchError } = parentResult;
        const fetchDirection = state.fetchMeta?.fetchMore?.direction;
        const isFetchNextPageError = isError && fetchDirection === "forward";
        const isFetchingNextPage = isFetching && fetchDirection === "forward";
        const isFetchPreviousPageError = isError && fetchDirection === "backward";
        const isFetchingPreviousPage = isFetching && fetchDirection === "backward";
        return {
            ...parentResult,
            fetchNextPage: this.fetchNextPage,
            fetchPreviousPage: this.fetchPreviousPage,
            hasNextPage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasNextPage"])(options, state.data),
            hasPreviousPage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPreviousPage"])(options, state.data),
            isFetchNextPageError,
            isFetchingNextPage,
            isFetchPreviousPageError,
            isFetchingPreviousPage,
            isRefetchError: isRefetchError && !isFetchNextPageError && !isFetchPreviousPageError,
            isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
        };
    }
};
;
}),
"[project]/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MutationObserver",
    ()=>MutationObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)");
;
;
;
;
//#region src/mutationObserver.ts
/**
* Observes a single mutation and derives a `MutationObserverResult` from it.
* A framework hook like `useMutation` creates one `MutationObserver` per hook
* call, keeps it stable across re-renders, calls `setOptions` when the options
* passed to the hook change, subscribes to it to re-render on updates, and
* reads `getCurrentResult()` for the value to return. Calling `mutate()`
* builds a new underlying `Mutation` in the `MutationCache` and executes it.
* @example
* ```ts
* const observer = new MutationObserver(queryClient, {
*   mutationFn: (variables: { title: string }) => addPost(variables),
* })
* ```
*/ var MutationObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    #client;
    #currentResult = void 0;
    #currentMutation;
    #mutateOptions;
    constructor(client, options){
        super();
        this.#client = client;
        this.setOptions(options);
        this.bindMethods();
        this.#updateResult();
    }
    /**
	* Binds the methods of the result (`mutate` and `reset`) to the observer, so they keep working when
	* destructured from it.
	*/ bindMethods() {
        this.mutate = this.mutate.bind(this);
        this.reset = this.reset.bind(this);
    }
    /**
	* Updates the observer's options.
	*
	* If the new `mutationKey` differs from the previous one (and both were
	* defined), the observer is reset, detaching it from the mutation it was
	* observing. Otherwise, if the currently observed mutation is still
	* `pending`, its options are updated in place as well.
	* @param options - The new mutation observer options. They are defaulted with {@link
	* QueryClient#defaultMutationOptions} before being applied.
	* @example
	* ```ts
	* observer.setOptions({
	*   mutationFn: (variables: { title: string }) => addPost(variables),
	*   onSuccess: (data) => console.log(data),
	* })
	* ```
	*/ setOptions(options) {
        const prevOptions = this.options;
        this.options = this.#client.defaultMutationOptions(options);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) this.#client.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#currentMutation,
            observer: this
        });
        if (prevOptions?.mutationKey && this.options.mutationKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(prevOptions.mutationKey) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(this.options.mutationKey)) this.reset();
        else if (this.#currentMutation?.state.status === "pending") this.#currentMutation.setOptions(this.options);
    }
    onSubscribe() {
        if (this.listeners.size === 1 && this.#currentMutation) {
            this.#currentMutation.addObserver(this);
            this.#updateResult();
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) this.#currentMutation?.removeObserver(this);
    }
    /**
	* Updates the observer's result when the observed mutation changes, and notifies its listeners.
	* @internal
	* @param action - The action that updated the observed mutation, passed on to the observer's
	* callbacks.
	*/ onMutationUpdate(action) {
        this.#updateResult();
        this.#notify(action);
    }
    /**
	* Returns the observer's current result, derived from the observed
	* mutation's state (or the default, `idle` state if no mutation has been
	* built yet, e.g. before the first `mutate()` call or after `reset()`).
	* @returns The observer's latest result.
	*/ getCurrentResult() {
        return this.#currentResult;
    }
    /**
	* Detaches the observer from the mutation it is currently observing (if
	* any) and resets the observed result back to its default, `idle` state.
	*
	* This does not cancel an in-flight mutation; the mutation itself keeps
	* running to completion and its own callbacks still fire, but this
	* observer stops reflecting its state and a subsequent `mutate()` call
	* will build a brand new mutation.
	* @see {@link MutationObserver#mutate}
	* @example
	* ```ts
	* observer.reset()
	* ```
	*/ reset() {
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = void 0;
        this.#updateResult();
        this.#notify();
    }
    /**
	* Builds a new `Mutation` in the `MutationCache` using the observer's
	* current options, detaches this observer from any previously observed
	* mutation, attaches it to the new one, and executes it with the given
	* variables.
	*
	* The optional per-call `options` (`onSuccess`/`onError`/`onSettled`) are
	* invoked once the mutation settles, in addition to any callbacks defined
	* on the observer's own options.
	* @param variables - The variables passed to the `mutationFn`.
	* @param options - Per-call `onSuccess`, `onError`, and `onSettled` callbacks.
	* @returns A promise that resolves with the mutation's data, or rejects with its error.
	* @example
	* ```ts
	* await observer.mutate(
	*   { title: 'New post' },
	*   { onSuccess: (data) => console.log(data) },
	* )
	* ```
	*/ mutate(variables, options) {
        this.#mutateOptions = options;
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
        this.#currentMutation.addObserver(this);
        return this.#currentMutation.execute(variables);
    }
    #updateResult() {
        const state = this.#currentMutation?.state ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultState"])();
        this.#currentResult = {
            ...state,
            isPending: state.status === "pending",
            isSuccess: state.status === "success",
            isError: state.status === "error",
            isIdle: state.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        };
    }
    #notify(action) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            const mutateOptions = this.#mutateOptions;
            if (mutateOptions && this.hasListeners()) {
                const variables = this.#currentResult.variables;
                const onMutateResult = this.#currentResult.context;
                const context = {
                    client: this.#client,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey
                };
                if (action?.type === "success") {
                    try {
                        mutateOptions.onSuccess?.(action.data, variables, onMutateResult, context);
                    } catch (e) {
                        Promise.reject(e);
                    }
                    try {
                        mutateOptions.onSettled?.(action.data, null, variables, onMutateResult, context);
                    } catch (e) {
                        Promise.reject(e);
                    }
                } else if (action?.type === "error") {
                    try {
                        mutateOptions.onError?.(action.error, variables, onMutateResult, context);
                    } catch (e) {
                        Promise.reject(e);
                    }
                    try {
                        mutateOptions.onSettled?.(void 0, action.error, variables, onMutateResult, context);
                    } catch (e) {
                        Promise.reject(e);
                    }
                }
            }
            this.listeners.forEach((listener)=>{
                listener(this.#currentResult);
            });
        });
    }
};
;
}),
"[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInfiniteQuery",
    ()=>useInfiniteQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js [app-client] (ecmascript)");
"use client";
;
;
//#region src/useInfiniteQuery.ts
function useInfiniteQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfiniteQueryObserver"], queryClient);
}
;
}),
"[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutation",
    ()=>useMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
"use client";
;
;
;
//#region src/useMutation.ts
/**
* Unlike queries, mutations are typically used to create/update/delete data or perform server side-effects.
* `useMutation` is the hook for that.
* @param options - The {@link UseMutationOptions} to use — everything you can pass to `useMutation`.
* @param queryClient - Use this to use a custom `QueryClient`. Otherwise, the one from the nearest context will
* be used.
* @returns `mutate`/`mutateAsync` also accept per-call `onSuccess`/`onError`/`onSettled` callbacks as a second
* argument, useful for triggering call-site side effects (e.g. navigation) without coupling them to the shared
* mutation definition. Hook-level callbacks (passed to `options`) fire for every mutation; per-call callbacks
* fire only for the latest call you've made, and only while the component is still mounted — unmounting before
* the mutation settles removes the subscription and prevents them from firing.
* @throws {Error} The mutation error, when `throwOnError` is `true` or returns `true` for it, so that it is
* thrown to the nearest error boundary.
* @see {@link mutationOptions} to share these options across multiple `useMutation` call sites, or to look
* the mutation up elsewhere via its `mutationKey` (e.g. with `useMutationState`).
* @example
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodo() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
*   })
*
*   return (
*     <button
*       onClick={() =>
*         addMutation.mutate('Item', {
*           onError: (error) => console.error('Failed to add item:', error),
*         })
*       }
*     >
*       Add
*     </button>
*   )
* }
* ```
* @example
* Rendering the mutation's own state, rather than just firing it off:
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodo() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
*   })
*
*   return (
*     <div>
*       {addMutation.isPending ? (
*         'Adding todo...'
*       ) : (
*         <>
*           {addMutation.isError ? (
*             <div>An error occurred: {addMutation.error.message}</div>
*           ) : null}
*           <button onClick={() => addMutation.mutate('Item')}>Add</button>
*         </>
*       )}
*     </div>
*   )
* }
* ```
* @example
* Optimistic update via `onMutate`, rolling back on `onError`:
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodo() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onMutate: async (newTodo) => {
*       await queryClient.cancelQueries({ queryKey: ['todos'] })
*       const previousTodos = queryClient.getQueryData<Array<string>>(['todos'])
*
*       queryClient.setQueryData<Array<string>>(['todos'], (old) => [
*         ...(old ?? []),
*         newTodo,
*       ])
*
*       // Passed to `onError` as `onMutateResult` if the mutation fails.
*       return { previousTodos }
*     },
*     onError: (_err, _newTodo, onMutateResult) => {
*       queryClient.setQueryData(['todos'], onMutateResult?.previousTodos)
*     },
*     onSettled: () => {
*       queryClient.invalidateQueries({ queryKey: ['todos'] })
*     },
*   })
*
*   return (
*     <button onClick={() => addMutation.mutate('Item')}>Add</button>
*   )
* }
* ```
* @example
* Callbacks passed per call to `mutate` only fire for the last call — `mutateAsync` gives you a
* promise per call instead, so you can wait for all of them when they succeed:
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodos() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
*   })
*
*   async function handleAddAll(todos: Array<string>) {
*     try {
*       await Promise.all(todos.map((todo) => addMutation.mutateAsync(todo)))
*     } catch (error) {
*       console.error('Failed to add todos:', error)
*     }
*   }
*
*   return (
*     <button onClick={() => handleAddAll(['Todo 1', 'Todo 2', 'Todo 3'])}>
*       Add all
*     </button>
*   )
* }
* ```
* @example
* If some of the mutations above can fail independently of the others, and you want to know which ones
* did — rather than losing that information the moment the first one rejects — swap `Promise.all` for
* `Promise.allSettled`:
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodos() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
*   })
*
*   async function handleAddAll(todos: Array<string>) {
*     const addResults = await Promise.allSettled(
*       todos.map((todo) => addMutation.mutateAsync(todo)),
*     )
*
*     addResults.forEach((addResult, index) => {
*       if (addResult.status === 'rejected') {
*         console.error(`Failed to add "${todos[index]}":`, addResult.reason)
*       }
*     })
*   }
*
*   return (
*     <button onClick={() => handleAddAll(['Todo 1', 'Todo 2', 'Todo 3'])}>
*       Add all
*     </button>
*   )
* }
* ```
*/ function useMutation(options, queryClient) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useMutation.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutationObserver"](client, options)
    }["useMutation.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useMutation.useEffect": ()=>{
            observer.setOptions(options);
        }
    }["useMutation.useEffect"], [
        observer,
        options
    ]);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useSyncExternalStore[result]": (onStoreChange)=>observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange))
    }["useMutation.useSyncExternalStore[result]"], [
        observer
    ]), {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"], {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"]);
    const mutate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useCallback[mutate]": (...args)=>{
            observer.mutate(args[0], args[1]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
        }
    }["useMutation.useCallback[mutate]"], [
        observer
    ]);
    if (result.error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(observer.options.throwOnError, [
        result.error
    ])) throw result.error;
    return {
        ...result,
        mutate,
        mutateAsync: result.mutate
    };
}
;
}),
]})(),
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
"[project]/components/LoadMore/LoadMore.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "loadbtn": "LoadMore-module__daHK_W__loadbtn",
  "spin": "LoadMore-module__daHK_W__spin",
  "spinner": "LoadMore-module__daHK_W__spinner",
});
}),
"[project]/components/MessageNoStories/MessageNoStories.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "MessageNoStories-module___TjSgq__button",
  "container": "MessageNoStories-module___TjSgq__container",
  "containerBox": "MessageNoStories-module___TjSgq__containerBox",
  "text": "MessageNoStories-module___TjSgq__text",
});
}),
"[project]/components/ProfileStories/ProfileStories.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "status": "ProfileStories-module__Kt-sOW__status",
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
]);

//# sourceMappingURL=_1dzqbxwnvgl8x._.js.map