import { Layout } from "@components/Layout";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PageTitle } from "@components/Title";
import { SectionContainer } from "@components/Section";
import { motion } from "framer-motion";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";

export default function Contact() {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const [lastFormData, setLastFormData] = useState({});

    const sendEmail = (e) => {
        console.log("email");
        e.preventDefault();

        const formData = {
            user_name: form.current.user_name.value,
            user_phoneNumber: form.current.user_phoneNumber.value,
            user_email: form.current.user_email.value,
            message: form.current.message.value
        };

        if (JSON.stringify(formData) === JSON.stringify(lastFormData)) {
            alert("Message has already been sent");
            return;
        }

        emailjs
            .sendForm(
                "service_id9bxwt",
                "template_yxi1pyd",
                form.current,
                "5M7ABzKjZ9OqluGMU"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setMessageSent(true);
                    setTimeout(() => {
                        setMessageSent(false);
                    }, 2000);
                    setLastFormData(formData);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <Layout className="">
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="contactus" className="features">
                            <span className="max-w-[800px] md:w-[800px] flex flex-col justify-top pt-20">
                                <div className="w-full md:w-1/2 pb-20 sm:pb-0 sm:pl-20">
                                    <h1 className="text-3xl font-bold mb-4 sm:text-left text-cyan-500">
                                        Send us message
                                    </h1>

                                    <form
                                        ref={form}
                                        onSubmit={sendEmail}
                                        className="space-y-4 "
                                    >
                                        <div className="border rounded-md sm:w-[600px]">
                                            <input
                                                required
                                                name="user_name"
                                                className="p-3 flex w-full rounded-md text-black"
                                                type="text"
                                                placeholder="Enter your Name"
                                            />
                                        </div>
                                        <div className="border rounded-md sm:w-[600px]">
                                            <input
                                                required
                                                name="user_phoneNumber"
                                                className="p-3 flex w-full rounded-md text-black"
                                                type="number"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                        <div className="border rounded-md sm:w-[600px]">
                                            <input
                                                name="user_email"
                                                className="p-3 flex w-full rounded-md text-black"
                                                type="email"
                                                placeholder="Enter Email"
                                            />
                                        </div>
                                        <div className="sm:w-[600px]">
                                            <textarea
                                                required
                                                className="w-full border p-2 rounded-md text-black"
                                                rows="6"
                                                placeholder="Send us a message"
                                                name="message"
                                            ></textarea>
                                        </div>
                                        <div className="flex justify-center sm:justify-start">
                                            <motion.button
                                                whileHover={{ scale: 1.2 }}
                                                onHoverStart={(e) => {}}
                                                onHoverEnd={(e) => {}}
                                                whileTap={{ scale: 0.9 }}
                                                className={`bg-cyan-500 text-white py-2 px-4 rounded-md font-medium ${
                                                    messageSent
                                                        ? "animate-pulse"
                                                        : ""
                                                }`}
                                                type="submit"
                                                value="Send"
                                                disabled={messageSent}
                                            >
                                                {messageSent
                                                    ? "Message Sent"
                                                    : "Send Message"}
                                            </motion.button>
                                        </div>
                                    </form>
                                    {messageSent && (
                                        <div>
                                            <div className="bg-cyan-500 text-white font-bold rounded-md px-4 py-2">
                                                Thank you, we will get back to
                                                you soon.
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </span>{" "}
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
