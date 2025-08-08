import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "MINIX Scheduler",
    desc: "SRTF, LRTF, MLFQ integration — kernel patches.",
    tags: ["C", "OS", "Kernel"],
    media: "https://www.homebrewcpu.com/minix_boot.jpg",
    live: "#",
    code: "#",
  },
  {
    title: "Melody Music Website",
    desc: "Full-stack music streaming app built with React, Express, and MongoDB, deployed on Vercel; used Context API, Tailwind, fully responsive.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    media:
      "https://play-lh.googleusercontent.com/kDXJ6XA2Cm47lzDCvvu6HNCu0PWmTwZKiY0ldCWrCgXGT3Ms-lbP_WN1v5vknspnLT15=w526-h296-rw",
    live: "https://spotify-frontend-uq2h.onrender.com/",
    code: "https://github.com/karansingh007-dev/MUSIC-WEBSITE-USING-MERN-STACK",
  },
  {
    title: "Real-time Chess",
    desc: "React + Socket.IO multiplayer chess with spectator mode.",
    tags: ["React", "Socket.IO"],
    media:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3WSPv9AzQ3RzO68u6fv6VFwjnPwW1eWoTw&s",
    live: "#",
    code: "https://github.com/karansingh007-dev/chess.com-project",
  },
  {
    title: "Bookkeeping App",
    desc: "Full-stack bookkeeping with MongoDB and Express.",
    tags: ["Node", "MongoDB"],
    media:
      "https://assets.dev.khatabook.com/media/uploads/2021/06/06/add-bank-account-features-9.webp",
    live: "#",
    code: "https://github.com/karansingh007-dev/khatabook",
  },
  {
    title: "Finance Visualizer",
    desc: "Dashboard with 10+ REST APIs and Recharts visualizations; processed 1,200+ entries and handled 500+ API calls/day in tests.",
    tags: ["React", "Recharts", "REST API", "Data Visualization"],
    media:
      "https://cdn.prod.website-files.com/64df44af42cd3c30931a4b42/67166fbf57b3af4cc1f85edd_67166fb79003c1ef2a356a19_65ae704fcc73c9c3cf532394_saas.png", // Add your preview GIF in public/media
    live: "https://finance-visualizer-yiyv.onrender.com/",
    code: "https://github.com/karansingh007-dev/Finance-Visualizer",
  },
  {
    title: "Real Estate Website",
    desc: "Modern real estate platform built with React, TailwindCSS, and Framer Motion; includes animated property listings, filtering, and responsive design for buyers and sellers.",
    tags: ["React", "Tailwind", "Framer Motion"],
    media: "./real.png", // add your preview gif/screenshot in public/media
    live: "https://real-estate-cxq3.onrender.com/",
    code: "https://github.com/karansingh007-dev/Finance-Visualizer",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-24">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.15}
              scale={1.03}
              transitionSpeed={400}
              className="rounded-2xl"
            >
              <div className="p-4 bg-white/4 rounded-2xl h-full flex flex-col justify-between">
                <img
                  src={p.media}
                  loading="lazy"
                  alt={p.title}
                  className="w-full h-40 object-contain rounded-md"
                />
                <div className="mt-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-slate-300 mt-2">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 bg-white/5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <a
                    href={p.live}
                    className="px-3 py-1 bg-indigo-600 rounded text-sm"
                  >
                    Live
                  </a>
                  <a href={p.code} className="px-3 py-1 border rounded text-sm">
                    Code
                  </a>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
