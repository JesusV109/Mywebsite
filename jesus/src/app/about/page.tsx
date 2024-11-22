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
          Hi, I’m Jesus Vazquez, a passionate software engineer with a focus on
          web development and Machine Learning. Over the years, I have honed my
          skills in building intuitive, scalable applications and exploring
          cutting-edge technologies.
        </p>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-4">
          Outside of coding, I enjoy outdoor adventures and experimenting with
          AI models. I’m always looking for exciting projects and
          collaborations.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Programming Languages: JavaScript, Python, Java</li>
          <li>Frameworks: React, Next.js, TensorFlow</li>
          <li>Tools: Docker, Git, Prisma</li>
          <li>Cloud Platforms: AWS, Azure</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div>
          <h3 className="font-bold">Software Engineer Intern</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">XYZ Company</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            June 2023 - August 2023
          </p>
          <ul className="list-disc list-inside text-sm">
            <li>Developed a React application to automate workflows.</li>
            <li>Integrated CI/CD pipelines for faster deployments.</li>
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      
    </div>
  );
}
