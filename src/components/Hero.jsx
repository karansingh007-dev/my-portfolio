import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particlesInit = async (main) => {
  await loadFull(main);
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center" id="home">
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 30 },
            size: { value: 4 },
            move: { speed: 0.6 },
            links: { enable: true },
          },
          background: { color: "transparent" },
        }}
        className="absolute inset-0 -z-10"
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-24">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-400 font-medium">
            Software Engineering Program — EMEA
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-2">
            Hi, I’m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-pink-300">
              Karan
            </span>
          </h1>
          <div className="mt-4 text-2xl text-slate-300 font-medium">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "Systems & OS Enthusiast",
                2000,
                "Real-time App Builder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-slate-300 max-w-lg">
            I build high-performance web systems, real-time apps and low-level
            OS tooling. Currently targeting SEP roles across EMEA.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#projects"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg"
            >
              See projects
            </a>
            <a
              href="mailto:ks3847758@gmail.com"
              className="px-4 py-2 border border-white/10 rounded-lg"
            >
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-80 md:w-96 p-6 rounded-3xl bg-gradient-to-tr from-white/4 to-white/6 backdrop-blur border border-white/6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-indigo-600 flex items-center justify-center text-xl font-bold">
                KS
              </div>
              <div>
                <div className="font-semibold">Karan Singh</div>
                <div className="text-sm text-slate-300">
                  B.Tech (CSE) • Graphic Era Hill University
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-slate-200 space-y-2">
              <p>
                <strong>GPA:</strong> 8.6 / 10
              </p>
              <p>
                <strong>Location:</strong> Dehradun, India
              </p>
            </div>

            <div className="mt-5 flex gap-2">
              <a
                href="./resume.pdf"
                download
                className="px-3 py-1 bg-indigo-600 rounded-md"
              >
                Download CV
              </a>
              <a href="#contact" className="px-3 py-1 border rounded-md">
                Hire me
              </a>
            </div>

            <div className="absolute -bottom-6 right-6 p-2 bg-emerald-500 text-slate-900 font-medium rounded-full shadow-lg">
              Open to work
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
