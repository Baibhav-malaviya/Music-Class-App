"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/Components/ui/3d-card";

export default function page() {
	const musicClasses = [
		{
			id: 1,
			title: "Introduction to Guitar",
			description:
				"Learn the fundamentals of playing the guitar, from chord progressions to strumming patterns. Suitable for beginners.",
			imageUrl:
				"https://plus.unsplash.com/premium_photo-1664302427357-40eb7c8fd3c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 2,
			title: "Piano Mastery",
			description:
				"Unlock the secrets of the piano with our comprehensive course covering music theory, fingering techniques, and repertoire.",
			imageUrl:
				"https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 3,
			title: "Vocal Training",
			description:
				"Develop your singing voice with vocal exercises, breathing techniques, and performance skills under the guidance of professional instructors.",
			imageUrl:
				"https://images.unsplash.com/photo-1597235506549-5392d2b7559a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 4,
			title: "Drum Grooves",
			description:
				"Explore the world of rhythm and drumming, from rock to jazz, and learn intricate patterns and fills to elevate your percussion skills.",
			imageUrl:
				"https://plus.unsplash.com/premium_photo-1681053901931-e0d3af9449e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 5,
			title: "Music Theory Essentials",
			description:
				"Gain a solid understanding of music theory, including notation, scales, chords, and harmony, to enhance your overall musicianship.",
			imageUrl:
				"https://images.unsplash.com/photo-1524230659092-07f99a75c013?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16 px-5 bg-white text-gray-800 dark:bg-black dark:text-gray-100">
			{musicClasses.map((music) => (
				<CardContainer key={music.id} className="inter-var">
					<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
						<CardItem
							translateZ="50"
							className="text-xl font-bold text-neutral-600 dark:text-white"
						>
							{music.title}
						</CardItem>
						<CardItem
							as="p"
							translateZ="60"
							className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
						>
							{music.description}
						</CardItem>
						<CardItem translateZ="100" className="w-full mt-4">
							<Image
								src={music.imageUrl}
								height="1000"
								width="1000"
								className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
								alt="thumbnail"
							/>
						</CardItem>
						<div className="flex justify-between items-center mt-20">
							<CardItem
								translateZ={20}
								as={Link}
								href="https://twitter.com/mannupaaji"
								target="__blank"
								className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
							>
								Try now →
							</CardItem>
							<CardItem
								translateZ={20}
								as="button"
								className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
							>
								Sign up
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			))}
		</div>
	);
}
