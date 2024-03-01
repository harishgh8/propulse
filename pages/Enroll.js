import { Layout } from "@components/Layout";
import { SectionContainer } from "@components/Section";
import { Button, ButtonGroup } from "@components/Button";

export default function Enroll() {
    // Example blog posts data

    return (
        <Layout className="">
            <div className="main-wrapper  relative z-10 pb-20 pt-20 mt-10 max-w-4xl mx-auto">
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    <SectionContainer id="blog" className="rounded-3xl p-4">
                        <div className="border-b drop-shadow-xl flex flex-col items-center">
                            <div>
                                <img
                                    src="nextGenPlan.png"
                                    alt="enroll"
                                    className="w-full h-auto mb-2 pt-2 rounded-md"
                                />
                            </div>
                        </div>
                        <ButtonGroup alignment="center">
                            <a
                                role="button"
                                href="https://buy.stripe.com/test_9AQ5mY6vw3fj6oo001"
                                className="btn btn--secondary"
                            >
                                Enroll now
                            </a>
                        </ButtonGroup>
                    </SectionContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
