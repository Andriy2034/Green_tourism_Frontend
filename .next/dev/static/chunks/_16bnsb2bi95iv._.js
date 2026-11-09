(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
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
"[project]/components/TravellerCard/TravellerCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TravellerCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellerCard$2f$TravellerCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/TravellerCard/TravellerCard.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
;
function TravellerCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "c14d2250494f23aadbb2cf7fa4d60103eeb6dd24ac59d63d405425ad60b79109") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c14d2250494f23aadbb2cf7fa4d60103eeb6dd24ac59d63d405425ad60b79109";
    }
    const { user, className } = t0;
    const cardClassName = className ? `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellerCard$2f$TravellerCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${className}` : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellerCard$2f$TravellerCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card;
    const avatarUrl = user.avatarUrl;
    let t1;
    if ($[1] !== avatarUrl || $[2] !== user.name) {
        t1 = avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellerCard$2f$TravellerCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
            src: avatarUrl,
            alt: `${user.name} — фото профілю`,
            width: 130,
            height: 130,
            unoptimized: true
        }, void 0, false, {
            fileName: "[project]/components/TravellerCard/TravellerCard.tsx",
            lineNumber: 31,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellerCard$2f$TravellerCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
            role: "img",
            "aria-label": `Фото профілю ${user.name} відсутнє`
        }, void 0, false, {
            fileName: "[project]/components/TravellerCard/TravellerCard.tsx",
            lineNumber: 31,
            columnNumber: 156
        }, this);
        $[1] = avatarUrl;
        $[2] = user.name;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== user.name) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellerCard$2f$TravellerCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
            children: user.name
        }, void 0, false, {
            fileName: "[project]/components/TravellerCard/TravellerCard.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[4] = user.name;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== user.articlesAmount) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellerCard$2f$TravellerCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleCount,
            children: [
                "Статей: ",
                user.articlesAmount
            ]
        }, void 0, true, {
            fileName: "[project]/components/TravellerCard/TravellerCard.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[6] = user.articlesAmount;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellerCard$2f$TravellerCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/TravellerCard/TravellerCard.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const t5 = `/travellers/${encodeURIComponent(user._id)}`;
    let t6;
    if ($[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellerCard$2f$TravellerCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileButton,
            href: t5,
            children: "Переглянути профіль"
        }, void 0, false, {
            fileName: "[project]/components/TravellerCard/TravellerCard.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t4 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellerCard$2f$TravellerCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/TravellerCard/TravellerCard.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== cardClassName || $[17] !== t1 || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: cardClassName,
            children: [
                t1,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/TravellerCard/TravellerCard.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[16] = cardClassName;
        $[17] = t1;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    return t8;
}
_c = TravellerCard;
var _c;
__turbopack_context__.k.register(_c, "TravellerCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TravellersList/TravellersList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TravellersList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellerCard$2f$TravellerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TravellerCard/TravellerCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadMore$2f$LoadMore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoadMore/LoadMore.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/usersApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersList$2f$TravellersList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/TravellersList/TravellersList.module.css [app-client] (css module)");
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
function TravellersList() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "ac2296dafd94f594e5f55937ad75104800c4b4a3839c9c5b1ca4baa41ebb3542") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ac2296dafd94f594e5f55937ad75104800c4b4a3839c9c5b1ca4baa41ebb3542";
    }
    const seenCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRAVELLERS_QUERY_KEY"],
            queryFn: _temp,
            initialPageParam: 1,
            getNextPageParam: _temp2
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const { data, error, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])(t0);
    let t1;
    if ($[2] !== data?.pages) {
        t1 = data?.pages.flatMap(_TravellersListAnonymous) ?? [];
        $[2] = data?.pages;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const users = t1;
    let t2;
    let t3;
    if ($[4] !== error || $[5] !== isError) {
        t2 = ({
            "TravellersList[useEffect()]": ()=>{
                if (isError && error) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(error.message, {
                        id: "travellers-load-error"
                    });
                }
            }
        })["TravellersList[useEffect()]"];
        t3 = [
            isError,
            error
        ];
        $[4] = error;
        $[5] = isError;
        $[6] = t2;
        $[7] = t3;
    } else {
        t2 = $[6];
        t3 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[8] !== users) {
        t4 = ({
            "TravellersList[useEffect()]": ()=>{
                if (seenCount.current > 0 && users.length > seenCount.current) {
                    const firstNew = users[seenCount.current];
                    document.getElementById(`traveller-${firstNew._id}`)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
                seenCount.current = users.length;
            }
        })["TravellersList[useEffect()]"];
        t5 = [
            users
        ];
        $[8] = users;
        $[9] = t4;
        $[10] = t5;
    } else {
        t4 = $[9];
        t5 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersList$2f$TravellersList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
            children: "Мандрівники"
        }, void 0, false, {
            fileName: "[project]/components/TravellersList/TravellersList.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== users) {
        t7 = users.map(_TravellersListUsersMap);
        $[12] = users;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersList$2f$TravellersList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
            children: t7
        }, void 0, false, {
            fileName: "[project]/components/TravellersList/TravellersList.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const t9 = Boolean(hasNextPage);
    let t10;
    if ($[16] !== fetchNextPage || $[17] !== isFetchingNextPage || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadMore$2f$LoadMore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersList$2f$TravellersList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].more,
            onLoadMore: fetchNextPage,
            isLoading: isFetchingNextPage,
            hasMore: t9
        }, void 0, false, {
            fileName: "[project]/components/TravellersList/TravellersList.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[16] = fetchNextPage;
        $[17] = isFetchingNextPage;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10 || $[21] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersList$2f$TravellersList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            children: [
                t6,
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/TravellersList/TravellersList.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t8;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    return t11;
}
_s(TravellersList, "mqhnh7iL5bV3d9dypqLTkmB0C80=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
_c = TravellersList;
function _TravellersListUsersMap(user) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        id: `traveller-${user._id}`,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellersList$2f$TravellersList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TravellerCard$2f$TravellerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            user: user
        }, void 0, false, {
            fileName: "[project]/components/TravellersList/TravellersList.tsx",
            lineNumber: 142,
            columnNumber: 82
        }, this)
    }, user._id, false, {
        fileName: "[project]/components/TravellersList/TravellersList.tsx",
        lineNumber: 142,
        columnNumber: 10
    }, this);
}
function _TravellersListAnonymous(page) {
    return page.users;
}
function _temp2(lastPage) {
    return lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined;
}
function _temp(t0) {
    const { pageParam } = t0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$usersApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUsers"])({
        page: pageParam,
        perPage: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRAVELLERS_PER_PAGE"]
    });
}
var _c;
__turbopack_context__.k.register(_c, "TravellersList");
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
"[project]/lib/api/usersApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchUsers",
    ()=>fetchUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://green-tourism-backend-5yt7.onrender.com/api") || 'https://green-tourism-backend.onrender.com/api',
    withCredentials: true
});
async function fetchUsers(params) {
    try {
        const response = await api.get('/users', {
            params
        });
        return response.data;
    } catch (error) {
        throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorMessage"])(error, 'Не вдалося завантажити мандрівників'));
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/components/TravellerCard/TravellerCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "articleCount": "TravellerCard-module__Z4qoqG__articleCount",
  "avatar": "TravellerCard-module__Z4qoqG__avatar",
  "card": "TravellerCard-module__Z4qoqG__card",
  "content": "TravellerCard-module__Z4qoqG__content",
  "details": "TravellerCard-module__Z4qoqG__details",
  "name": "TravellerCard-module__Z4qoqG__name",
  "profileButton": "TravellerCard-module__Z4qoqG__profileButton",
});
}),
"[project]/components/TravellersList/TravellersList.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "item": "TravellersList-module__y_7Q6a__item",
  "list": "TravellersList-module__y_7Q6a__list",
  "more": "TravellersList-module__y_7Q6a__more",
  "section": "TravellersList-module__y_7Q6a__section",
  "title": "TravellersList-module__y_7Q6a__title",
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

//# sourceMappingURL=_16bnsb2bi95iv._.js.map