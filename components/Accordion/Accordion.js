import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";
import Image from "next/image";

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = ({ data }) => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {data.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < data.length - 1,
                            [accordionItemType.bottom]:
                                index === data.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading  mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center text-xxl rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className={clsx(
                                    "ml-auto h-8 w-8 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none",
                                    {
                                        "rotate-[-180deg]":
                                            activeAccordion === accordionItem.id
                                    }
                                )}
                            />
                        </button>
                    </h2>

                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id,
                                "!visibility block":
                                    activeAccordion === accordionItem.id
                            }
                        )}
                    >
                        {accordionItem.image && (
                            <div>
                                <Image
                                    src={accordionItem.image}
                                    alt={accordionItem.title}
                                    width="full"
                                    height="auto"
                                    className="w-full h-auto mb-2 pt-2 rounded-md"
                                />
                            </div>
                        )}
                        <p className="text-gray-600">{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
