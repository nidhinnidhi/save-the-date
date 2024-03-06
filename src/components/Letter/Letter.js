import React from "react";
import styles from "./Letter.module.scss";

const Letter = ({ title, date, time, location, linkUrl, linkText }) => {
	return (
		<div
			className={`${styles.letter} bg-white text-gray-800 text-center px-10 py-8  lg:px-20 lg:py-16 font-lora text-gray-700 text-center font-lora grid gap-10`}
		>
			<h3 className="inline-block text-gray-700 text-center text-4xl lg:text-5xl font-script mb-3 lg:mb-6  pb-6 lg:pb-10 border-b border-rose-600  sm:min-w-72 mx-auto">
				{title}
			</h3>
			<div>
				<p>{date}</p>
				<p>{time}</p>
			</div>
			<div className="max-w-72 mx-auto">
				<p>{location}</p>
			</div>
			<a
				href={linkUrl}
				target="_blank"
				className="uppercase hover:text-rose-600 inline-flex mx-auto gap-3 text-lg font-medium"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6"
				>
					<path
						fill-rule="evenodd"
						d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
						clipRule="evenodd"
					/>
				</svg>

				{linkText}
			</a>
		</div>
	);
};

export default Letter;
