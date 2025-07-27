'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

function PreviewAccordion() {
  return (
    <div className="mt-6 w-full space-y-2 px-3">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <div className="my-2 rounded-[7.85px] border border-[#3333331A] py-2 [&>div]:!bg-white">
            <AccordionTrigger>
              <div className="">
                <span className="text-[17.27px] font-[600]">
                  Section 1: Javascript Fundamentals
                </span>
                <div className="flex gap-[1.57px] text-[11.78px] font-[500]">
                  <span>6 lectures</span>
                  <img src="/coursesImages/dot.svg" alt="" />
                  <span>47 min</span>
                </div>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            Yes, all components are unstyled by default, and your wrapper
            applies your custom look.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <div className="my-2 rounded-[7.85px] border border-[#3333331A] py-2 [&>div]:!bg-white">
            <AccordionTrigger>
              <div className="">
                <span className="text-[17.27px] font-[600]">
                  Section 2: Advanced Javascript Concepts
                </span>
                <div className="flex gap-[1.57px] text-[11.78px] font-[500]">
                  <span>6 lectures</span>
                  <img src="/coursesImages/dot.svg" alt="" />
                  <span>47 min</span>
                </div>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            Yes, all components are unstyled by default, and your wrapper
            applies your custom look.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <div className="my-2 rounded-[7.85px] border border-[#3333331A] py-2 [&>div]:!bg-white">
            <AccordionTrigger>
              {' '}
              <div className="">
                <span className="text-[17.27px] font-[600]">
                  Section 3: Advanced Javascript Concepts
                </span>
                <div className="flex gap-[1.57px] text-[11.78px] font-[500]">
                  <span>6 lectures</span>
                  <img src="/coursesImages/dot.svg" alt="" />
                  <span>47 min</span>
                </div>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            It’s great for design systems — you can build consistent, accessible
            components on top of it.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <div className="my-2 rounded-[7.85px] border border-[#3333331A] py-2 [&>div]:!bg-white">
            <AccordionTrigger>
              <div className="">
                <span className="text-[17.27px] font-[600]">
                  Section 4: Front end Frameworks
                </span>
                <div className="flex gap-[1.57px] text-[11.78px] font-[500]">
                  <span>6 lectures</span>
                  <img src="/coursesImages/dot.svg" alt="" />
                  <span>47 min</span>
                </div>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            It’s great for design systems — you can build consistent, accessible
            components on top of it.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <div className="my-2 rounded-[7.85px] border border-[#3333331A] py-2 [&>div]:!bg-white">
            <AccordionTrigger>
              <div className="">
                <span className="text-[17.27px] font-[600]">
                  Section 5: State Management and Routing
                </span>
                <div className="flex gap-[1.57px] text-[11.78px] font-[500]">
                  <span>6 lectures</span>
                  <img src="/coursesImages/dot.svg" alt="" />
                  <span>47 min</span>
                </div>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            It’s great for design systems — you can build consistent, accessible
            components on top of it.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <div className="my-2 rounded-[7.85px] border border-[#3333331A] py-2 [&>div]:!bg-white">
            <AccordionTrigger>
              <div className="">
                <span className="text-[17.27px] font-[600]">
                  Section 6: Performance Optimization/Security
                </span>
                <div className="flex gap-[1.57px] text-[11.78px] font-[500]">
                  <span>6 lectures</span>
                  <img src="/coursesImages/dot.svg" alt="" />
                  <span>47 min</span>
                </div>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            It’s great for design systems — you can build consistent, accessible
            components on top of it.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default PreviewAccordion
