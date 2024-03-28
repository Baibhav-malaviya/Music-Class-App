import React from "react";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export default function HeroSection() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-300">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl p-8">
					<h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl text-center">
						Master the art of music
					</h1>
					<p className="mt-6 text-lg text-gray-600 dark:text-gray-300 text-center">
						Dive into our comprehensive music courses and transform your music
						journey today. Whether you are a beginner or looking to refine your
						skills, join us to unlock your true potential.
					</p>
					<div className="mt-10 flex justify-center">
						<div className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center ">
							<Link
								href={"/courses"}
								className="h-full w-full  rounded-full overflow-hidden"
							>
								<Button className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 overflow-hidden dark:hover:text-gray-300 font-semibold  rounded-md transition duration-300 border">
									Explore Courses
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
