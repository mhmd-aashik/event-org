"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accodianData } from "@/data/accodianData";

export default function AccordionFaq() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-4xl mx-auto px-8 pb-20"
    >
      <div className="">
        <p className="text-xl text-gray-100 md:text-center md:text-2xl ">
          Frequently Asked Questions.
        </p>
      </div>
      <AccordionTrigger value="item-1">
        {accodianData.map((item) => (
          <div key={item.id}>
            <AccordionTrigger className="text-white hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-white">
              {item.answer}
            </AccordionContent>
          </div>
        ))}
      </AccordionTrigger>
    </Accordion>
  );
}
