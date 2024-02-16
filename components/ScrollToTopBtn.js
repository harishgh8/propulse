import { UpOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";

function ScrollToTopBtn() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        // Check if the user has reached the bottom of the page
        const isAtBottom =
            window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if (isAtBottom) {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            className={`${
                isVisible ? "block" : "hidden"
            } fixed bottom-20 right-5 bg-orange-300 text-white rounded-full p-5 cursor-pointer transition-opacity hover:bg-black opacity-50 sm:opacity-50 flex items-center justify-center z-10`}
            onClick={scrollToTop}
        >
            <UpOutlined />
        </button>
    );
}

export default ScrollToTopBtn;
