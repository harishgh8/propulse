import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import { accordionData, faqData } from "@components/Accordion/accordionData";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import ScrollToTopBtn from "@components/ScrollToTopBtn";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="ProPulse Nursing- Propelling Your Nursing Career Forward.🚀"
                description="Propelling aspiring nurses to success through comprehensive and accelerated NCLEX preparation."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Features</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Why ProPulse?
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    At ProPulse Nursing Prep, we understand the
                                    importance of achieving success in your
                                    nursing career. Our tailored Next Generation
                                    NCLEX preparation program, coupled with
                                    personalized mentoring, is designed to
                                    propel you toward triumph. Here's what sets
                                    us apart:
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>More Features</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                What We Offer:{" "}
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Our comprehensive Next Generation NCLEX
                                    course is designed to propel you to the next
                                    level of your nursing journey. We are fully
                                    committed to mentor you to achieve this
                                    goal. We will work with you as a team
                                    towards this common goal.
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features4.png"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Live Sessions
                                        </CardHeader>
                                        <p>
                                            Get taught by experts and clear your
                                            doubts in real-time through live
                                            question and answer sessions
                                        </p>
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Practice Exams
                                        </CardHeader>
                                        <p>
                                            Simulate the real exam experience
                                            with our extensive collection of
                                            practice exams.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features3.png"
                                            alt="Progress Tracking image used."
                                        />

                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Study Resources
                                        </CardHeader>
                                        <p>
                                            Access a wealth of study materials,
                                            including notes, flashcards, and
                                            more.
                                        </p>
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Mentoring
                                        </CardHeader>
                                        <p>
                                            Receive personalized mentoring from
                                            experienced professionals who have
                                            conquered the Next Generation NCLEX
                                            journey.
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonials</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                This is what our successful achievers say about
                                us
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Got some burning questions about NutriTrack?{" "}
                                <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion data={faqData} />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
                <ScrollToTopBtn />
            </div>
        </Layout>
    );
}
