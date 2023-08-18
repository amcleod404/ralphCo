import Header from "./components/Header"
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Container } from 'react-bootstrap'
import ScrollToTop from "./components/ScrollToTop"
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
    <ScrollToTop></ScrollToTop>
      <Header></Header>
      <main className='py-3'>
          <Container>
            <Outlet></Outlet>
          </Container>
        </main>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
    </>
  )
}

export default App