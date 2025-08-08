import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "C / C++", pct: 85 },
  { name: "JavaScript", pct: 90 },
  { name: "React", pct: 92 },
  { name: "Node.js", pct: 85 },
  { name: "tailwind css", pct: 85 },
  { name: "DSA", pct: 90 },
  { name: "Mongodb", pct: 85 },
    { name: "sql", pct: 85 },
  
];

function Circle({ pct }) {
  const dash = 2 * Math.PI * 24;
  const offset = dash - (dash * pct) / 100;
  return (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <g transform="translate(32,32)">
        <circle
          r="24"
          strokeWidth="6"
          strokeOpacity="0.12"
          stroke="white"
          fill="none"
        />
        <circle
          r="24"
          strokeWidth="6"
          stroke="white"
          fill="none"
          strokeDasharray={`${dash} ${dash}`}
          strokeDashoffset={offset}
          transform="rotate(-90)"
        />
      </g>
    </svg>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div>
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="mt-2 text-slate-300">
          Tools and tech I use to build production systems.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {SKILLS.map((s) => (
            <motion.div
              key={s.name}
              className="p-4 bg-white/4 rounded-2xl flex items-center gap-4"
            >
              <Circle pct={s.pct} />
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-slate-300">{s.pct}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Education & Certifications</h3>
        <div className="mt-3 text-sm text-slate-200">
          <p className="font-medium">
            B.Tech in Computer Science — Graphic Era Hill University (8.6/10)
          </p>
          <ul className="mt-2 list-disc ml-5 space-y-1">
            <li>Google Cloud Foundations (NPTEL - IIT Kharagpur)</li>
            <li>Deep Learning Fundamentals (Coursera)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
