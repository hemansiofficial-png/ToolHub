module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/tool website/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/tool website/app/layout.tsx [app-rsc] (ecmascript)"));
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
"[project]/Desktop/tool website/utils/seo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCanonical",
    ()=>buildCanonical,
    "jsonLdForArticle",
    ()=>jsonLdForArticle,
    "jsonLdForBreadcrumbs",
    ()=>jsonLdForBreadcrumbs,
    "jsonLdForTool",
    ()=>jsonLdForTool
]);
function buildCanonical(host, path) {
    return `${host.replace(/\/$/, '')}${path.startsWith('/') ? path : '/' + path}`;
}
function jsonLdForTool({ title, description, url }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description,
        url
    };
}
function jsonLdForArticle({ title, description, url, publishedAt, updatedAt, author }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        author: {
            '@type': 'Organization',
            name: author
        },
        publisher: {
            '@type': 'Organization',
            name: author
        },
        datePublished: publishedAt,
        dateModified: updatedAt,
        mainEntityOfPage: url,
        url
    };
}
function jsonLdForBreadcrumbs(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index)=>({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: item.url
            }))
    };
}
}),
"[project]/Desktop/tool website/utils/site.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAdSensePublisherId",
    ()=>getAdSensePublisherId,
    "getContactEmail",
    ()=>getContactEmail,
    "getSiteUrl",
    ()=>getSiteUrl,
    "hasConfiguredContactEmail",
    ()=>hasConfiguredContactEmail,
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: 'ToolHub India',
    title: 'ToolHub India - Free Online Tools and Calculators',
    description: 'Free online tools, calculators, and practical guides for finance, documents, images, text, and daily productivity.',
    defaultSiteUrl: 'https://your-domain.com'
};
function normalizeUrl(url) {
    return url.trim().replace(/\/$/, '');
}
function getSiteUrl() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    return normalizeUrl(siteUrl || siteConfig.defaultSiteUrl);
}
function getContactEmail() {
    return process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || '';
}
function hasConfiguredContactEmail() {
    return Boolean(getContactEmail());
}
function getAdSensePublisherId() {
    return process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID?.trim() || '';
}
}),
"[project]/Desktop/tool website/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Post,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/script.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/data/blog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$components$2f$PageSeo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/components/PageSeo.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$utils$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/utils/seo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$utils$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/tool website/utils/site.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function toAnchorId(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posts"].find((item)=>item.slug === slug);
    if (!post) return {
        title: 'Not found'
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$components$2f$PageSeo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMetadata"])({
        title: `${post.title} - ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$utils$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteConfig"].name}`,
        description: post.description,
        url: `/blog/${post.slug}`,
        keywords: post.keywords,
        type: 'article',
        publishedTime: post.publishedAt,
        modifiedTime: post.updatedAt
    });
}
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posts"].map((post)=>({
            slug: post.slug
        }));
}
async function Post({ params }) {
    const { slug } = await params;
    const post = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posts"].find((item)=>item.slug === slug);
    if (!post) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const relatedPosts = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$data$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posts"].filter((item)=>item.slug !== post.slug).slice(0, 2);
    const takeaways = post.sections.flatMap((section)=>section.bullets || []).slice(0, 4);
    const siteUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$utils$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteUrl"])();
    const articleUrl = `${siteUrl}/blog/${post.slug}`;
    const dateFormatter = new Intl.DateTimeFormat('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const articleLd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$utils$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsonLdForArticle"])({
        title: post.title,
        description: post.description,
        url: articleUrl,
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt,
        author: post.author
    });
    const breadcrumbLd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$utils$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsonLdForBreadcrumbs"])([
        {
            name: 'Home',
            url: siteUrl
        },
        {
            name: 'Blog',
            url: `${siteUrl}/blog`
        },
        {
            name: post.title,
            url: articleUrl
        }
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto px-4 py-6 sm:py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                id: `article-ld-${post.slug}`,
                type: "application/ld+json",
                children: JSON.stringify(articleLd)
            }, void 0, false, {
                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                id: `breadcrumb-ld-${post.slug}`,
                type: "application/ld+json",
                children: JSON.stringify(breadcrumbLd)
            }, void 0, false, {
                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel p-6 sm:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/blog",
                                        className: "text-sm font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200",
                                        children: "Back to blog"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: post.category
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: post.readingTime
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Updated ",
                                                    dateFormatter.format(new Date(post.updatedAt))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl",
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300",
                                        children: post.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "By ",
                                                    post.author
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Published ",
                                                    dateFormatter.format(new Date(post.publishedAt))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "interactive-panel rounded-[28px] p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-slate-900 dark:text-slate-100",
                                        children: "On this page"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300",
                                        children: post.sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `#${toAnchorId(section.heading)}`,
                                                    className: "transition hover:text-sky-700 dark:hover:text-sky-300",
                                                    children: section.heading
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this)
                                            }, section.heading, false, {
                                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "interactive-panel rounded-[28px] p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base leading-8 text-slate-700 dark:text-slate-200",
                                            children: post.intro
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    post.sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            id: toAnchorId(section.heading),
                                            className: "interactive-panel rounded-[28px] p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-semibold text-slate-950 dark:text-slate-50",
                                                    children: section.heading
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300",
                                                    children: section.paragraphs.map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: paragraph
                                                        }, paragraph, false, {
                                                            fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this),
                                                section.bullets?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "mt-4 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300",
                                                    children: section.bullets.map((bullet)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900",
                                                            children: bullet
                                                        }, bullet, false, {
                                                            fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this) : null
                                            ]
                                        }, section.heading, true, {
                                            fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "interactive-panel rounded-[28px] p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-semibold text-slate-950 dark:text-slate-50",
                                                children: "Frequently asked questions"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 space-y-4",
                                                children: post.faqs.map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-base font-semibold text-slate-900 dark:text-slate-100",
                                                                children: faq.question
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300",
                                                                children: faq.answer
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, faq.question, true, {
                                                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "interactive-panel rounded-[28px] p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-slate-900 dark:text-slate-100",
                                                children: "Key takeaways"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300",
                                                children: takeaways.map((takeaway)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: takeaway
                                                    }, takeaway, false, {
                                                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "interactive-panel rounded-[28px] p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-slate-900 dark:text-slate-100",
                                                children: "Related reading"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 space-y-3",
                                                children: relatedPosts.map((relatedPost)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$tool__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/blog/${relatedPost.slug}`,
                                                        className: "block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-200",
                                                        children: relatedPost.title
                                                    }, relatedPost.slug, false, {
                                                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/tool website/app/blog/[slug]/page.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/tool website/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/tool website/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fb078b2b._.js.map