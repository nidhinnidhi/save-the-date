import React from "react";
import Image from "next/image";
import TitleDidiver from "../../assets/images/title-divider.png";

const Title = ({ title, text }) => {
	return (
		<div className="pt-20 px-10 pb-10">
			<h2 className="text-gray-700 text-center text-4xl lg:text-5xl font-script mb-3 lg:mb-6">
				{title}
			</h2>
			<div className=" max-w-lg m-auto">
				<p className="text-gray-700 text-center  font-lora mb-3">{text}</p>
			</div>
			<Image src={TitleDidiver} alt={""} className="w-80 m-auto" />
		</div>
	);
};

export default Title;
