"use client";
import React from "react";
import coursesData from "@/data/courses-data.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function FeaturedCourses() {
	const featuredCourses = coursesData.courses.filter(
		(course) => course.isFeatured
	);
	return (
		<div className="bg-white dark:bg-black">
			<div className="text-center  py-12">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<p className="text-indigo-500 dark:text-indigo-400 uppercase tracking-wider font-semibold mb-2">
						Featured Courses
					</p>
					<h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
						Learn With the Best
					</h2>
				</div>
			</div>
			<HoverEffect items={featuredCourses} />

			<div className="text-center bg-white dark:bg-black pt-8">
				<Link
					href="/courses"
					className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition duration-300 rounded-full px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				>
					<span className="mr-2">All Courses</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
}

export default FeaturedCourses;
