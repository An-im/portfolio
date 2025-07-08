import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import DownloadCV from './components/DownloadCV'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <DownloadCV />
      <Contact />
    </div>
  )
}
