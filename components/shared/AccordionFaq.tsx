"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionFaq() {
  return (
    <Accordion type="single" collapsible className="max-w-4xl mx-auto px-8 pb-20">
      <div className="">
        <p className="text-xl text-gray-100 md:text-center md:text-2xl ">
        Frequently Asked Questions.
        </p>
      </div>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-white hover:no-underline">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="text-white">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-white hover:no-underline">
          Is it styled?
        </AccordionTrigger>
        <AccordionContent className="text-white">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-white hover:no-underline">
          Is it animated?
        </AccordionTrigger>
        <AccordionContent className="text-white ">
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
