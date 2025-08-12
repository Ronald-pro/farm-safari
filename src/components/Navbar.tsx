"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
	const [query, setQuery] = useState("");
	const [mobileOpen, setMobileOpen] = useState(false);

	const menuItems = [
		{ text: "About Us", href: "/about" },
		{ text: "What We Do", href: "/what-we-do" },
		{ text: "Our Strategic Framework", href: "/strategy-approach" },
		{ text: "Get involved", href: "#" }
	];

	return (
		<header className="w-full z-50">
			{/* Logo + tagline row */}
			<div className="bg-white py-5 border-b border-gray-200">
				<div className="max-w-7xl mx-auto flex items-center justify-between px-4">
					<div className="flex items-center space-x-4">
						<Link href="/" title="Home">
							<Image
								className="cursor-pointer"
								src="/logo.png"
								alt="Logo"
								width={90}
								height={90}
							/>
						</Link>
						<div
							className="hidden sm:block pl-4"
							style={{ borderLeft: "2px solid #798b6dff" }}
						>
							<p className="text-sm font-medium" style={{ color: "#61A534" }}>
								Change Lives with Us
							</p>
						</div>
					</div>

					{/* <div
						className="max-w-7xl mx-auto flex justify-end items-center px-4 py-2 text-sm"
						style={{ color: "#61A534" }}
					>
						<Link href="/contact" className="hover:underline">
							Contact us
						</Link>
					</div> */}

					{/* Mobile menu toggle */}
					<button
						onClick={() => setMobileOpen(!mobileOpen)}
						className="md:hidden text-3xl"
						style={{ color: "#61A534" }}
					>
						{mobileOpen ? <HiX /> : <HiOutlineMenu />}
					</button>
				</div>
			</div>

			{/* Desktop menu */}
			<nav className="bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<div className="hidden md:grid grid-cols-4 gap-2 py-4">
						{menuItems.map((item) => (
							<Link
								key={item.text}
								href={item.href}
								className="text-white w-full h-[50px] flex items-center justify-center rounded text-base font-semibold tracking-wide transition-colors"
								style={{
									backgroundColor: "#61A534",
									transition: "background-color 0.2s"
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.backgroundColor = "#4f8f29")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.backgroundColor = "#61A534")
								}
							>
								{item.text}
							</Link>
						))}
					</div>

					{/* Mobile menu */}
					{mobileOpen && (
						<div className="flex flex-col items-stretch md:hidden bg-white border-t border-gray-200">
							{/* Search bar first */}
							<form
								onSubmit={(e) => e.preventDefault()}
								className="flex items-center border rounded overflow-hidden m-4"
							>
								<input
									value={query}
									onChange={(e) => setQuery(e.target.value)}
									type="text"
									placeholder="Search"
									className="px-3 py-2 text-sm outline-none w-full"
								/>
								<button
									className="text-white px-3"
									style={{ backgroundColor: "#61A534" }}
								>
									<FaSearch />
								</button>
							</form>

							{/* Full-width green menu links */}
							{menuItems.map((item) => (
								<Link
									key={item.text}
									href={item.href}
									className="text-white px-6 py-4 text-lg font-semibold border-b border-white"
									style={{ backgroundColor: "#61A534" }}
									onClick={() => setMobileOpen(false)}
								>
									{item.text}
								</Link>
							))}
						</div>
					)}
				</div>
			</nav>
		</header>
	);
}
