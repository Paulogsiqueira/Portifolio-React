import { NavHashLink as Link } from "react-router-hash-link"
import { useSelector, useDispatch } from 'react-redux'
import { menuClose, useMenu } from '@/redux/sliceMenu'
import Modal from 'react-modal';
import close from '/Navbar/close.png'
import '@/styles/menu/Menu.sass'

const Menu = () => {

    const menu = useSelector(useMenu)
    const menuIsOpen = (menu.isOpen)
    const dispatch = useDispatch()


    const closeMenu = () => {
        dispatch(menuClose())
    }

    return (
        <div>
            <Modal
            style={{
                overlay: {
                  backgroundColor: 'transparent',
                },
              }}
                isOpen={ menuIsOpen }
                onRequestClose={ closeMenu }
                shouldCloseOnEsc={ true}
                className='modal-content' >
                <div className='modal-hamb'>
                    <div className='modal-close'>
                        <img src={close} onClick={() => closeMenu()} />
                    </div>
                    <ul>
                        <li>
                            <Link className='menu-link' smooth to="#home" onClick={() => { closeMenu() }}>Home</Link>
                        </li>
                        <li>
                            <Link className='menu-link' smooth to="#about" onClick={() => { closeMenu() }}>Sobre mim</Link>
                        </li>
                        <li>
                            <Link className='menu-link' smooth to="#projects" onClick={() => { closeMenu() }}>Projetos</Link>
                        </li>
                        <li>
                            <Link className='menu-link' smooth to="#skills" onClick={() => { closeMenu() }}>Habilidades</Link>
                        </li>
                        <li>
                            <Link className='menu-link' smooth to="#contact" onClick={() => { closeMenu() }}>Contatos</Link>
                        </li>
                    </ul>
                </div>
            </Modal>
        </div >

    )
}

export default Menu