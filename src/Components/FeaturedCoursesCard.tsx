import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
interface Course {
	id: number;
	title: string;
	description: string;
	slug: string;
	price: number;
	instructor: string;
	isFeatured: boolean;
}
function FeaturedCoursesCard({ course }: { course: Course }) {
	return (
		<div key={course.id} className="flex flex-col shrink">
			<BackgroundGradient>
				{/* <div className="dark:bg-black bg-white p-2 rounded-full">
							{course.id}
						</div> */}
				<div className="bg-white flex flex-col shrink dark:bg-black backdrop-blur-sm rounded-3xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl p-8">
					<div className="flex items-center mb-4">
						<div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8 text-white"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M12.315 3.317A6.756 6.756 0 0 1 18 6.93v6.14a6.756 6.756 0 0 1-5.685 6.624A6.756 6.756 0 0 1 6.63 13.07V6.93a6.756 6.756 0 0 1 5.685-3.613ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 ml-4">
							{course.title}
						</h2>
					</div>
					<p className="text-gray-600 dark:text-gray-300 mb-4">
						{course.description}
					</p>
					<div className="flex items-center justify-between">
						<div className="text-gray-800 dark:text-gray-200 font-bold">
							${course.price}
						</div>
						<div className="text-gray-600 dark:text-gray-400">
							{course.instructor}
						</div>
					</div>
					<div className="mt-6 flex justify-center">
						<button className="bg-transparent hover:bg-indigo-600 text-indigo-400 hover:text-white dark:text-indigo-500 dark:hover:text-gray-300 font-semibold py-3 px-6 rounded-md transition duration-300 border border-indigo-400 dark:border-indigo-500">
							Enroll Now
						</button>
					</div>
				</div>
			</BackgroundGradient>
		</div>
	);
}

export default FeaturedCoursesCard;
