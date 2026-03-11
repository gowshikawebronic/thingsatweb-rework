import ContactClient from "@/components/contact/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Things at Web",
    description:
        "Get in touch with Things at Web. Let's discuss your goals and create a website that drives real results",
};

export default function ContactPage() {
    return <ContactClient />;
}
