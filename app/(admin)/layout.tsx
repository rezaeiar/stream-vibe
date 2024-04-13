import NavigationBar from "../_components/modules/NavigationBar/NavigationBar";
import Footer from "../_components/modules/Footer/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-manrope-medium bg-[#1e1e1e]">
                <NavigationBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
