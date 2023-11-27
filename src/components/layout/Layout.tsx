import About from '@/pages/about/About'
import Contact from '@/pages/contact/Contact'
import Home from '@/pages/home/Home'
import Projects from '@/pages/projects/Projects'
import Skills from '@/pages/skills/Skills'
import '@/styles/layout/Layout.sass'

const Layout = () => {
  return (
    <div className='layout'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Layout