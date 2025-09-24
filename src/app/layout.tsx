import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import BackgroundAnimated from "@/components/BackgroundAnimated";

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Marcanza - Brand Innovation - Build. Boost. Brand.",
	description:
		"Marcanza is a next-gen brand innovation agency that helps brands define their future.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${dmSans.variable} antialiased text-white`}>
				<div className="fixed inset-0 -z-999">
					<BackgroundAnimated hueShift={35} />
				</div>
				<div className="relative">{children}</div>
			</body>
		</html>
	);
}
