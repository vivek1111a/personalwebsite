import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* Header */}
      <div className="bg-blue-500 text-white text-center py-10">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg">
          Full-Stack Developer | Solopreneur | Problem Solver
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-10 px-6 bg-white shadow-lg rounded-lg mt-6 mb-6">
        <div className="text-center mb-6">
          <img src="vivek_.jpg" alt="Vivek Wadate" className="mx-auto" />
          <h2 className="text-2xl font-semibold mt-4">Vivek Wadate</h2>
          <p className="text-gray-600">
            MERN Stack Developer, Third year student at IIT Bombay and
            passionate about coding and technology.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6">Who Am I?</h3>
        <p className="text-gray-700 mt-2">
          I am an Aerospace Engineering student at IIT Bombay. I specialize in
          full-stack web development using the MERN stack—MongoDB for database,
          Express for backend, and React for frontend in a Node environment. I
          have experience developing mobile applications with React Native. I
          use Redux for state management and TypeScript for type safety.
          Currently, I am working on a personal finance management app.
        </p>

        <h3 className="text-xl font-semibold mt-6">My Skills</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Full-Stack Web Development (MERN)</li>
          <li>React Native Mobile App Development</li>
          <li>Redux, Express.js, Passport.js, restful APIs</li>
          <li>API Integration (Kite API, ChatGPT API)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Projects & Interests</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>Chrome Extension</strong>: Created a dark mode extension for
            Cricbuzz Website.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Get in Touch</h3>
        <p className="text-gray-700 mt-2">
          If you'd like to collaborate, discuss a project, or just say hi, feel
          free to connect with me. I would welcome help with my personal finance
          management app.
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Contact Me
        </Link>
      </div>
    </>
  );
}
