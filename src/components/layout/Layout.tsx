import NavBar from '../navbar/Navbar'
import PageRoutes from '../../routes/PageRoutes'
import '../../styles/layout/Layout.sass'

const Layout = () => {
  return (
    <div className='layout'>
        <NavBar />
        <PageRoutes />
    </div>
  )
}

export default Layout