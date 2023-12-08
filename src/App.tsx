import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Layout from './components/layout/Layout'
import { useSelector } from 'react-redux'
import { useMenu } from './redux/sliceMenu'

interface Menu {
  isOpen: boolean;
}

function App() {

  const menu: Menu = useSelector(useMenu)
  const menuOpen: boolean =(menu.isOpen)

  return (
    <>
      <BrowserRouter>
        <div className={ menuOpen ? "blurred": ""}>
          <Layout />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
