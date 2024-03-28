"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

import { cn } from "@/Utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
	const [isDark, setIsDark] = useState(true);

	const toggleTheme = () => {
		const htmlElement = document.documentElement;

		// Remove existing class
		htmlElement.classList.remove(isDark ? "dark" : "light");

		// Add new class
		htmlElement.classList.add(!isDark ? "dark" : "light");

		// Update the state
		setIsDark(!isDark);
	};
	const [active, setActive] = useState<string | null>(null);
	return (
		<div className="fixed top-10 inset-x-2 z-50 ">
			<div className={cn(" max-w-2xl mx-auto ", className)}>
				<Menu setActive={setActive}>
					<Link href="/">
						<MenuItem
							setActive={setActive}
							active={active}
							item="Home"
						></MenuItem>
					</Link>
					<MenuItem setActive={setActive} active={active} item="All Courses">
						<div className="flex flex-col space-y-4 text-sm">
							<HoveredLink href="/">Our Courses</HoveredLink>
							<HoveredLink href="/interface-design">
								Basic Music Theory
							</HoveredLink>
							<HoveredLink href="/seo">Advanced composition</HoveredLink>
							<HoveredLink href="/branding">Song Writing</HoveredLink>
							<HoveredLink href="/branding">Music Production</HoveredLink>
						</div>
					</MenuItem>
					<Link href={"/contact"}>
						<MenuItem
							active={active}
							setActive={setActive}
							item="Contact Us"
						></MenuItem>
					</Link>
				</Menu>
			</div>
			<button
				onClick={toggleTheme}
				className="p-2 rounded font-bold text-sm bg-white t dark:bg-black dark:text-gray-100 text-gray-700 fixed top-4 right-4 ring-2 ring-gray-400"
			>
				{isDark ? "LIGHT" : "DARK"}
			</button>
		</div>
	);
}
