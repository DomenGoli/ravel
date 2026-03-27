import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Ravel",
    description: "Image sharing app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex justify-center bg-(--strava-ozadje) w-screen antialiased items-center gap-4 text-stone-400">
                {/* <Navbar /> */}
                <div className="w-screen">{children}</div>
                {/* <Footer /> */}
            </body>
        </html>
    );
}
