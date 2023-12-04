
import styles from './App.module.css'
import Home from './components/Home/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'
import Skills from './components/Skills/Skills.jsx'


function App() {

  return (
    <div className={styles.app}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
