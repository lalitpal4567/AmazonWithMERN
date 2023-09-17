import React, { useState } from 'react'
import "./MultiCardSelection.css"


const MultiCardSelection = () => {
  const [selectedImage, setImage] = useState("images/ipodImages/ipod_bould_x1.png");
  return (
    <div className='img-views'>
        <div className='img-selection'>
          <div className='img-box'><img src="images/ipodImages/ipod_bould_x1.png" onMouseEnter={(e)=>setImage("images/ipodImages/ipod_bould_x1.png")}/></div>
          <div className='img-box'><img src="images/ipodImages/ipod_oppo.png" onMouseEnter={(e)=>setImage("images/ipodImages/ipod_oppo.png")}/></div>
          <div className='img-box'><img src="images/ipodImages/ipod_oppo_air32.png" onMouseEnter={(e)=>setImage("images/ipodImages/ipod_oppo_air32.png")}/></div>
          <div className='img-box'><img src="images/ipodImages/ipod_boult.png" onMouseEnter={(e)=>setImage("images/ipodImages/ipod_boult.png")}/></div>
          <div className='img-box'><img src="images/ipodImages/ipod_bould_x1.png" onMouseEnter={(e)=>setImage("images/ipodImages/ipod_bould_x1.png")}/></div>
        </div>
        <div className='selected-img-container'>
          <img className='selected-img' src={selectedImage}/>
        </div>
    </div>
  )
}

export default MultiCardSelection



















































































































// const MultiCardSelection = () => {
//   const [currentImage, setImage] = useState(image);
//   const setPhoto = (event)=>{
//       setImage(event);
//   }
// return (
//   <div>
//     <div>
//       <img src={currentImage}></img>
//     </div>
//     <div className='multiimages'>
//       <img src={image4} onClick={(event) => setPhoto(image4)}/>
//       <img src={image3} onClick={(events) => setPhoto(image3)}/>
//       <img src={image} onClick={(events) => setPhoto(image)}/>
//     </div>
//   </div>
// )
// }