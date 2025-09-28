"use client";

import Image from "next/image";
import Section from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Section className="text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeInUp}>
          <h1 className="text-3xl sm:text-4xl font-bold">About Me</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
            Learn more about my journey, skills, and experiences.
          </p>
        </motion.div>
      </Section>

      {/* Intro */}
      <Section className="text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <Image
            src="/me.jpg"
            alt="My Picture"
            width={120}
            height={120}
            priority
            className="rounded-full border-2 border-gray-300 dark:border-gray-700 shadow-lg mb-6 mx-auto"
          />
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Hi, I’m <strong>Jesus Vazquez</strong>, a software engineer focusing
            on <strong>web development/mobile development</strong> and{" "}
            <strong>machine learning</strong>, and a Computer Science student at
            Kean University (Union, NJ).
          </p>
        </motion.div>
      </Section>

      {/* Education */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <p className="text-sm font-bold">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Kean University, Union, NJ
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2022 – Present
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Experience */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* IT Assistant */}
            <motion.div variants={fadeInUp}>
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
                <h3 className="font-bold">IT Assistant / Systems Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Packaging & Distribution Resources (Internship)
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jun 2025 – Present
                </p>
                <ul className="list-disc list-inside text-sm space-y-2 mt-2">
                  <li>Automated cleanup scripts improving storage & performance.</li>
                  <li>Built Android app for Google Photos cleanup & sync.</li>
                  <li>Configured SFTP connection & collaborated with the EDI team.</li>
                  <li>Maintained Zebra printers, HP LaserJets, and networking.</li>
                  <li>Supported Windows Server shares, VPNs, VLANs.</li>
                  <li>
                    Assisted ERP deployment (Dynamics 365 Business Central CU52).
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Web Developer */}
            <motion.div variants={fadeInUp}>
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
                <h3 className="font-bold">Web Developer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  YBF Beauty
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sep 2023 – Jan 2024
                </p>
                <ul className="list-disc list-inside text-sm space-y-2 mt-2">
                  <li>Launched Shopify store with 100+ SKUs.</li>
                  <li>Designed responsive UI/UX, managed listings & payments.</li>
                  <li>Improved brand consistency and early sales growth.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Projects */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <ProjectCard
              title="Ordex"
              description="Next.js + Firebase + Prisma logistics app for pallet tracking & inventory. Fully functional and deployed."
              link="https://github.com/JesusV109/Ordex"
              demo="https://pdrapp.vercel.app"
              tags={["Next.js", "TypeScript", "Firebase", "Prisma"]}
            />
            <ProjectCard
              title="safeCity"
              description="Full-stack app for incident reporting with maps and admin dashboard."
              link="https://github.com/JesusV109/safeCity"
              tags={["Next.js", "Maps", "Full-stack"]}
            />
            <ProjectCard
              title="Carbon Footprint Calculator (HackRU)"
              description="Next.js + Prisma + Tailwind app using Google Maps transit data to estimate emissions and leaderboard ranking."
              link="https://github.com/JesusV109/hackru"
              tags={["Next.js", "Prisma", "Tailwind"]}
            />
            <ProjectCard
              title="Custom Alarm Clock"
              description="Arduino + RTC + ultrasonic sensor + LED matrix. Wave within 4cm to silence the alarm."
              link="https://github.com/JesusV109/alarmClock"
              tags={["Arduino", "C++", "Electronics"]}
            />
          </div>
        </motion.div>
      </Section>

      {/* Certifications */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
          <p className="text-sm">
            <strong>SQL for Data Science</strong> — edX (2024)
          </p>
        </motion.div>
      </Section>

      {/* Hackathons */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">Hackathons</h2>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>
              <strong>HackRU (2024)</strong> — Built a Next.js leaderboard app
              with Prisma ORM and Tailwind CSS.
            </li>
            <li>
              <strong>KeanUHacks (2025)</strong> — Developed AI-driven project with
              Next.js and Firebase in a team collaboration.
            </li>
          </ul>
        </motion.div>
      </Section>

      {/* Skills */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
              <h3 className="font-semibold mb-2">Languages</h3>
              <p className="text-sm">
                Java, Python, SQL, TypeScript, JavaScript, HTML/CSS
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
              <h3 className="font-semibold mb-2">Frameworks</h3>
              <p className="text-sm">
                Next.js, Node.js, React, Prisma, Tailwind CSS
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
              <h3 className="font-semibold mb-2">Tools & Systems</h3>
              <p className="text-sm">
                Git, GitHub, Navicat, MySQL Workbench, Dynamics 365, SFTP, Windows
                Server
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
