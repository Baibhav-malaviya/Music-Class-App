import { cn } from "@/Utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import FeaturedCoursesCard from "../FeaturedCoursesCard";

export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		id: number;
		title: string;
		description: string;
		slug: string;
		price: number;
		instructor: string;
		isFeatured: boolean;
		// Allow additional properties
	}[];
	className?: string;
	// cardComponent: React.ComponentType<any>; // Accepts a React component as a prop
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 ",
				className
			)}
		>
			{items.map((item, idx) => (
				<div
					key={item?.id}
					className="relative group block p-4 h-full w-full"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					<FeaturedCoursesCard course={item} />
				</div>
			))}
		</div>
	);
};

const CourseCard = ({
	title,
	description,
	price,
	instructor,
	...props
}: {
	title: string;
	description: string;
	price: number;
	instructor: string;
	[key: string]: any;
}) => (
	<Card>
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
					{title}
				</h2>
			</div>
			<p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
			<div className="flex items-center justify-between">
				<div className="text-gray-800 dark:text-gray-200 font-bold">
					${price}
				</div>
				<div className="text-gray-600 dark:text-gray-400">{instructor}</div>
			</div>
			<div className="mt-6 flex justify-center">
				<button className="bg-transparent hover:bg-indigo-600 text-indigo-400 hover:text-white dark:text-indigo-500 dark:hover:text-gray-300 font-semibold py-3 px-6 rounded-md transition duration-300 border border-indigo-400 dark:border-indigo-500">
					Enroll Now
				</button>
			</div>
		</div>
	</Card>
);

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
				className
			)}
		>
			<div className="relative z-50">
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};

export const CardTitle = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
			{children}
		</h4>
	);
};

export const CardDescription = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<p
			className={cn(
				"mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
				className
			)}
		>
			{children}
		</p>
	);
};
