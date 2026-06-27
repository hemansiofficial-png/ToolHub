module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/tool website/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/tool website/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/tool website/components/PageSeo.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMetadata",
    ()=>buildMetadata
]);
function buildMetadata({ title, description, image, url, keywords, type = 'website', publishedTime, modifiedTime }) {
    return {
        title,
        description,
        keywords,
        alternates: url ? {
            canonical: url
        } : undefined,
        openGraph: {
            title,
            description,
            images: image ? [
                {
                    url: image
                }
            ] : undefined,
            url,
            type,
            ...type === 'article' ? {
                publishedTime,
                modifiedTime
            } : {}
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description
        }
    };
}
}),
"[project]/Desktop/tool website/data/blog.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "posts",
    ()=>posts
]);
const posts = [
    {
        slug: 'sip-investing-guide',
        title: 'SIP Investing Guide for Beginners',
        category: 'Finance',
        description: 'A practical introduction to SIP investing, how compounding works, and what to review before starting.',
        intro: 'Systematic Investment Plans help investors spread contributions across time, reduce timing pressure, and build discipline. The real advantage is consistency: even modest monthly amounts can grow meaningfully when they stay invested through market cycles.',
        author: 'ToolHub India Editorial Team',
        publishedAt: '2026-06-10',
        updatedAt: '2026-06-22',
        readingTime: '6 min read',
        keywords: [
            'sip investing',
            'mutual fund sip',
            'beginner investing',
            'compound growth'
        ],
        sections: [
            {
                heading: 'What a SIP actually does',
                paragraphs: [
                    'A SIP is a contribution method, not a separate product. You pick a mutual fund and invest a fixed amount on a regular schedule, usually every month.',
                    'Because purchases happen across many dates, your average cost gets smoothed over time. That does not remove market risk, but it can make long-term investing easier to stick with.'
                ],
                bullets: [
                    'Helps build investing discipline',
                    'Reduces pressure to guess the perfect entry point',
                    'Works well for salaried and recurring-income households'
                ]
            },
            {
                heading: 'How compounding supports long-term results',
                paragraphs: [
                    'Compounding matters most when contributions stay consistent and returns are allowed to remain invested. The earlier you begin, the longer your capital has to work.',
                    'Small delays can have a larger impact than many beginners expect. Increasing a SIP gradually over time can be just as powerful as chasing higher returns.'
                ],
                bullets: [
                    'Time in the market often matters more than timing the market',
                    'Annual step-ups can accelerate corpus growth',
                    'Stopping and restarting too often weakens the compounding effect'
                ]
            },
            {
                heading: 'What to review before starting a SIP',
                paragraphs: [
                    'Match the fund category to your goal, timeline, and comfort with volatility. Emergency funds and short-term needs should usually stay separate from equity SIPs.',
                    'Fees, taxation, and exit rules also matter. A calculator can help estimate ranges, but the actual outcome depends on returns, duration, and staying invested.'
                ],
                bullets: [
                    'Set a goal and expected timeline first',
                    'Choose a contribution amount you can sustain',
                    'Review performance and allocation periodically, not emotionally'
                ]
            }
        ],
        faqs: [
            {
                question: 'Is a SIP guaranteed to make money?',
                answer: 'No. A SIP reduces timing pressure, but the underlying investment can still rise or fall. Returns depend on the fund, market conditions, and time horizon.'
            },
            {
                question: 'Should I stop my SIP when markets fall?',
                answer: 'Not automatically. For long-term goals, market declines can mean future purchases happen at lower prices. Decisions should be tied to your goal and risk plan, not short-term fear.'
            }
        ]
    },
    {
        slug: 'nextjs-seo-checklist',
        title: 'Next.js SEO Checklist for Tool Websites',
        category: 'Technology',
        description: 'The core metadata, content, and internal-linking checks that help utility sites earn search visibility.',
        intro: 'Tool websites often focus on functionality first and forget the signals search engines and reviewers expect. A good SEO baseline is not just metadata - it is also content depth, internal linking, crawlable routes, and trust-building pages.',
        author: 'ToolHub India Editorial Team',
        publishedAt: '2026-06-14',
        updatedAt: '2026-06-23',
        readingTime: '5 min read',
        keywords: [
            'next.js seo',
            'tool website seo',
            'structured data',
            'metadata checklist'
        ],
        sections: [
            {
                heading: 'Start with page intent, not just keywords',
                paragraphs: [
                    'Each tool page should clearly explain what the tool does, who it is for, and what output a visitor can expect. Thin pages struggle even when the tool itself works well.',
                    'Blog pages, FAQs, and category summaries give you room to answer surrounding questions that users naturally search for.'
                ],
                bullets: [
                    'Add a unique title and description for every page',
                    'Write supporting copy that explains use cases and limitations',
                    'Use clean headings so content is easy to scan'
                ]
            },
            {
                heading: 'Make metadata and structured data consistent',
                paragraphs: [
                    'Canonical URLs, Open Graph tags, and schema markup should all point to the same page identity. Inconsistent signals make indexing and sharing harder than they need to be.',
                    'Structured data is especially useful on tool and article pages because it helps communicate page purpose more directly.'
                ],
                bullets: [
                    'Set canonical URLs from a real production domain',
                    'Use article schema for blogs and webpage schema for tools',
                    'Keep sitemap and robots files current'
                ]
            },
            {
                heading: 'Support discovery with internal links and performance',
                paragraphs: [
                    'Visitors should be able to move from a homepage to categories, tools, blog posts, and policy pages without friction. That same structure helps crawlers understand the site.',
                    'Performance remains a quality signal too. Lightweight pages, clear layouts, and fewer dead ends improve both indexing and user satisfaction.'
                ],
                bullets: [
                    'Link related tools and related blog posts',
                    'Keep important pages accessible from the header or footer',
                    'Avoid placeholder copy on production routes'
                ]
            }
        ],
        faqs: [
            {
                question: 'Do utility websites need blog content?',
                answer: 'They do not need a blog purely for volume, but they benefit from explanatory content that answers adjacent user questions and shows editorial depth.'
            },
            {
                question: 'Is structured data enough to rank better?',
                answer: 'No. Structured data helps clarify page meaning, but rankings still depend on content quality, intent match, performance, and overall site trust.'
            }
        ]
    },
    {
        slug: 'gst-calculator-common-mistakes',
        title: 'Common GST Calculation Mistakes Small Businesses Make',
        category: 'Business',
        description: 'A short guide to avoiding avoidable GST input errors when pricing, billing, and checking totals.',
        intro: 'GST mistakes often happen in simple places: quoting tax-inclusive prices incorrectly, applying the wrong rate, or mixing up taxable value and invoice total. A calculator helps, but the inputs still need care.',
        author: 'ToolHub India Editorial Team',
        publishedAt: '2026-06-18',
        updatedAt: '2026-06-24',
        readingTime: '4 min read',
        keywords: [
            'gst calculator',
            'gst mistakes',
            'tax inclusive price',
            'small business billing'
        ],
        sections: [
            {
                heading: 'Confusing inclusive and exclusive pricing',
                paragraphs: [
                    'One of the most common errors is adding GST again to a price that already includes it. That leads to overcharging, invoice mismatches, and awkward corrections later.',
                    'A clear workflow helps: first decide whether the quoted amount is tax inclusive or tax exclusive, then use the correct calculation path consistently.'
                ],
                bullets: [
                    'Mark price sheets clearly as inclusive or exclusive',
                    'Double-check invoice templates before sharing them',
                    'Keep the tax component visible for reconciliation'
                ]
            },
            {
                heading: 'Using the wrong rate or category',
                paragraphs: [
                    'The right math still produces the wrong answer if the rate itself is incorrect. Teams often copy old invoice settings forward without checking if the product or service category changed.',
                    'Whenever classification is unclear, confirm it before billing at scale instead of patching multiple invoices later.'
                ],
                bullets: [
                    'Review tax settings when adding new offerings',
                    'Avoid copying old rates blindly',
                    'Keep billing rules documented for your team'
                ]
            },
            {
                heading: 'Treating calculator output as final advice',
                paragraphs: [
                    'Online calculators are useful for estimation and validation, but they do not replace accounting review or compliance judgment. Business context still matters.',
                    'Use a calculator to speed up work, then verify figures against your invoicing process, software settings, and professional guidance when needed.'
                ],
                bullets: [
                    'Use calculators as an aid, not a substitute for review',
                    'Keep records of how totals were derived',
                    'Escalate unusual cases before issuing the invoice'
                ]
            }
        ],
        faqs: [
            {
                question: 'Can I rely on a GST calculator alone for compliance?',
                answer: 'No. It is useful for fast estimates and checks, but compliance depends on the correct classification, rate, and business context.'
            },
            {
                question: 'Why do invoice totals differ from my manual math?',
                answer: 'Differences usually come from inclusive versus exclusive pricing, rounding rules, or a mismatch in the tax rate used.'
            }
        ]
    }
];
}),
"[project]/Desktop/tool website/app/blog/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Blog,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$components$2f$PageSeo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/components/PageSeo.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/data/blog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$utils$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/utils/site.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$components$2f$PageSeo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMetadata"])({
    title: `Blog - ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$utils$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name}`,
    description: 'Read practical guides on finance, productivity, SEO, and online tools.',
    url: '/blog',
    keywords: [
        'tool blog',
        'finance guides',
        'seo tips',
        'productivity articles'
    ]
});
function Blog() {
    const dateFormatter = new Intl.DateTimeFormat('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto px-4 py-6 sm:py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "panel p-6 sm:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-800 dark:bg-amber-950/40 dark:text-amber-200",
                                    children: "Editorial"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl",
                                    children: "ToolHub India Blog"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300",
                                    children: "Practical articles that support the tools on this site, explain assumptions clearly, and help visitors make better decisions."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "interactive-panel rounded-[28px] p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-slate-900 dark:text-slate-100",
                                    children: "What you will find here"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Clear explainers that match the calculators and utilities on the site."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Actionable checklists instead of thin keyword-stuffed posts."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Internal links to tools, policies, and related guides."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 grid gap-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posts"].map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "interactive-panel rounded-[28px] p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: post.category
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: post.readingTime
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: dateFormatter.format(new Date(post.updatedAt))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-4 text-2xl font-semibold text-slate-950 dark:text-slate-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/blog/${post.slug}`,
                                        className: "transition hover:text-sky-700 dark:hover:text-sky-300",
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300",
                                    children: post.description
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400",
                                    children: post.intro
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/blog/${post.slug}`,
                                        className: "inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200",
                                        children: "Read article"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, post.slug, true, {
                            fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/tool website/app/blog/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/tool website/app/blog/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/tool website/app/blog/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08c636e2._.js.map