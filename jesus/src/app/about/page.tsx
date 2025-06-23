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
          Hi, I&#39;m Jesus Vazquez, a passionate software engineer specializing in web development and machine learning. I am currently pursuing a
          Bachelor of Science in Computer Science at Kean University in Union, New Jersey.
        </p>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-4">
          Over the years, I&#39;ve gained experience building e-commerce platforms, intuitive applications, and innovative personal projects. I enjoy 
          creating solutions that blend technical expertise with creativity, enhancing user experience and engagement.
        </p>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <p className="text-sm">
          <strong>Bachelor of Science in Computer Science</strong>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Kean University, Union, New Jersey</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">2021 - Present</p>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="mb-6">
          <h3 className="font-bold">Web Developer</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Social-Paths</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">September 2023 - January 2024</p>
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
          <h3 className="font-bold">Custom Alarm Clock with Ultrasonic Sensor</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Personal Project • <a href="https://github.com/JesusV109/alarmClock" className="text-blue-500 hover:underline">GitHub</a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">September 2024 - October 2024</p>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Built an alarm clock using an RTC module and ultrasonic sensor to deactivate the alarm within 4 cm.</li>
            <li>Integrated an active buzzer and LED matrix for clear time display and notifications.</li>
            <li>Achieved over 95% accuracy in timekeeping and reliable alarm deactivation.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Pizza Store Management System</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Personal Project • <a href="https://github.com/JesusV109/pizza" className="text-blue-500 hover:underline">GitHub</a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">September 2024 - October 2024</p>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Created a database schema for pizza store operations covering orders, inventory, and employee scheduling.</li>
            <li>Developed in MySQL, leveraging SQL for data integrity and relational management.</li>
            <li>Used Navicat for query optimization, improving data accessibility and efficiency.</li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
        <p className="text-sm">
          <strong>SQL for Data Science</strong> - EDX Verified Certificate (2024)
        </p>
      </section>

      {/* Hackathon Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Hackathon Experience</h2>
        <div>
          <h3 className="font-bold">Programmer</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Rutgers University • HackRU</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">October 2024</p>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Developed a Next.js web app for leaderboard tracking using Prisma ORM and Tailwind CSS.</li>
            <li>Optimized for deployment on platforms like Vercel, focusing on API handling and database creation.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <ul className="list-disc list-inside text-left space-y-2">
          <li>Frameworks and Libraries: Node.js, Next.js</li>
          <li>Tools: Git, Navicat, GitHub, MySQL Workbench</li>
          <li>Languages: Java, Python, SQL, JavaScript/HTML/CSS, TypeScript</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Contact</h2>
        <ul className="list-none space-y-2">
          <li>Email: <a href="mailto:albertovazquez86av@gmail.com" className="text-blue-500 hover:underline">albertovazquez86av@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/jesus-vazquez-02b450202" className="text-blue-500 hover:underline">linkedin.com/in/jesus-vazquez-02b450202</a></li>
          <li>GitHub: <a href="https://github.com/JesusV109" className="text-blue-500 hover:underline">github.com/JesusV109</a></li>
        </ul>
      </section>
    </div>
  );
}
