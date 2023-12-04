import '@/styles/navbar/Navbar.sass'
import { HashLink as Link } from "react-router-hash-link"


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <ul>
          <li>
            <Link className='navbar-link' smooth to="#home">Home</Link>
          </li>
          <li>
            <Link className='navbar-link' smooth to="#about">Sobre mim</Link>
          </li>
          <li>
            <Link className='navbar-link' smooth to="#projects">Projetos</Link>
          </li>
          <li>
            <Link className='navbar-link' smooth to="#skills">Habilidades</Link>
          </li>
          <li>
            <Link className='navbar-link' smooth to="#contact">Contatos</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar