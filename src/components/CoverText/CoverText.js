import React from "react";

const CoverText = ({ title, subText, theme = "light" }) => {
	const themeStyleClass = theme === "light" ? "text-white" : "text-gray-700";
	return (
		<div className="pt-20 px-10 pb-10">
			<h2
				className={`${themeStyleClass} text-gray-700 text-center text-5xl lg:text-8xl font-script mb-3 lg:mb-6`}
			>
				{title}
				{subText && (
					<span className="block text-3xl lg:text-5xl mt-4 sm:mt-6 lg:mt-8">
						{subText}
					</span>
				)}
			</h2>
		</div>
	);
};

export default CoverText;
