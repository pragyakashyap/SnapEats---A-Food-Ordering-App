import Header from "../header"
import Navbar from "../navbar"
import McDonaldsHeader from "./McDonaldHeader"
import "./product.css"

const Product = () => {
  return (
    <div className="product-page">
        <Navbar/>
        <Header/>
        <McDonaldsHeader/>
    </div>
  )
}

export default Product