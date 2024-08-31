import ErrorComponents from "../components/Error/ErrorComponents.jsx"
import Navbar from '../components/Navbar'
import Children from'../components/Children/Children'
import Footer from '../components/Footer/index'

function Error () {
    return (
    <div>
      <Children>
      <Navbar />
    <ErrorComponents />
    </Children>
      <Footer />
    </div>
    )
}

export default Error 