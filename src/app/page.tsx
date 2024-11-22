import Image from "next/image";


export default function Home() {
  return (

    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="row-start-1 text-center">
        <Image
          src="/me.jpg" // Replace with your profile picture
          alt="Your Name"
          width={120}
          height={120}
          className="rounded-full border-2 border-gray-300 dark:border-gray-700 shadow-lg"
          priority
        />
        <h1 className="text-2xl sm:text-4xl font-bold mt-4">Jesus Vazquez</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
          Software Engineer | Machine Learning Enthusiast | Creator
        </p>
      </header>

      {/* Main Content */}
      <main className="row-start-2 flex flex-col items-center gap-12">
        {/* About Section */}
        <section className="text-center max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            I&#39;m a passionate software engineer with a focus on Machine Learning
            and web development. I enjoy building intuitive, scalable
            applications and exploring new technologies. When I&#39;m not coding,
            you can find me exploring the outdoors or experimenting with AI
            models.
          </p>
        </section>

        {/* Links Section */}
        <section className="flex flex-col sm:flex-row gap-4">
          <a
            href="/about"
            className="rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors px-6 py-3 text-sm sm:text-base shadow-md"
          >
            About Me
          </a>
          <a
            href="/projects"
            className="rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors px-6 py-3 text-sm sm:text-base shadow-md"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors px-6 py-3 text-sm sm:text-base shadow-md"
          >
            Contact Me
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
        <a
          href="https://github.com/JesusV109"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-gray-800 dark:hover:text-gray-200"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jesus-vazquez-02b450202/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-gray-800 dark:hover:text-gray-200"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
