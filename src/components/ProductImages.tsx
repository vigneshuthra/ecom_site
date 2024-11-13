"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/707579/pexels-photo-707579.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/3163877/pexels-photo-3163877.jpeg?auto=compress&cs=tinysrgb&w=400",
  },

]


const ProductImages = () => {

  const [index, setIndex] = useState(0);

  return (
    <div className=''>
      <div className='h-[500px] relative'>
        <Image src={images[index].url} alt={''} fill sizes='50vw' className='object-cover rounded-md' />
      </div>

      <div className='flex justify-between gap-4 mt-8 cursor-pointer'>
        {images.map((img, i) => (
          <div className='w-1/4 h-32 relative gap-4 mt-8' key={img.id} onClick={() => setIndex(i)}>
            <Image src={img.url} alt={''} fill sizes='30vw' className='object-cover rounded-md' />
          </div>
        ))}

      </div>
    </div>
  )
}

export default ProductImages