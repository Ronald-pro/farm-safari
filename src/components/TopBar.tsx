import { FaUserCircle, FaSearch } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[var(--colors-beige)] text-[var(--oxfam-green)] text-sm px-4 py-2">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
        {/* Left section */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-4">
          {/* <a href="#" className="hover:underline">Media</a> */}
          <span className="hidden sm:inline">Email: info@farmsafari.org</span>
          <span className="hidden sm:inline">Call: +254 712345678</span>
        </div>

        {/* Right icons */}
        <div className="flex space-x-4 text-lg mt-2 md:mt-0">
          <FaUserCircle className="cursor-pointer hover:text-green-700" />
          <FaSearch className="cursor-pointer hover:text-green-700" />
        </div>
      </div>
    </div>
  );
}
