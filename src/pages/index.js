import Image from "next/image";

import Hero from "../components/Hero/Hero";
import Title from "../components/Title/Title";
import Background from "../components/Background/Background";
import Card from "../components/Card/Card";

import HeroImage from "../assets/images/save-the-date-01.jpg";
import bgDesign01 from "../assets/images/bg-design.png";
import bgDesign02 from "../assets/images/bg-design-02.jpeg";
import Arun from "../assets/images/arun-varghese.png";
import Anusha from "../assets/images/anusha.png";
import capturedMomentsMobile from "../assets/images/captured-moments-mobile.png";
import capturedMomentsDesktop from "../assets/images/captured-moments-desktop.png";
import LocationImage from "../assets/images/save-the-date-02.jpg";
import CoverText from "@/components/CoverText/CoverText";
import Letter from "@/components/Letter/Letter";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Hero
				image={HeroImage}
				topText={"We Are Getting Married"}
				names={"Arun & Anusha"}
				bottomText={"Save The Date"}
				date={"April 13th 2024"}
			/>
			<Background backgroundImage={bgDesign01} style={"contain"}>
				<Title title={"Groom And Bride"} />
				<div className="container mx-auto">
					<div className="text grid grid-cols-1 lg:grid-cols-2  justify-items-center">
						<Card
							imgSrc={Arun}
							name={"Arun Varghese"}
							intro={
								"Welcome to the union of hearts! Meet Arun Varghese, the dashing groom hailing from the picturesque landscapes of Kerala. Son of P.I Varghese and Silla, Arun's roots are deeply embedded in Pulikkottil House, Pidavanoor Po, Naranippuzha. A loving brother to Ajith Varghese and his wife Neethu, and a caring brother to Binitta and Mathews. Together, they form a loving family, cherishing moments with Binittas sons Ashish and Asher. Join us as we celebrate the beginning of Arun's journey into matrimony!"
							}
						/>
						<Card
							imgSrc={Anusha}
							name={"Anusha"}
							intro={
								"Welcome to Anusha Mariya Paul's enchanting journey of love! Born to the loving union of Paul Mathew and Selina, she's also the cherished sister of Amal Mathew Paul. Hailing from Velassery House in Keezhpally, Iritty, Kannur, Anusha brings a blend of tradition and joy to her wedding celebration. Join us as we embark on this beautiful chapter of Anusha's life."
							}
						/>
					</div>
				</div>
			</Background>
			<Title
				title={"Captured Moments"}
				text={
					"Capturing moments, where whispers of time paint a canvas of memories with the strokes of beauty and emotion"
				}
			/>
			<Background backgroundImage={bgDesign02} style={"contain"}>
				<div className="pb-44">
					<Image
						src={capturedMomentsDesktop}
						alt={""}
						className="mx-auto  mb-4 sm:mb-6 lg:mb-8 hidden sm:block"
					/>
					<Image
						src={capturedMomentsMobile}
						alt={""}
						className="mx-auto  mb-4 sm:mb-6 lg:mb-8  sm:hidden"
					/>
				</div>
			</Background>
			<Background
				backgroundImage={LocationImage}
				style={"cover"}
				withShade={true}
			>
				<div className=" px-5 pb-56  sm:py-40 sm:px-10 sm:pb-96 ">
					<CoverText
						title={"When & Wheres"}
						subText={"13 Apr 2024"}
						theme={"light"}
					/>
				</div>
			</Background>
			<div
				className="container mx-auto w-5/6 xl:w-4/6 relative drop-shadow-2xl"
				style={{ top: "-200px" }}
			>
				<div className="text grid grid-cols-1 xl:grid-cols-2  justify-items-stretch bg-white ">
					<Letter
						title={"Ceremony"}
						date={"Saturday, April 13, 2024"}
						time={"10:00 – 11:00"}
						location={"Salem Marthoma Church, Mookkuthala"}
						linkText={"Get Direction"}
						linkUrl={"https://maps.app.goo.gl/wDrSwMXV5YCWvTS97"}
					/>

					<Letter
						title={"Reception"}
						date={"Saturday, April 13, 2024"}
						time={"12:00 Onwards"}
						location={
							"White Rose Convention Centre Naranipuzha Road, Madathipadam"
						}
						linkText={"Get Direction"}
						linkUrl={"https://maps.app.goo.gl/6sGdnwQ9Qxub33Hd9"}
					/>
				</div>
			</div>
		</main>
	);
}
