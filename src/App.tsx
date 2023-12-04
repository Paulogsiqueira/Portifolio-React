import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Layout from './components/layout/Layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
