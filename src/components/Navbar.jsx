import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-40 top-4 px-4 transition-all ${
        scrolled ? "backdrop-blur bg-white/6 shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center font-bold">
            KS
          </div>
          <div className="text-sm">Karan Singh</div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link
            to="projects"
            smooth
            offset={-80}
            className="cursor-pointer hover:underline"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth
            offset={-80}
            className="cursor-pointer hover:underline"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth
            offset={-80}
            className="cursor-pointer hover:underline"
          >
            Contact
          </Link>
          <a
            href="/resume.pdf"
            download
            className="px-3 py-1 bg-indigo-600 rounded-full text-sm"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden">
          {/* mobile menu button -> you can add later */}
        </div>
      </div>
    </motion.nav>
  );
}
