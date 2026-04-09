import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Story from "./components/Story";
import Footer from "./components/Footer";

function Home() {
	
	return (
		<>
			<main>
				<Navbar/>
				<section>
					<Dashboard />
				</section>
				<section className="section-about">
					<About />
				</section>
				<section className="section-features">
					<Features />
				</section>
				<section className="section-story">
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
