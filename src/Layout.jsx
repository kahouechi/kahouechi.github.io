import Header from './components/Header/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout