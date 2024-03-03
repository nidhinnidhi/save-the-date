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
			</Background>
			<Background backgroundImage={LocationImage} style={"cover"}>
				<div style={{ minHeight: "500px" }}> </div>
			</Background>
		</main>
	);
}
