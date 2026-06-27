type FAQItem = {
  question: string
  answer: string
}

type FAQSectionProps = {
  items: FAQItem[]
}

export default function FAQSection({ items }: FAQSectionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.question} className="rounded border p-4 bg-slate-50 dark:bg-slate-900">
          <h3 className="font-semibold">{item.question}</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{item.answer}</p>
        </div>
      ))}
    </div>
  )
}
