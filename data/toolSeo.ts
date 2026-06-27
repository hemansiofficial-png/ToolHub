import { tools, type ToolData } from './tools'

type ToolExample = {
  title: string
  body: string
}

export type ToolSeoContent = {
  slug: string
  category: string
  title: string
  metaTitle: string
  metaDescription: string
  howTo: string[]
  example: ToolExample
  faqs: Array<{
    question: string
    answer: string
  }>
  internalLinkSlugs: string[]
}

const toolExamples: Record<string, ToolExample> = {
  'income-tax-calculator': {
    title: 'Example tax comparison',
    body: 'Enter an annual income such as Rs 12,00,000, review deductions if applicable, and compare the estimated old and new regime tax side by side before making a planning decision.',
  },
  'sip-calculator': {
    title: 'Example SIP projection',
    body: 'A monthly SIP of Rs 10,000 for 15 years at an assumed 12% annual return helps illustrate how invested capital and estimated gains can grow over time.',
  },
  'step-up-sip-calculator': {
    title: 'Example step-up SIP scenario',
    body: 'Start with Rs 5,000 per month and increase the amount by 10% every year to compare the final corpus against a flat SIP contribution.',
  },
  'emi-calculator': {
    title: 'Example EMI calculation',
    body: 'For a Rs 15,00,000 loan at 8.5% annual interest over 20 years, the calculator previews the monthly EMI, total repayment, and total interest outgo.',
  },
  'fd-calculator': {
    title: 'Example FD maturity estimate',
    body: 'Try a deposit of Rs 2,00,000 at 7% annual interest for 5 years to see the projected maturity amount and total interest earned.',
  },
  'cagr-calculator': {
    title: 'Example CAGR use case',
    body: 'Compare an investment growing from Rs 1,00,000 to Rs 1,80,000 over 5 years to understand the average annualized growth rate.',
  },
  'stock-average-calculator': {
    title: 'Example stock averaging',
    body: 'If you bought 10 shares at Rs 500 and 15 more at Rs 420, the calculator shows the revised average cost per share.',
  },
  'lumpsum-calculator': {
    title: 'Example lumpsum growth estimate',
    body: 'Project how a one-time investment of Rs 3,00,000 could grow over 10 years using different expected annual return assumptions.',
  },
  'gst-calculator': {
    title: 'Example GST split',
    body: 'Enter Rs 10,000 and a GST rate of 18% to see the tax amount, total amount, and a quick CGST and SGST split estimate.',
  },
  'pdf-merge': {
    title: 'Example merge workflow',
    body: 'Upload three invoices or report PDFs, keep them in the selected order, and combine them into one downloadable PDF in the browser.',
  },
  'pdf-split': {
    title: 'Example split workflow',
    body: 'Upload a PDF, choose the page range you want to extract, and create a separate PDF containing only those selected pages.',
  },
  'image-to-pdf': {
    title: 'Example image to PDF conversion',
    body: 'Add scanned receipts or images, arrange them in order, and export them as a single PDF document for sharing or storage.',
  },
  'pdf-to-image': {
    title: 'Example PDF to image conversion',
    body: 'Upload a PDF brochure or document, render each page into a PNG image, and then download the pages individually for sharing or design review.',
  },
  'pdf-compressor': {
    title: 'Example PDF optimization',
    body: 'Use the tool on a large PDF before email or upload so you can reduce file size while keeping the document readable.',
  },
  'json-formatter': {
    title: 'Example JSON formatting',
    body: 'Paste a minified JSON payload from an API response to instantly prettify it and check whether the structure is valid.',
  },
  'qr-code-generator': {
    title: 'Example QR code generation',
    body: 'Enter a website URL, event page, or payment link to generate a QR code that can be downloaded and shared quickly.',
  },
  'barcode-generator': {
    title: 'Example barcode generation',
    body: 'Type a numeric product code such as 123456789012 to generate a barcode image for packaging, labels, or inventory use.',
  },
  'image-compressor': {
    title: 'Example image compression',
    body: 'Upload a large JPG or PNG, reduce quality or size settings, and download a lighter version for web or email sharing.',
  },
  'image-resizer': {
    title: 'Example image resizing',
    body: 'Resize a photo for a profile picture, marketplace listing, or blog image while keeping the aspect ratio under control.',
  },
  'word-counter': {
    title: 'Example word count check',
    body: 'Paste a draft article or caption to measure total words, characters, sentence count, and estimated reading time in one place.',
  },
  'character-counter': {
    title: 'Example character limit check',
    body: 'Use the live counter to keep a social media post, ad headline, or app store description within a strict character limit.',
  },
  'case-converter': {
    title: 'Example case conversion',
    body: 'Paste a variable name, heading, or paragraph and switch it into upper, lower, title, camel, snake, or kebab case.',
  },
  'age-calculator': {
    title: 'Example age calculation',
    body: 'Enter a birth date to calculate the current age in years and quickly check age-based eligibility or milestone dates.',
  },
  'password-generator': {
    title: 'Example password creation',
    body: 'Choose a longer length and include symbols to generate a stronger password for personal accounts or team credentials.',
  },
  'bmi-calculator': {
    title: 'Example BMI estimate',
    body: 'Enter height and weight values to estimate BMI and understand the current range before discussing health goals with a professional.',
  },
  'unit-converter': {
    title: 'Example unit conversion',
    body: 'Convert values such as kilometers to miles, kilograms to pounds, or Celsius to Fahrenheit from one screen.',
  },
}

function buildMetaDescription(tool: ToolData) {
  return `${tool.description} Use this free online ${tool.title.toLowerCase()} on ToolHub India with FAQs, step-by-step guidance, examples, and related tool links.`
}

function buildHowTo(tool: ToolData) {
  const lowerTitle = tool.title.toLowerCase()

  if (tool.category === 'Finance' || lowerTitle.includes('calculator')) {
    return [
      `Enter the values required by the ${lowerTitle}, such as amount, rate, duration, or other key inputs.`,
      'Adjust sliders or fields to compare different scenarios and review the live result cards.',
      'Use the output as a planning estimate, then compare it with related tools for a fuller decision.',
    ]
  }

  if (tool.category === 'PDF' || tool.category === 'Image') {
    return [
      `Upload or enter the files needed for the ${lowerTitle}.`,
      'Adjust any available options such as order, size, quality, or dimensions.',
      'Review the preview or status message and then download the processed result.',
    ]
  }

  if (tool.category === 'Text' || tool.category === 'Developer') {
    return [
      `Paste or type your content into the ${lowerTitle}.`,
      'Choose the format or view you want and check the live output.',
      'Copy the result or continue to a related writing or formatting tool if needed.',
    ]
  }

  return [
    `Start with the main input required by the ${lowerTitle}.`,
    'Review the live result as you change values or options.',
    'Use the supporting notes, FAQ, and related links to double-check your next step.',
  ]
}

function buildFaqs(tool: ToolData): ToolSeoContent['faqs'] {
  const lowerTitle = tool.title.toLowerCase()

  return [
    {
      question: `How do I use the ${lowerTitle}?`,
      answer: 'Open the tool, enter the required inputs, and review the live result section. The how-to steps and example on this page show the fastest way to get a useful output.',
    },
    {
      question: `Is the ${lowerTitle} free to use?`,
      answer: `Yes. This ${lowerTitle} is designed as a free online utility on ToolHub India. You can also use the related internal links to compare other tools in the same category.`,
    },
  ]
}

export function getToolSeoContentByTitle(title: string) {
  const tool = tools.find((item) => item.title === title)
  if (!tool) return null

  return getToolSeoContentBySlug(tool.slug)
}

export function getToolSeoContentBySlug(slug: string) {
  const tool = tools.find((item) => item.slug === slug)
  if (!tool) return null

  return {
    slug: tool.slug,
    category: tool.category,
    title: tool.title,
    metaTitle: `${tool.title} - Free Online ${tool.title}`,
    metaDescription: buildMetaDescription(tool),
    howTo: buildHowTo(tool),
    example: toolExamples[tool.slug],
    faqs: buildFaqs(tool),
    internalLinkSlugs: tools
      .filter((item) => item.category === tool.category && item.slug !== tool.slug)
      .slice(0, 3)
      .map((item) => item.slug),
  }
}
