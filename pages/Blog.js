import { useState } from "react";
import { Layout } from "@components/Layout";
import { PageTitle } from "@components/Title";
import { SectionContainer } from "@components/Section";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { Accordion } from "@components/Accordion";
import { blogPostsData } from "@components/Accordion/accordionData";
import Image from "next/image";

const BlogPost = ({ title, date, content, image, isLast }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
            <div
                className={`border-b drop-shadow-xl  ${isLast ? "" : "mb-4"} `}
            >
                <div className="cursor-pointer" onClick={toggleCollapse}>
                    <h2 className="text-xxl text-gray-800 font-semibold pt-5  pl-2 m-0">
                        {title}
                    </h2>
                    <p className="text-sm text-gray-500 pt-1 pl-2">{date}</p>
                </div>

                <div>
                    {image && (
                        <Image
                            src={image}
                            alt={title}
                            width="600"
                            height="800"
                            className="w-full h-auto mb-2 pt-2 rounded-md"
                        />
                    )}
                    <p className="mt-1">{content}</p>
                </div>
            </div>
        </MotionBTTContainer>
    );
};

export default function Blog() {
    // Example blog posts data

    return (
        <Layout className="">
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 mt-10 max-w-4xl mx-auto">
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="blog" className="rounded-3xl p-4">
                            {blogPostsData.map((post, index) => (
                                <BlogPost
                                    key={index}
                                    title={post.title}
                                    date={post.date}
                                    content={post.content}
                                    image={post.image}
                                />
                            ))}
                        </SectionContainer>
                        {/* <Accordion data={blogPostsData} /> */}
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
