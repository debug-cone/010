import React, { useState } from 'react'

function SingleProductCardComponent( {product} ) {

  const [currentImage, setCurrentImage] = useState(0);
  function handleCurrentImage(index) {
    setCurrentImage(index)
  }

  return (
    <div className='flex items-start justify-between'>
      <div className='flex flex-col gap-[20px]'>
        {/* V SLIKA */}
        <img 
          className='w-[300px]'
          src={product.images[currentImage]} 
          alt={product.title} 
        />
        {/* M SLIKE */}
        <div className='flex items-center gap-2'>
          {product.images.map((el, index) => {
            return (
            <img 
              className={
                index === currentImage 
                ? 
                'w-[100px] active border-2 rounded-[5px] object-cover cursor-pointer' 
                : 
                'w-[100px] border-slate-500 border-2 rounded-[5px] object-cover cursor-pointer'
              }
              key={index} 
              src={el} 
              alt={product.title} 
              onClick={() => handleCurrentImage(index)}
            />
            )
          })}
        </div>
      </div>

      <div>
        {/* CONTENT */}
      </div>
    </div>
  )
}

export default SingleProductCardComponent