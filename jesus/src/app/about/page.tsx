import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen p-8 sm:p-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">About Me</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
          Learn more about my journey, skills, and experiences.
        </p>
      </header>

      {/* About Section */}
      <section className="text-center mb-16">
        <Image
          src="/me.jpg" // Replace with your profile picture
          alt="My Picture"
          width={120}
          height={120}
          className="rounded-full border-2 border-gray-300 dark:border-gray-700 shadow-lg mb-6 mx-auto"
        />
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          Hi, I&#39;m Jesus Vazquez, a passionate software engineer with a focus on
          web development and machine learning. Over the years, I have honed my
          skills in building intuitive, scalable applications and exploring
          cutting-edge technologies.
        </p>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-4">
          Outside of coding, I enjoy outdoor adventures and experimenting with
          AI models. I&#39;m always looking for exciting projects and collaborations.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <ul className="list-disc list-inside text-left space-y-2">
          <li>Programming Languages: JavaScript, Python, Java, SQL</li>
          <li>Frameworks: Node.js, Next.js</li>
          <li>Tools: Git, Navicat, GitHub, MySQL Workbench</li>
          <li>Languages: HTML/CSS, TypeScript</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="mb-6">
          <h3 className="font-bold">Web Developer</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Social-Paths (September 2023 - January 2024)
          </p>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Developed and launched an e-commerce site for YBF brand using Shopify, featuring 100+ products.</li>
            <li>Designed layout and UI, optimizing for user experience and brand consistency.</li>
            <li>Managed pricing, product listings, and integrated payment gateways.</li>
            <li>Led the launch, boosting initial sales and brand visibility.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="mb-6">
          <h3 className="font-bold">Custom Alarm Clock</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            September 2024 - October 2024
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Built an alarm clock using an RTC module and ultrasonic sensor to
            deactivate the alarm within 4 cm. Integrated an active buzzer and
            LED matrix for clear time display and notifications.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Pizza Store Management System</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            September 2024 - October 2024
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Created a database schema for pizza store operations, covering
            orders, inventory, and employee scheduling. Developed in MySQL and
            leveraged SQL for data integrity.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
        <p className="text-sm">
          <strong>SQL for Data Science</strong> - EDX Verified Certificate
        </p>
      </section>

      {/* Contact */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Contact</h2>
        <ul className="list-none space-y-2">
          <li>Email: albertovazquez86av@gmail.com</li>
          <li>Phone: 732-527-7153</li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/jesus-vazquez-02b450202"
              className="text-blue-500 hover:underline"
            >
              Jesus Vazquez
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/JesusV109"
              className="text-blue-500 hover:underline"
            >
              JesusV109
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
