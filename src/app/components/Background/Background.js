import React from "react";
import Image from "next/image";

import styles from "./Background.module.scss";

const Background = ({
	backgroundImage,
	alt = "",
	children,
	style,
	withShade = false,
}) => {
	const backgroundStyle =
		style === "contain" ? "object-contain" : "object-cover";
	const wrapperClass = withShade
		? `${styles.withShade} bg relative`
		: `bg relative`;
	return (
		<div className={wrapperClass}>
			<div className="absolute inset-0 -z-10 touch-none">
				<Image
					src={backgroundImage}
					alt={alt}
					fill
					className={backgroundStyle}
				/>
			</div>
			<div className="relative">{children}</div>
		</div>
	);
};

export default Background;
