import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQS({ faqs }) {
    return (
        <div className="max-w-4xl mx-auto mt-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-medium">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-400">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}