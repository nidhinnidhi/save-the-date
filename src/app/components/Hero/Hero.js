import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = ({
	topText = "",
	names = "",
	bottomText = "",
	date = "",
	image,
}) => {
	return (
		<div
			className={`${styles.hero} bg-slate-900 flex justify-center items-center py-24 sm:py-48 lg:py-64 xl:py-72 relative`}
		>
			<div className={`absolute inset-0`}>
				<Image
					src={image}
					alt="background image"
					fill
					placeholder="blur"
					className="object-cover"
				/>
			</div>
			<h1 className="font-lora text-center relative z-10">
				<span className="block text-xs sm:text-sm lg:text-sm uppercase mb-1 sm:mb-3 lg:mb-5 text-gray-200 tracking-widest">
					{topText}
				</span>
				<span className="block text-5xl  sm:text-6xl lg:text-8xl  mb-2 sm:mb-4 lg:mb-6">
					{names}
				</span>
				<span className="block text-xs sm:text-sm lg:text-base uppercase  mb-2 sm:mb-4 lg:mb-6 text-gray-200">
					<span className={`${styles.textLine} inline-block  tracking-widest`}>
						{bottomText}
					</span>
				</span>
				<span className="block text-lg sm:text-2xl lg:text-4xl">{date}</span>
			</h1>
		</div>
	);
};

export default Hero;
