"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	//const [dropdownOpen, setDropdownOpen] = useState(false);
	const [activeSection, setActiveSection] = useState<string | null>(null);

	const menuItems = [
		{ text: "Home", href: "/" },
		{ text: "About Us", href: "/about" },
		{ text: "What We Do", href: "/what-we-do" },
		{ text: "Our Team", href: "#" }
	];

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.6 }
		);

		sections.forEach((section) => observer.observe(section));
		return () => sections.forEach((section) => observer.unobserve(section));
	}, []);

	// const scrollToSection = (id: string) => {
	// 	const section = document.getElementById(id);
	// 	if (section) {
	// 		section.scrollIntoView({ behavior: "smooth" });
	// 		setOpen(false); // close mobile menu
	// 	}
	// };

	return (
		<nav className="fixed top-0 left-0 w-full bg-white shadow border-b border-[var(--colors-lightgreen)] z-50">
			<div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
				<div className="flex items-center space-x-4">
					<Image src="/logo.png" alt="Logo" width={90} height={90} />
					<div className="hidden sm:block h-10 border-l-3 border-[var(--colors-green)] pl-4">
						<p className="text-sm text-[var(--colors-green)]">
							Change Lives with Us
						</p>
					</div>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center space-x-6">
					{menuItems.map((item) => (
						<Link
							key={item.text}
							href={item.href}
							className={`text-[var(--oxfam-green)] hover:underline ${
								activeSection === item.href.replace("#", "")
									? "font-bold underline"
									: ""
							}`}
						>
							{item.text}
						</Link>
					))}
				</div>

				{/* Mobile Menu Toggle */}
				<div className="md:hidden">
					<button
						onClick={() => setOpen(!open)}
						className="text-[var(--colors-green)] text-2xl"
					>
						{open ? <HiX /> : <HiOutlineMenu />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{open && (
				<div className="md:hidden bg-[var(--colors-lightgreen)] px-4 pb-4 space-y-2">
					{menuItems.map((item) => (
						<Link
							key={item.text}
							href={item.href}
							className={`block text-[var(--colors-green)] py-2 border-b hover:underline ${
								activeSection === item.href.replace("#", "")
									? "font-bold underline"
									: ""
							}`}
							onClick={() => setOpen(false)}
						>
							{item.text}
						</Link>
					))}
					<Link
						href="/donate"
						className="w-full block text-center bg-[var(--oxfam-green)] text-white py-2 rounded hover:opacity-90"
					>
						DONATE
					</Link>
				</div>
			)}
		</nav>
	);
}
