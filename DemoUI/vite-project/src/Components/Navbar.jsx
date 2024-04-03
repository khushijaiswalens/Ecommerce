
import './Navbar.css'
import logo from '/src/assets/Logo.png'
import header from '/src/assets/header.png'
import slider2 from '/src/assets/slider2.png'
function Navbar() {
  return (
    <>

      {/* Navbar starts */}
      <div className=" nav container ">
        <div className="nav-items col-5">
         <div className="li-items">
         <li>Shallow</li>
          <li>Accessories</li>
          <li>Category</li> 
         </div>
          <li>Collection</li>
        </div>
      <div className="logo-cont col-7">
        <div className="logo ">
          <img src={logo} alt="" />
        </div>
        <div className="cart-items ">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-user"></i>
          <i className="bi bi-bag"></i>

        </div>
        <div className="hamburger">
        <i class="fa fa-bars"></i>
        </div>
      </div>
      </div>

      {/* Navbar Ends */}
      {/* Header Starts */}
      <div className="container header ">

        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={header} className="d-block w-100" alt="..." />
              <div className="slider-content">
                <div className="sub-title">

                </div>
                <div className="main-title">

                </div>
                <div className="desc">

                </div>
                <span className="btn-primary"></span>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slider2} className="d-block w-100" alt="..." />
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>




      {/* Header ends */}

    </>
  )
}

export default Navbar
