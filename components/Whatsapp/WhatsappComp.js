import React from "react";
import dynamic from "next/dynamic";

const DynamicWhatsAppWidget = dynamic(
    () => import("react-whatsapp-chat-widget"),
    {
        ssr: false // Disable SSR for this component
    }
);
import "react-whatsapp-chat-widget/index.css";

export const WhatsappComp = () => {
    return (
        <DynamicWhatsAppWidget
            phoneNo="+917358184356"
            position="right"
            widgetWidth="300px"
            widgetWidthMobile="260px"
            //   autoOpen={true}
            //   autoOpenTimer={2000}
            iconSize="60"
            iconColor="white"
            iconBgColor="#25D366"
            // headerIcon={propulseIcon2}
            // headerIconColor="pink"
            headerTxtColor="black"
            headerBgColor="#3ec1d5"
            headerIconBgColor="rgb(255 197 110 / var(--tw-bg-opacity))"
            headerTitle="Propulse Next Gen"
            headerCaption="Online"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={
                <>
                    Hi 🙏 <br />
                    <br /> We are here to help you.
                </>
            }
            footerBgColor="#3ec1d5"
            placeholder="Type a message.."
            btnBgColor="#319aaa"
            btnTxt="Start Chat"
            btnTxtColor="black"
        />
    );
};
