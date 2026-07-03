import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { faqs } from "../data/faq";
import SectionTitle from "./SectionTitle";

// Responsive FAQ accordion. One item open at a time.

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full">
      {/* Same outer max-width + padding as every other section, so this
          block's left/right edges line up with the product grids above it. */}
      <div className="container-page section-py">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about the product and billing."
        />

        <div className="mx-auto mt-8 flex max-w-[820px] flex-col gap-3 lg:mt-10">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[15px] font-medium text-gray-900">
                    {item.q}
                  </span>
                  <FiChevronDown
                    className={`shrink-0 text-gray-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-gray-500">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
