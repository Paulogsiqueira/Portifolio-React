import { ReactElement } from 'react'
import About from '@/pages/about/About'
import Contact from '@/pages/contact/Contact'
import Home from '@/pages/home/Home'
import Projects from '@/pages/projects/Projects'
import Skills from '@/pages/skills/Skills'
import Navbar from '@/components/navbar/Navbar'
import '@/styles/layout/Layout.sass'

const Layout: React.FC = (): ReactElement => {

  return (
    <div className='layout'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Layout