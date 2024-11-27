
import "./payment.css"
import Navbar from '../navbar'
import Header from '../header'
import Footer from '../footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"

const Payment = () => {
const navigate=useNavigate()
const navigateBack = ()=>{
    navigate("/checkout")
}


  return (
    <>
    <div className='payment-page'>
        <Navbar/>
        <Header/>
        <div className="order-title">
          <div className="icon" onClick={navigateBack}>
            <FontAwesomeIcon size="lg" icon={faArrowLeft} />
          </div>
          <div className="heading" >
            <h2>Choose and Pay</h2>
            <p></p>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Payment