import { v4 as uuid } from "uuid";
export const faqData = [
    {
        id: uuid(),
        isOpen: false,
        title: "What resources are available to help me prepare for the Next Generation NCLEX as an internationally educated nurse?",
        content:
            "There are various resources available to assist you in preparing for the NGN exam. You can explore online review courses, textbooks, practice exams, and study groups tailored specifically for internationally educated nurses. Additionally, consider seeking guidance from experienced educators or mentors who can provide valuable insights and support throughout your preparation journey."
    },

    {
        id: uuid(),
        isOpen: false,
        title: "How can I overcome language barriers while preparing for the NCLEX exam?",
        content:
            "Overcoming language barriers requires dedication and consistent effort. Consider enrolling in English language courses, practicing daily through reading, writing, listening, and speaking exercises, and utilizing resources specifically designed to enhance language proficiency for healthcare professionals. Additionally, seek opportunities for immersion in English-speaking environments to further strengthen your skills."
    },

    {
        id: uuid(),
        isOpen: false,
        title: "What are the benefits of passing the NCLEX exam as an internationally educated nurse?",
        content:
            "Passing the NCLEX exam opens doors to a wide range of opportunities in the nursing profession. It grants you licensure as a registered nurse in the United States, allowing you to pursue diverse career paths, access higher earning potential, and make a meaningful impact on patient care. Furthermore, it enhances your prospects for international nursing practice, enabling you to explore opportunities worldwide and contribute to global healthcare initiatives."
    },

    {
        id: uuid(),
        isOpen: false,
        title: "How can I stay motivated and focused while preparing for the Next Generation NCLEX?",
        content:
            "Staying motivated and focused during NCLEX preparation requires setting clear goals, creating a structured study plan, and maintaining a positive mindset. Break down your study sessions into manageable tasks, celebrate small victories along the way, and surround yourself with supportive peers or mentors who can encourage you during challenging times. Remember to prioritize self-care and take breaks when needed to prevent burnout."
    },

    {
        id: uuid(),
        isOpen: false,
        title: "What are some tips for navigating the differences between nursing education in my home country and the United States?",
        content:
            "Navigating the differences between nursing education in your home country and the United States requires flexibility, adaptability, and a willingness to learn. Familiarize yourself with the NCLEX test plan and content guidelines to understand the expectations for licensure in the U.S. Consider enrolling in bridging programs or refresher courses designed for internationally educated nurses to fill any knowledge gaps and prepare effectively for the exam."
    }
];

export const blogPostsData = [
    {
        id: uuid(),
        title: "All about next gen NCLEX!",
        date: "Feb 15, 2024",
        isOpen: true,
        date: "February 10, 2024",
        image: "/allAboutNCLEX.svg"
    },
    {
        id: uuid(),
        title: "How different is next gen NCLEX!",
        date: "Feb 15, 2024",
        isOpen: true,
        date: "February 10, 2024",
        image: "/blogpost1.svg"
    }
];
