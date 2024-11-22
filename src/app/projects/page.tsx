export default function Projects() {
  const githubProjects = [
    {
      name: "Clock-Alarm with LED Matrix Display",
      description: "Project Description: Real-Time Clock with LED Matrix Display, Buzzer Alarm, and Ultrasonic Sensor Control This project is a versatile real-time clock (RTC) system built using an Arduino, a DS3231 RTC module, an LED matrix display, a buzzer, and an ultrasonic sensor. The primary function of this project is to display the current time on the LED matrix and trigger an alarm at a specified time each day. The ultrasonic sensor serves as an additional feature that allows the user to silence the buzzer alarm by detecting proximity.",
      link: "https://github.com/JesusV109/alarmClock",
    },
    {
      name: "Carbon Footprint Calculator with leaderboard",
      description: "A Next.js project initialized with create-next-app, featuring ESLint for code quality, Tailwind CSS for styling, and Prisma for database management. It integrates the Google Maps API for transit route information. Key directories include prisma/ for database configuration, public/ for static assets, and src/ for source code. While the README.md outlines setup steps, it lacks detailed feature descriptions. This project focuses on creating a web application with utility-first styling and transit route functionality.",
      link: "https://github.com/JesusV109/hackru",
    },
    {
      name: "A SQL database for a pizzeria",
      description: "SQL database designed to manage various operations of a pizzeria, including customer orders, inventory tracking, employee scheduling, and menu items. The repository includes a pizza.sql file, which likely contains the SQL schema and data necessary to set up the database. Additionally, a README.md file is present, providing basic information about the project. This repository serves as a foundational tool for efficiently handling the day-to-day operations of a pizza restaurant.",
      link: "https://github.com/JesusV109/pizza"
      
    },
  ];

  const videos = [
    {
      title: "Clock-Alarm demostration",
      videoUrl: "/alarm.mov",
    },
    {
      title: "Another Video Showcase",
      videoUrl: "https://www.youtube.com/embed/your-other-video-id",
      type: "local",
    },
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        My Projects
      </h1>

      {/* GitHub Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">GitHub Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {githubProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Videos</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4">{video.title}</h3>
              {video.type === "youtube" ? (
                <div className="w-full aspect-w-16 aspect-h-9">
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              ) : (
                <video
                  src={video.videoUrl}
                  controls
                  className="w-full h-64 rounded-lg"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}