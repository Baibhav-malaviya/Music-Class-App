import FeaturedCourses from "@/Components/FeaturedCourses";
import HeroSection from "@/Components/HeroSection";
import Testimonial from "@/Components/Testimonial";
import Tooltip from "@/Components/Tooltip";
import WhyChooseUs from "@/Components/WhyChooseUs";
import { Spotlight } from "@/Components/ui/Spotlight";
import { WavyBackground } from "@/Components/ui/wavy-background";
import Image from "next/image";

export default function Home() {
	return (
		<div className="mt-10">
			<Spotlight fill="blue" />
			<HeroSection />
			<FeaturedCourses />
			{/* <WhyChooseUs /> */}
			<Testimonial />
			<Tooltip />
		</div>
	);
}
