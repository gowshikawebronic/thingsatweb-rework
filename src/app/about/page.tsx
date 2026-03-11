import AboutClient from "@/components/about/AboutClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Things at Web",
    description:
        "Things at Web is a renowned IT Company with a top-notch team of talented data experts, designers, developers, technicians, engineers, and highly innovative artists.",
};

export default function AboutPage() {
    return <AboutClient />;
}
