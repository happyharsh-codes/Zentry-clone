import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Story from "./components/Story";
import Footer from "./components/Footer";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";

function Home() {
	gsap.registerPlugin([ScrollTrigger]);
	
	return (
		<>
			<main>
				<Navbar />
				<section>
					<Dashboard />
				</section>
				<section>
					<About />
				</section>
				<section>
					<Features />
				</section>
				<section>
					<Story />
				</section>
				<section>
					<Contact />
				</section>
				<Footer />
			</main>
		</>
	);
}

export default Home;
