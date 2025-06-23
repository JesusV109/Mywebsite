import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen p-8 sm:p-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Contact Me</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
          I’d love to hear from you! Feel free to reach out using the form below or via social media.
        </p>
      </header>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Send a Message</h2>
        <form
          action="#"
          method="POST"
          className="grid gap-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 p-2 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 p-2 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-2 p-2 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Social Media Links */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
        <div className="flex justify-center gap-6">
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
        </div>
      </section>
    </div>
  );
}
