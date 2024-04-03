
import { useState } from 'react'
import Images from './Images'
import './Products.css'
function Products(props) {
  const [hover, setHover] = useState(false)

  const EnterHandler = () => {
    setHover(true)
  }
  return (
    <>
     <div className="card" onMouseEnter={EnterHandler} onMouseLeave={() => setHover(false)}>
       

       
            <img src={hover ? props.imgHover : props.imgsrc} alt=""  />
       
            <div className="card-body">
                <span className="title">{props.title}</span>
                <br />
                <span className="strike-price"><s>{props.strikeprice}</s></span>
                <span className="price">{props.price}</span>
            </div>
        </div>
  
   
       
       
   
    </>
  )
}

export default Products
