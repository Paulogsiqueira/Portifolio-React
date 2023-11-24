import { NavLink } from 'react-router-dom'
import '@/styles/navbar/Navbar.sass'

const Footer = () => {
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <ul>
          <li>
            <NavLink to="/" className="navbar-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link">Sobre mim</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="navbar-link">Projetos</NavLink>
          </li>
          <li>
            <NavLink to="/technologies" className="navbar-link">Tecnologias</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link">Contato</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer