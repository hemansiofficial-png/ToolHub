module.exports = [
"[project]/Desktop/tool website/components/FormField.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function FormField({ label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-semibold text-slate-700 dark:text-slate-200",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/tool website/components/FormField.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/tool website/components/FormField.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tool website/components/FormField.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/tool website/components/RangeField.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RangeField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$components$2f$FormField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/components/FormField.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}
function RangeField({ label, value, onChange, min, max, step = 1, prefix = '', suffix = '', valueFormatter }) {
    const percent = (value - min) / (max - min) * 100;
    const displayValue = valueFormatter ? valueFormatter(value) : `${prefix}${value}${suffix}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$components$2f$FormField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        label: label,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950/80",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-100",
                            children: displayValue
                        }, void 0, false, {
                            fileName: "[project]/Desktop/tool website/components/RangeField.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            min: min,
                            max: max,
                            step: step,
                            value: value,
                            onChange: (event)=>onChange(clamp(Number(event.target.value) || min, min, max)),
                            className: "form-field w-full text-right sm:w-36"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/tool website/components/RangeField.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/tool website/components/RangeField.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "range",
                    min: min,
                    max: max,
                    step: step,
                    value: value,
                    onChange: (event)=>onChange(Number(event.target.value)),
                    className: "slider mt-4",
                    style: {
                        background: `linear-gradient(90deg, #0ea5e9 0%, #0ea5e9 ${percent}%, #cbd5e1 ${percent}%, #cbd5e1 100%)`
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/tool website/components/RangeField.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                prefix,
                                min,
                                suffix
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tool website/components/RangeField.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                prefix,
                                max,
                                suffix
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tool website/components/RangeField.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/tool website/components/RangeField.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/tool website/components/RangeField.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/tool website/components/RangeField.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/tool website/data/tools.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "tools",
    ()=>tools,
    "toolsByCategory",
    ()=>toolsByCategory
]);
const tools = [
    {
        slug: 'income-tax-calculator',
        title: 'Income Tax Calculator',
        description: 'Compare estimated old and new regime tax for salaried income.',
        category: 'Finance'
    },
    {
        slug: 'sip-calculator',
        title: 'SIP Calculator',
        description: 'Estimate SIP returns and maturity amount.',
        category: 'Finance'
    },
    {
        slug: 'step-up-sip-calculator',
        title: 'Step Up SIP Calculator',
        description: 'Project SIP growth when contributions increase every year.',
        category: 'Finance'
    },
    {
        slug: 'emi-calculator',
        title: 'EMI Calculator',
        description: 'Calculate EMI for loan amount, rate and tenure.',
        category: 'Finance'
    },
    {
        slug: 'fd-calculator',
        title: 'FD Calculator',
        description: 'Calculate fixed deposit maturity and interest earnings.',
        category: 'Finance'
    },
    {
        slug: 'cagr-calculator',
        title: 'CAGR Calculator',
        description: 'Measure compound annual growth rate between two values.',
        category: 'Finance'
    },
    {
        slug: 'stock-average-calculator',
        title: 'Stock Average Calculator',
        description: 'Average multiple stock purchases to find break-even cost.',
        category: 'Finance'
    },
    {
        slug: 'lumpsum-calculator',
        title: 'Lumpsum Calculator',
        description: 'Estimate future value for a one-time investment.',
        category: 'Finance'
    },
    {
        slug: 'gst-calculator',
        title: 'GST Calculator',
        description: 'Compute GST inclusive and exclusive values.',
        category: 'Finance'
    },
    {
        slug: 'pdf-merge',
        title: 'PDF Merge',
        description: 'Combine multiple PDF files into one document.',
        category: 'PDF'
    },
    {
        slug: 'pdf-split',
        title: 'PDF Split',
        description: 'Extract selected pages from a PDF into a new file.',
        category: 'PDF'
    },
    {
        slug: 'image-to-pdf',
        title: 'Image to PDF',
        description: 'Convert one or more images into a PDF.',
        category: 'PDF'
    },
    {
        slug: 'pdf-to-image',
        title: 'PDF to Image',
        description: 'Convert PDF pages into downloadable PNG images.',
        category: 'PDF'
    },
    {
        slug: 'pdf-compressor',
        title: 'PDF Compressor',
        description: 'Optimize PDF structure for a smaller downloadable file.',
        category: 'PDF'
    },
    {
        slug: 'json-formatter',
        title: 'JSON Formatter',
        description: 'Format and validate JSON payloads.',
        category: 'Developer'
    },
    {
        slug: 'qr-code-generator',
        title: 'QR Code Generator',
        description: 'Create QR codes for URLs or text.',
        category: 'Image'
    },
    {
        slug: 'barcode-generator',
        title: 'Barcode Generator',
        description: 'Generate downloadable barcodes in common formats.',
        category: 'Image'
    },
    {
        slug: 'image-compressor',
        title: 'Image Compressor',
        description: 'Compress images in-browser with size and quality controls.',
        category: 'Image'
    },
    {
        slug: 'image-resizer',
        title: 'Image Resizer',
        description: 'Resize images while keeping the aspect ratio under control.',
        category: 'Image'
    },
    {
        slug: 'word-counter',
        title: 'Word Counter',
        description: 'Count words and characters quickly.',
        category: 'Text'
    },
    {
        slug: 'character-counter',
        title: 'Character Counter',
        description: 'Track characters, spaces, lines, and paragraphs live.',
        category: 'Text'
    },
    {
        slug: 'case-converter',
        title: 'Case Converter',
        description: 'Convert text into upper, lower, title, camel, snake, and kebab case.',
        category: 'Text'
    },
    {
        slug: 'age-calculator',
        title: 'Age Calculator',
        description: 'Calculate age from date of birth.',
        category: 'Utility'
    },
    {
        slug: 'password-generator',
        title: 'Password Generator',
        description: 'Generate secure passwords instantly.',
        category: 'Utility'
    },
    {
        slug: 'bmi-calculator',
        title: 'BMI Calculator',
        description: 'Measure body mass index from height and weight.',
        category: 'Health'
    },
    {
        slug: 'unit-converter',
        title: 'Unit Converter',
        description: 'Convert units for length, weight, volume, and temperature.',
        category: 'Utility'
    }
];
const categories = Array.from(new Set(tools.map((tool)=>tool.category))).sort();
const toolsByCategory = (category)=>tools.filter((tool)=>tool.category === category);
}),
"[project]/Desktop/tool website/data/toolSeo.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getToolSeoContentBySlug",
    ()=>getToolSeoContentBySlug,
    "getToolSeoContentByTitle",
    ()=>getToolSeoContentByTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$tools$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/data/tools.ts [app-ssr] (ecmascript)");
;
const toolExamples = {
    'income-tax-calculator': {
        title: 'Example tax comparison',
        body: 'Enter an annual income such as Rs 12,00,000, review deductions if applicable, and compare the estimated old and new regime tax side by side before making a planning decision.'
    },
    'sip-calculator': {
        title: 'Example SIP projection',
        body: 'A monthly SIP of Rs 10,000 for 15 years at an assumed 12% annual return helps illustrate how invested capital and estimated gains can grow over time.'
    },
    'step-up-sip-calculator': {
        title: 'Example step-up SIP scenario',
        body: 'Start with Rs 5,000 per month and increase the amount by 10% every year to compare the final corpus against a flat SIP contribution.'
    },
    'emi-calculator': {
        title: 'Example EMI calculation',
        body: 'For a Rs 15,00,000 loan at 8.5% annual interest over 20 years, the calculator previews the monthly EMI, total repayment, and total interest outgo.'
    },
    'fd-calculator': {
        title: 'Example FD maturity estimate',
        body: 'Try a deposit of Rs 2,00,000 at 7% annual interest for 5 years to see the projected maturity amount and total interest earned.'
    },
    'cagr-calculator': {
        title: 'Example CAGR use case',
        body: 'Compare an investment growing from Rs 1,00,000 to Rs 1,80,000 over 5 years to understand the average annualized growth rate.'
    },
    'stock-average-calculator': {
        title: 'Example stock averaging',
        body: 'If you bought 10 shares at Rs 500 and 15 more at Rs 420, the calculator shows the revised average cost per share.'
    },
    'lumpsum-calculator': {
        title: 'Example lumpsum growth estimate',
        body: 'Project how a one-time investment of Rs 3,00,000 could grow over 10 years using different expected annual return assumptions.'
    },
    'gst-calculator': {
        title: 'Example GST split',
        body: 'Enter Rs 10,000 and a GST rate of 18% to see the tax amount, total amount, and a quick CGST and SGST split estimate.'
    },
    'pdf-merge': {
        title: 'Example merge workflow',
        body: 'Upload three invoices or report PDFs, keep them in the selected order, and combine them into one downloadable PDF in the browser.'
    },
    'pdf-split': {
        title: 'Example split workflow',
        body: 'Upload a PDF, choose the page range you want to extract, and create a separate PDF containing only those selected pages.'
    },
    'image-to-pdf': {
        title: 'Example image to PDF conversion',
        body: 'Add scanned receipts or images, arrange them in order, and export them as a single PDF document for sharing or storage.'
    },
    'pdf-to-image': {
        title: 'Example PDF to image conversion',
        body: 'Upload a PDF brochure or document, render each page into a PNG image, and then download the pages individually for sharing or design review.'
    },
    'pdf-compressor': {
        title: 'Example PDF optimization',
        body: 'Use the tool on a large PDF before email or upload so you can reduce file size while keeping the document readable.'
    },
    'json-formatter': {
        title: 'Example JSON formatting',
        body: 'Paste a minified JSON payload from an API response to instantly prettify it and check whether the structure is valid.'
    },
    'qr-code-generator': {
        title: 'Example QR code generation',
        body: 'Enter a website URL, event page, or payment link to generate a QR code that can be downloaded and shared quickly.'
    },
    'barcode-generator': {
        title: 'Example barcode generation',
        body: 'Type a numeric product code such as 123456789012 to generate a barcode image for packaging, labels, or inventory use.'
    },
    'image-compressor': {
        title: 'Example image compression',
        body: 'Upload a large JPG or PNG, reduce quality or size settings, and download a lighter version for web or email sharing.'
    },
    'image-resizer': {
        title: 'Example image resizing',
        body: 'Resize a photo for a profile picture, marketplace listing, or blog image while keeping the aspect ratio under control.'
    },
    'word-counter': {
        title: 'Example word count check',
        body: 'Paste a draft article or caption to measure total words, characters, sentence count, and estimated reading time in one place.'
    },
    'character-counter': {
        title: 'Example character limit check',
        body: 'Use the live counter to keep a social media post, ad headline, or app store description within a strict character limit.'
    },
    'case-converter': {
        title: 'Example case conversion',
        body: 'Paste a variable name, heading, or paragraph and switch it into upper, lower, title, camel, snake, or kebab case.'
    },
    'age-calculator': {
        title: 'Example age calculation',
        body: 'Enter a birth date to calculate the current age in years and quickly check age-based eligibility or milestone dates.'
    },
    'password-generator': {
        title: 'Example password creation',
        body: 'Choose a longer length and include symbols to generate a stronger password for personal accounts or team credentials.'
    },
    'bmi-calculator': {
        title: 'Example BMI estimate',
        body: 'Enter height and weight values to estimate BMI and understand the current range before discussing health goals with a professional.'
    },
    'unit-converter': {
        title: 'Example unit conversion',
        body: 'Convert values such as kilometers to miles, kilograms to pounds, or Celsius to Fahrenheit from one screen.'
    }
};
function buildMetaDescription(tool) {
    return `${tool.description} Use this free online ${tool.title.toLowerCase()} on ToolHub India with FAQs, step-by-step guidance, examples, and related tool links.`;
}
function buildHowTo(tool) {
    const lowerTitle = tool.title.toLowerCase();
    if (tool.category === 'Finance' || lowerTitle.includes('calculator')) {
        return [
            `Enter the values required by the ${lowerTitle}, such as amount, rate, duration, or other key inputs.`,
            'Adjust sliders or fields to compare different scenarios and review the live result cards.',
            'Use the output as a planning estimate, then compare it with related tools for a fuller decision.'
        ];
    }
    if (tool.category === 'PDF' || tool.category === 'Image') {
        return [
            `Upload or enter the files needed for the ${lowerTitle}.`,
            'Adjust any available options such as order, size, quality, or dimensions.',
            'Review the preview or status message and then download the processed result.'
        ];
    }
    if (tool.category === 'Text' || tool.category === 'Developer') {
        return [
            `Paste or type your content into the ${lowerTitle}.`,
            'Choose the format or view you want and check the live output.',
            'Copy the result or continue to a related writing or formatting tool if needed.'
        ];
    }
    return [
        `Start with the main input required by the ${lowerTitle}.`,
        'Review the live result as you change values or options.',
        'Use the supporting notes, FAQ, and related links to double-check your next step.'
    ];
}
function buildFaqs(tool) {
    const lowerTitle = tool.title.toLowerCase();
    return [
        {
            question: `How do I use the ${lowerTitle}?`,
            answer: 'Open the tool, enter the required inputs, and review the live result section. The how-to steps and example on this page show the fastest way to get a useful output.'
        },
        {
            question: `Is the ${lowerTitle} free to use?`,
            answer: `Yes. This ${lowerTitle} is designed as a free online utility on ToolHub India. You can also use the related internal links to compare other tools in the same category.`
        }
    ];
}
function getToolSeoContentByTitle(title) {
    const tool = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$tools$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tools"].find((item)=>item.title === title);
    if (!tool) return null;
    return getToolSeoContentBySlug(tool.slug);
}
function getToolSeoContentBySlug(slug) {
    const tool = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$tools$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tools"].find((item)=>item.slug === slug);
    if (!tool) return null;
    return {
        slug: tool.slug,
        category: tool.category,
        title: tool.title,
        metaTitle: `${tool.title} - Free Online ${tool.title}`,
        metaDescription: buildMetaDescription(tool),
        howTo: buildHowTo(tool),
        example: toolExamples[tool.slug],
        faqs: buildFaqs(tool),
        internalLinkSlugs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$tools$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tools"].filter((item)=>item.category === tool.category && item.slug !== tool.slug).slice(0, 3).map((item)=>item.slug)
    };
}
}),
"[project]/Desktop/tool website/components/ToolPageShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToolPageShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$toolSeo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/data/toolSeo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$tools$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/data/tools.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ToolPageShell({ title, description, badge = 'Interactive tool', stats = [], tips = [], children, aside }) {
    const seoContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$toolSeo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getToolSeoContentByTitle"])(title);
    const internalLinks = seoContent ? seoContent.internalLinkSlugs.map((slug)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$tools$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tools"].find((tool)=>tool.slug === slug)).filter((tool)=>Boolean(tool)) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_30%)]"
            }, void 0, false, {
                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container relative mx-auto px-4 py-6 sm:py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "animate-fade-up text-sm text-slate-500 dark:text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "transition hover:text-slate-900 dark:hover:text-slate-100",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "/",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/tools",
                                className: "transition hover:text-slate-900 dark:hover:text-slate-100",
                                children: "Tools"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "/ ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "panel tool-stage mt-4 p-6 sm:p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-8 xl:grid-cols-[1.35fr_0.85fr] xl:items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-fade-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:border-sky-900/60 dark:bg-sky-950/50 dark:text-sky-200",
                                                    children: badge
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl",
                                                    children: title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300",
                                                    children: description
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        stats.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid animate-fade-up gap-3 sm:grid-cols-3",
                                            style: {
                                                animationDelay: '120ms'
                                            },
                                            children: stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "interactive-panel rounded-3xl p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400",
                                                            children: stat.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100",
                                                            children: stat.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, stat.label, true, {
                                                    fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-fade-up",
                                            style: {
                                                animationDelay: '180ms'
                                            },
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "animate-slide-in space-y-4 rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-700 dark:bg-slate-950/90",
                                    children: aside ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300",
                                                        children: "Live workflow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100",
                                                        children: "Adjust, preview, refine."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300",
                                                        children: "Each control responds instantly so you can test scenarios, compare outputs, and fine-tune values without reloading the page."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: (tips.length > 0 ? tips : [
                                                    'Move the sliders to explore realistic ranges quickly.',
                                                    'Use the quick reset action to jump back to the default values.',
                                                    'Watch the result card for live updates while you tweak inputs.'
                                                ]).map((tip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "interactive-panel rounded-2xl p-4 text-sm leading-6 text-slate-700 dark:text-slate-300",
                                                        children: tip
                                                    }, tip, false, {
                                                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    seoContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-6 grid gap-6 pb-8 xl:grid-cols-[1.1fr_0.9fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel p-6 sm:p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-6 lg:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "interactive-panel rounded-[28px] p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-semibold text-slate-900 dark:text-slate-100",
                                                        children: "How To Use This Tool"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                        className: "mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300",
                                                        children: seoContent.howTo.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: step
                                                            }, step, false, {
                                                                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "interactive-panel rounded-[28px] p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-semibold text-slate-900 dark:text-slate-100",
                                                        children: seoContent.example.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300",
                                                        children: seoContent.example.body
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "mt-6 interactive-panel rounded-[28px] p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-slate-900 dark:text-slate-100",
                                                children: "Frequently Asked Questions"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 space-y-4",
                                                children: seoContent.faqs.map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-base font-semibold text-slate-900 dark:text-slate-100",
                                                                children: faq.question
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300",
                                                                children: faq.answer
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, faq.question, true, {
                                                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "panel p-6 sm:p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "interactive-panel rounded-[28px] p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-slate-900 dark:text-slate-100",
                                            children: "Related Internal Links"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/categories/${encodeURIComponent(seoContent.category)}`,
                                                    className: "block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200",
                                                    children: [
                                                        "Browse all ",
                                                        seoContent.category,
                                                        " tools"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/blog",
                                                    className: "block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200",
                                                    children: "Read related guides on the blog"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                internalLinks.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/tools/${tool.slug}`,
                                                        className: "block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200",
                                                        children: tool.title
                                                    }, tool.slug, false, {
                                                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tool website/components/ToolPageShell.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/tool website/app/tools/unit-converter/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UnitConverter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$components$2f$RangeField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/components/RangeField.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$components$2f$ToolPageShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/components/ToolPageShell.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const unitConfig = {
    length: {
        label: 'Length',
        units: [
            {
                label: 'Meters',
                value: 'm'
            },
            {
                label: 'Kilometers',
                value: 'km'
            },
            {
                label: 'Centimeters',
                value: 'cm'
            },
            {
                label: 'Inches',
                value: 'in'
            },
            {
                label: 'Feet',
                value: 'ft'
            }
        ],
        convert: (value, from, to)=>{
            const factors = {
                m: 1,
                km: 1000,
                cm: 0.01,
                in: 0.0254,
                ft: 0.3048
            };
            return value * factors[from] / factors[to];
        }
    },
    weight: {
        label: 'Weight',
        units: [
            {
                label: 'Kilograms',
                value: 'kg'
            },
            {
                label: 'Grams',
                value: 'g'
            },
            {
                label: 'Pounds',
                value: 'lb'
            },
            {
                label: 'Ounces',
                value: 'oz'
            }
        ],
        convert: (value, from, to)=>{
            const factors = {
                kg: 1,
                g: 0.001,
                lb: 0.45359237,
                oz: 0.0283495
            };
            return value * factors[from] / factors[to];
        }
    },
    temperature: {
        label: 'Temperature',
        units: [
            {
                label: 'Celsius',
                value: 'c'
            },
            {
                label: 'Fahrenheit',
                value: 'f'
            },
            {
                label: 'Kelvin',
                value: 'k'
            }
        ],
        convert: (value, from, to)=>{
            let celsius = value;
            if (from === 'f') {
                celsius = (value - 32) * 5 / 9;
            } else if (from === 'k') {
                celsius = value - 273.15;
            }
            if (to === 'f') {
                return celsius * 9 / 5 + 32;
            }
            if (to === 'k') {
                return celsius + 273.15;
            }
            return celsius;
        }
    }
};
function UnitConverter() {
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('length');
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(25);
    const [from, setFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('m');
    const [to, setTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ft');
    const activeCategory = unitConfig[category];
    const result = activeCategory.convert(value, from, to);
    function switchCategory(nextCategory) {
        const firstUnit = unitConfig[nextCategory].units[0].value;
        const secondUnit = unitConfig[nextCategory].units[1].value;
        setCategory(nextCategory);
        setFrom(firstUnit);
        setTo(secondUnit);
        setValue(nextCategory === 'temperature' ? 25 : 25);
    }
    function swapUnits() {
        setFrom(to);
        setTo(from);
    }
    function reset() {
        setCategory('length');
        setValue(25);
        setFrom('m');
        setTo('ft');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$components$2f$ToolPageShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: "Unit Converter",
        description: "Pick a measurement category, slide the value, and switch units instantly without mixing incompatible conversions.",
        badge: "Utility converter",
        stats: [
            {
                label: 'Category',
                value: activeCategory.label
            },
            {
                label: 'From',
                value: from.toUpperCase()
            },
            {
                label: 'To',
                value: to.toUpperCase()
            }
        ],
        tips: [
            'Categories keep the conversion clean so you do not accidentally compare meters to kilograms.',
            'Use swap to reverse the direction instantly when checking both sides of a conversion.',
            'Temperature conversions use the right formula instead of simple multipliers.'
        ],
        aside: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "result-card rounded-[28px] border border-slate-200/80 p-6 dark:border-slate-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400",
                            children: "Converted value"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                            lineNumber: 122,
                            columnNumber: 15
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-4xl font-bold text-slate-950 dark:text-slate-50",
                            children: result.toFixed(4)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300",
                            children: [
                                value,
                                " ",
                                from.toUpperCase(),
                                " equals ",
                                result.toFixed(4),
                                " ",
                                to.toUpperCase(),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                            lineNumber: 124,
                            columnNumber: 15
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                    lineNumber: 121,
                    columnNumber: 13
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                lineNumber: 120,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
            lineNumber: 119,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-3",
                    children: [
                        'length',
                        'weight',
                        'temperature'
                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>switchCategory(item),
                            className: `rounded-3xl border px-4 py-4 text-sm font-semibold transition ${category === item ? 'border-sky-500 bg-sky-50 text-sky-700 shadow-sm dark:border-sky-400 dark:bg-sky-950/40 dark:text-sky-200' : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200'}`,
                            children: unitConfig[item].label
                        }, item, false, {
                            fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$components$2f$RangeField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    label: "Value",
                    value: value,
                    onChange: setValue,
                    min: category === 'temperature' ? -100 : 0,
                    max: category === 'temperature' ? 500 : 1000,
                    step: category === 'temperature' ? 1 : 0.5,
                    valueFormatter: (current)=>`${current}`
                }, void 0, false, {
                    fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold text-slate-700 dark:text-slate-200",
                                    children: "From"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: from,
                                    onChange: (event)=>setFrom(event.target.value),
                                    className: "form-field mt-2",
                                    children: activeCategory.units.map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: unit.value,
                                            children: unit.label
                                        }, unit.value, false, {
                                            fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: swapUnits,
                            className: "btn-secondary h-12 px-6",
                            children: "Swap"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold text-slate-700 dark:text-slate-200",
                                    children: "To"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: to,
                                    onChange: (event)=>setTo(event.target.value),
                                    className: "form-field mt-2",
                                    children: activeCategory.units.map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: unit.value,
                                            children: unit.label
                                        }, unit.value, false, {
                                            fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: reset,
                    className: "btn-secondary w-full sm:w-auto",
                    children: "Reset defaults"
                }, void 0, false, {
                    fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/tool website/app/tools/unit-converter/page.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_tool%20website_6ae5954a._.js.map