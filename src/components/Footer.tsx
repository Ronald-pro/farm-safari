import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Farm Safari</h3>
          <p className="text-sm text-gray-300">
            We work with communities across Kenya to end food poverty and promote sustainable farming practices for a better future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/what-we-do" className="hover:underline">What We Do</Link></li>
            <li><Link href="#" className="hover:underline">Resources</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Email: <a href="mailto:info@farmsafari.org" className="hover:underline">info@farmsafari.org</a></li>
            <li>Phone: <a href="tel:+254712345678" className="hover:underline">+254 712 345 678</a></li>
            <li>Address: Malindi, Kenya</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300"><FaInstagram /></a>
            <a href="mailto:info@farmsafari.org" className="hover:text-green-300"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-green-800 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Farm Safari. All rights reserved.
      </div>
    </footer>
  );
}
