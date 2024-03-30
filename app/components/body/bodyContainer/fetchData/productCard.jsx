import Image from 'next/image'
import React from 'react'

const ProductCards = ({info}) => {
    const {id, title,price, description, category, image} = info || {}
    // console.log(id, title,price, description, category, image, "infooo log")
 
  return (  

    <React.Fragment>
     <div className='custom-card'>
      <img className='img' src={image} alt={title}  />
      <ul>
        <li className='font-bold'>{title}</li>
        <li>{category}</li>
        <li className='text-xs'>{price} USD</li>
      </ul>
    </div>
  </React.Fragment>
  
  )
}

export default ProductCards