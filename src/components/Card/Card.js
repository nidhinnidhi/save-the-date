import React from "react";
import Image from "next/image";

const Card = ({ imgSrc, name, intro }) => {
	return (
		<div className="px-10 py-5 md:px-20 py-10">
			<Image
				src={imgSrc}
				alt={name}
				className="mx-auto  mb-4 sm:mb-6 lg:mb-8 w-40 sm:w-72"
			/>
			<h3 className="text-gray-700 text-center text-3xl lg:text-5xl font-script mb-4 sm:mb-6 lg:mb-8">
				{name}
			</h3>
			<div className=" max-w-lg m-auto">
				<p className="text-gray-700 text-center font-lora">{intro}</p>
			</div>
		</div>
	);
};

export default Card;
