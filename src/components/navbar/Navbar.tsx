import '@/styles/navbar/Navbar.sass'
import Menu from '../menu/Menu'
import menuHamb from '/Navbar/menu.png'
import { useDispatch } from 'react-redux'
import { menuOpen} from '@/redux/sliceMenu'



const Navbar = () => {
  const dispatch = useDispatch()

  const openMenu = () => {
    dispatch(menuOpen())
  }

  return (
    <div className='navbar'>
      <div className='navbar-menu'>
        <img src={menuHamb} onClick={() => openMenu()}/>
      </div>
      <div className='navbar-title'>
        <h1>Portifólio</h1>
      </div>
      <Menu/>

    </div>
  )
}

export default Navbar