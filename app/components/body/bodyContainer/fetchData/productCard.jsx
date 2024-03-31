import Image from 'next/image'
import React from 'react'

const ProductCards = ({ info }) => {
  const { id, title, price, description, category, image } = info || {}

  return (

    <React.Fragment>{
     
        <div className='custom-card'>
          <ul>
            <li className='font-bold'>{title}</li>
            <li>{"Category : " + category}</li>
            <img className='img' src={image} alt={title} />
            <li className='text-xs'>{price} USD</li>
          </ul>
        </div>

      


    }
    </React.Fragment>

  )
}

export default ProductCards