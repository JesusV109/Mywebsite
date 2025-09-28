"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Hero />

      {/* Projects Section - no solid bg to avoid the "cut" */}
      <Section className="relative z-10 text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeInUp}>
          <h2
            id="projects"
            className="text-2xl sm:text-3xl font-bold text-center mb-10 text-white"
          >
            Projects
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
            <ProjectCard
              title="Ordex"
              description="Fully deployed logistics app with Next.js + Firebase + Prisma. Tracks pallets, inventory, and streamlines warehouse ops.   Use jesus@gmail.com and password 1234567890 to log in"
              link="https://github.com/JesusV109/Ordex"
              demo="https://pdrapp.vercel.app"
              tags={["Next.js", "TypeScript", "Firebase", "Prisma"]}
            />
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
            <ProjectCard
              title="safeCity"
              description="Incident reporting platform with map visualization and admin dashboard."
              link="https://github.com/JesusV109/safeCity"
              tags={["Next.js", "Leaflet/Maps", "Full-stack"]}
            />
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
            <ProjectCard
              title="Custom Alarm Clock"
              description="Arduino RTC + ultrasonic sensor + LED matrix & buzzer. Wave to silence."
              link="https://github.com/JesusV109/alarmClock"
              tags={["Arduino", "C/C++", "Hardware"]}
            />
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
            <ProjectCard
              title="Carbon Footprint (HackRU)"
              description="Next.js + Prisma + Tailwind app that uses Google Maps transit data to calculate emissions and rank users."
              link="https://github.com/JesusV109/hackru"
              tags={["Next.js", "Prisma", "Tailwind", "Google Maps"]}
            />
          </motion.div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="text-center relative z-10">
        <motion.div initial="hidden" whileInView="show" variants={fadeInUp}>
          <h2 id="contact" className="text-2xl sm:text-3xl font-bold mb-6 text-white">
            Contact Me
          </h2>
          <p className="text-sm sm:text-base text-gray-200">
            Reach me at{" "}
            <a
              href="mailto:albertovazquez86av@gmail.com"
              className="underline text-blue-400 hover:text-blue-500"
            >
              albertovazquez86av@gmail.com
            </a>
          </p>
        </motion.div>
      </Section>
    </div>
  );
}
