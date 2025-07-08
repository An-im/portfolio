import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: () => <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: () => <FaCss3Alt className="text-blue-500" /> },
  { name: 'React', icon: () => <FaReact className="text-sky-400" /> },
  { name: 'Git', icon: () => <FaGitAlt className="text-red-500" /> },
  { name: 'TailwindCSS', icon: () => <SiTailwindcss className="text-teal-400" /> },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-2">{skill.icon()}</div>
              <p className="text-gray-700 font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
