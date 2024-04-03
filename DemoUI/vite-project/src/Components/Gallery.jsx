
import './Slider.css'

import g1 from '/src/assets/g1.png'
import g2 from '/src/assets/g2.png'
import g3 from '/src/assets/g3.png'
import g4 from '/src/assets/g4.png'
import g5 from '/src/assets/g5.png'


function Gallery() {
  return (
    <>

    <div className="gallary" >
      <div className="col"><img src={g1} alt="" /></div>
      <div className="col"><img src={g2} alt="" /></div>
      <div className="col"><img src={g3} alt="" /></div>
      <div className="col"><img src={g4} alt="" /></div>
      <div className="col"><img src={g5} alt="" /></div>
     
      </div>
    </>
  )
}

export default Gallery
