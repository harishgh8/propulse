import { Layout } from "@components/Layout";
import { SectionContainer } from "@components/Section";
import { Button, ButtonGroup } from "@components/Button";
import Link from "next/link";
import Image from "next/image";

export default function Enroll() {
    // Example blog posts data

    return (
        <Layout className="">
            <div className="main-wrapper  relative z-10 pb-20 pt-20 mt-10 max-w-4xl mx-auto">
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    <SectionContainer id="blog" className="rounded-3xl p-4">
                        <div className="border-b drop-shadow-xl flex flex-col gap-10 sm:flex-row items-center">
                            <div>
                                <Image
                                    src="/nextGenPlan.png"
                                    alt="enroll"
                                    width="400"
                                    height="600"
                                    className="w-full h-auto mb-2 pt-2 rounded-md"
                                />
                            </div>
                            <ButtonGroup className="hidden md:flex justify-center mt-2 ml-4">
                                {" "}
                                {/* Added ml-4 for margin */}
                                <Link href="https://buy.stripe.com/test_9AQ5mY6vw3fj6oo001">
                                    <div className="btn btn--secondary text-white-50">
                                        Enroll now
                                    </div>
                                </Link>
                            </ButtonGroup>
                        </div>
                    </SectionContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
