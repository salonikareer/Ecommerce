 import Footer from '../Footer/Footer'
import Navbar from '../NavBar/Navbar'

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout