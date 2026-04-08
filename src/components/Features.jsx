import { useState } from "react";
import "../general.css";
import "../styles/features.css";
import BentoCard from "../subcomponents/BentoCard";
import "../styles/bentocard.css"

function Features() {
	return (
		<div className="features">
			<div className="heading">
				<p className="font-circular-web heading-title">
				Into the Metagame Layer
				</p>
				<p className="font-circular-web">
				Immerse yourself in a rich and ever-expanding universe where a vibrant
				array of products converge into an interconnected overlay experience
				on your world.
				</p>
			</div>
			<div className="cards">
				<BentoCard src="videos/feature-1.mp4" title={ <>RADI<b>N</b>T</>} para="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure." className="card-a" />
				<BentoCard src="videos/feature-2.mp4" title={<>ZIG<b>M</b>A</>} para="An anime and gaming-inspired NFT collection - the IP primed for expansion." className="card-b" />
				<BentoCard src="videos/feature-3.mp4" title={<>N<b>E</b>XUS</>} para="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities." className="card-c" />
				<BentoCard src="videos/feature-4.mp4" title={<>AZ<b>U</b>L</>} para="A cross-world AI Agent - elevating your gameplay to be more fun and productive." className="card-d" />
				<div className="bentocard card-e" style={{backgroundColor: "rgb(87, 35, 254)"}}>
					<div className="content">
						<h1 className="font-zentry">M<b>o</b>re co<b>m</b>ing s<b>o</b>on.</h1>
					</div>
				</div>
				<div className="bentocard card-f">
					<video 
					src="videos/feature-5.mp4" 
					muted
					loop
					autoPlay/>
				</div>
			</div>
		</div>
	);
}

export default Features;
