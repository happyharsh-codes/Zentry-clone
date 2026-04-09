import { useEffect, useRef } from "react";
import "../general.css";
import "../styles/navbar.css";
import Button from "../subcomponents/Buttons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {

	useEffect(() => {
		const navGlow = document.getElementById("js-glow");
		const navRight = document.querySelector(".nav-right-section");
		const navItems = document.querySelectorAll(".nav-element");

		if (!navGlow || !navRight) return;

		const navRightRect = navRight.getBoundingClientRect();

		navRight.addEventListener("mouseenter", () => {
			navGlow.style.transition = "opacity 1s ease";
		});

		navItems.forEach((elem) => {
			elem.addEventListener("mouseenter", () => {
				const rect = elem.getBoundingClientRect(); 

				navGlow.style.display = "inline";
				navGlow.style.width = `${rect.width}px`;
				navGlow.style.height = `${rect.height}px`;
				navGlow.style.top = `${rect.top - navRightRect.top}px`;
				navGlow.style.left = `${rect.left - navRightRect.left}px`;
				navGlow.style.opacity = "1";
				navGlow.style.transform = "scale(1)";
			});

			elem.addEventListener("mouseleave", () => {
				navGlow.style.opacity = 0;
				navGlow.style.transform = "scale(0.85)";
				navGlow.style.transition = "all 1s ease";
			});
		});

	}, []);

	return (
		<nav className="nav-header">
			<section className="nav-left-section">
				<div className="logo-icon">
					<img src="img/logo.webp" alt="logo" className="logo" />
				</div>
				<Button label="Products" />
			</section>
			<section className="nav-middle-section"></section>
			<section className="nav-right-section">
				<span className="nav-glow" id="js-glow"></span>
				<a className="nav-element">Nexus</a>
				<a className="nav-element">Vault</a>
				<a className="nav-element">Prologue</a>
				<a className="nav-element">About</a>
				<a className="nav-element">Contact</a>
				<div>
					<Button label="|" />
				</div>
			</section>
		</nav>
	);
}

export default Navbar;
