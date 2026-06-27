(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/tool website/store/useUiStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUiStore",
    ()=>useUiStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
;
const useUiStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])((set)=>({
        theme: 'light',
        setTheme: (t)=>{
            set({
                theme: t
            });
            try {
                localStorage.setItem('theme', t);
                if (t === 'dark') document.documentElement.classList.add('dark');
                else document.documentElement.classList.remove('dark');
            } catch (e) {
            // ignore
            }
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/tool website/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$store$2f$useUiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/store/useUiStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeToggle() {
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$store$2f$useUiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "ThemeToggle.useUiStore[theme]": (s)=>s.theme
    }["ThemeToggle.useUiStore[theme]"]);
    const setTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$store$2f$useUiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "ThemeToggle.useUiStore[setTheme]": (s)=>s.setTheme
    }["ThemeToggle.useUiStore[setTheme]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            try {
                const stored = localStorage.getItem('theme');
                if (stored === 'dark') {
                    document.documentElement.classList.add('dark');
                    setTheme('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    setTheme('light');
                }
            } catch (e) {
            // ignore
            }
        }
    }["ThemeToggle.useEffect"], [
        setTheme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>setTheme(theme === 'dark' ? 'light' : 'dark'),
        "aria-label": "Toggle theme",
        className: "px-2 py-1 border rounded",
        children: theme === 'dark' ? '🌙' : '☀️'
    }, void 0, false, {
        fileName: "[project]/Desktop/tool website/components/ThemeToggle.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "zWa2pW3mA3v7CHmCEyCjScqknXA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$store$2f$useUiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$store$2f$useUiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_tool%20website_34d91d26._.js.map