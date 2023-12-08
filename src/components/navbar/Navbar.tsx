import { useDispatch } from 'react-redux'
import { menuOpen } from '@/redux/sliceMenu'
import { AppDispatch } from '@/redux/store'
import { ReactElement } from 'react'
import menuHamb from '/Navbar/menu.png'
import Menu from '../menu/Menu'
import '@/styles/navbar/Navbar.sass'

const Navbar: React.FC = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();

  const openMenu = (): void => {
    dispatch(menuOpen())
  }

  return (
    <div className='navbar'>
      <div className='navbar-menu'>
        <img src={menuHamb} onClick={() => openMenu()} />
      </div>
      <div className='navbar-title'>
        <h1>Portifólio</h1>
      </div>
      <Menu />
    </div>
  )
}

export default Navbar