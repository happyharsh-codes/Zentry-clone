import { useState } from "react";
import "../general.css";
import "../styles/contact.css";
import Button from "../subcomponents/Buttons";

function Contact() {
	return (
		<div className="main-container">
			<div className="contact">
				<div className="contact-container">
					<img
						src="img/contact-1.webp"
						alt="Contact 1"
						className="contact-images"
						id="contact-img-1"
					/>
					<img
						src="img/contact-2.webp"
						alt="Contact 2"
						className="contact-images"
						id="contact-img-2"
					/>
					<img
						src="img/swordman.webp"
						alt="Contact 3"
						className="contact-images"
						id="contact-img-3"
					/>
                    <p className="font-circular-web">JOIN ZENTRY</p>
                    <h1 className="font-zentry">
                        LETS B<b>U</b>ILD THE
                        <br />
                        NEW ERA OF
                        <br />G<b>A</b>MING T<b>O</b>GETHER.
                    </h1>
                    <Button label="Contact Us" />
				</div>
			</div>
			<div className="contact-footer-panel">
                <section className="contact-footer-left">
                    <p>©Nova 2024. All rights reserved</p>
                </section>
                <section className="contact-footer-middle">
                    <ul>
                        <li><nav><img src="img/discord.webp" alt="" /></nav></li>
                        <li><nav><img src="img/twitter.webp" alt="Twitter" /></nav></li>
                        <li><nav><img src="img/youtube.webp" alt="Youtube" /></nav></li>
                        <li><nav><img src="img/medium.webp" alt="Meidum" /></nav></li>
                    </ul>
                </section>
                <section className="contact-footer-right">
                    <nav>Privacy Policy</nav>
                </section>
            </div>
		</div>
	);
}

export default Contact;
