import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Layout from './components/layout/Layout'
import { useSelector } from 'react-redux'
import { useMenu } from './redux/sliceMenu'

function App() {

  const menu = useSelector(useMenu)
  const menuOpen =(menu.isOpen)

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
