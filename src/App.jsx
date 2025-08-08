import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-slate-100 antialiased min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
