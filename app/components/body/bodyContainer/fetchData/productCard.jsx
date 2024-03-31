import Image from 'next/image'
import React from 'react'

const ProductCards = ({ info }) => {
  const { id, title, price, description, category, image } = info || {}

  return (

    <React.Fragment>{
     
        <div className='custom-card'>
          <ul>
            <li className='title'>{title}</li>
            <li className='category'>{"Category : " + category}</li>
            <img className='img' src={image} alt={title} />
            <li className='price'>{price} USD</li>
          </ul>
        </div>

      


    }
    </React.Fragment>

  )
}

export default ProductCards