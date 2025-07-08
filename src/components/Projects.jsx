const projects = [
  {
    title: 'Mini CRM',
    description: 'A simple client management app using HTML, CSS and localStorage. Includes a form and client list.',
    github: 'https://github.com/An-im/mini-crm',
    demo: 'https://an-im.github.io/mini-crm/',
  },
  {
    title: 'Administrative Form',
    description: 'Form with basic validation for data entry tasks, built for office-style workflow practice.',
    github: 'https://github.com/An-im/admin-form',
    demo: 'https://an-im.github.io/admin-form/',
  },
  {
    title: 'Landing Page',
    description: 'Responsive landing page built with TailwindCSS. Includes benefit sections and a contact form.',
    github: 'https://github.com/An-im/landing-page',
    demo: 'https://an-im.github.io/landing-page/',
  },
  {
    title: 'Virtual Workspace',
    description: 'A minimalist productivity dashboard with a calendar, Pomodoro timer, daily to-do list, sticky notes, and progress summary. Built with React, Vite, and TailwindCSS.',
    github: 'https://github.com/An-im/virtual-workspace',
    demo: 'https://an-im.github.io/virtual-workspace/'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
