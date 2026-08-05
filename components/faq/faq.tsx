"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does traceability work?",
    answer:
      "Every produce batch is assigned a unique digital record that tracks its journey from the farm to your doorstep, ensuring complete transparency.",
  },
  {
    question: "Do you work directly with farmers?",
    answer:
      "Yes. Farm2Plate partners directly with verified farmers, eliminating unnecessary middlemen and ensuring fair pricing.",
  },
  {
    question: "How is freshness maintained?",
    answer:
      "We optimize harvesting schedules, storage, and logistics to deliver produce within the shortest possible time after harvest.",
  },
  {
    question: "Where do you currently deliver?",
    answer:
      "We are expanding steadily across multiple regions. Check the Farm2Plate app to see if delivery is available in your location.",
  },
  {
    question: "Can farmers join Farm2Plate?",
    answer:
      "Absolutely. Farmers can register through our platform, complete verification, and start listing their produce.",
  },
  {
    question: "How are payments handled?",
    answer:
      "Payments are securely processed through trusted payment gateways with multiple online payment options.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-14">
          <p className="text-green-600 font-semibold">FAQ</p>

          <h2 className="text-4xl font-bold mt-2">
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground mt-4">
            Everything you need to know about Farm2Plate.
          </p>
        </div>

        <Accordion type="single" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={faq.question}>
              <AccordionTrigger className="text-lg font-medium">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground leading-7">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}