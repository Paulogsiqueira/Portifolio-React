import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Layout from './components/layout/Layout'
import Navbar from './components/navbar/Navbar'


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Layout />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
