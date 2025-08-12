import Link from "next/link";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaEnvelope
} from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-[#61A534] text-white pt-16 pb-8">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
				{/* About */}
				<div>
					<h3 className="text-xl font-semibold mb-4">About Farm Safari</h3>
					<p className="text-sm text-300 leading-relaxed">
						We combine indigenous knowledge, modern regenerative techniques, and
						collaborative partnerships to restore degraded ecosystems, improve
						rural livelihoods, and build sustainable food and economic systems.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-xl font-semibold mb-4">Quick Links</h3>
					<ul className="space-y-2 text-sm text-200">
						<li>
							<Link
								href="/about"
								className="hover:text-300 transition duration-200"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								href="/what-we-do"
								className="hover:text-300 transition duration-200"
							>
								What We Do
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-300 transition duration-200"
							>
								Resources
							</Link>
						</li>
					</ul>
				</div>

				{/* Contact */}
				<div>
					<h3 className="text-xl font-semibold mb-4">Contact Us</h3>
					<ul className="text-sm space-y-2 text-300">
						<li>
							Email:{" "}
							<a
								href="mailto:info@farmsafari.org"
								className="hover:text-green-300 transition"
							>
								info@farmsafari.org
							</a>
						</li>
						<li>
							Phone:{" "}
							<a
								href="tel:+254712345678"
								className="hover:text-green-300 transition"
							>
								+254 712 345 678
							</a>
						</li>
						<li>Location: Malindi, Kenya</li>
					</ul>
				</div>

				{/* Social */}
				<div>
					<h3 className="text-xl font-semibold mb-4">Follow Us</h3>
					<div className="flex gap-4">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white/10 hover:bg-green-700 p-3 rounded-full transition"
						>
							<FaFacebookF className="text-white" />
						</a>
						<a
							href="https://x.com"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white/10 hover:bg-green-700 p-3 rounded-full transition"
						>
							<FaTwitter className="text-white" />
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white/10 hover:bg-green-700 p-3 rounded-full transition"
						>
							<FaInstagram className="text-white" />
						</a>
						<a
							href="mailto:info@farmsafari.org"
							className="bg-white/10 hover:bg-green-700 p-3 rounded-full transition"
						>
							<FaEnvelope className="text-white" />
						</a>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="mt-12 border-t border-green-800 pt-4 text-center text-sm text-400">
				Copyright © {new Date().getFullYear()} Farm Safari. All rights reserved.
			</div>
		</footer>
	);
}
