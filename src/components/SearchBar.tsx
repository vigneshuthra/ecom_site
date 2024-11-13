"use client";

import Image from 'next/image';
import React from 'react'

const SearchBar = () => {
  return (
    <form className='flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1 '>
      <input type="text" placeholder='Search' />
      <button className='cursor-pointer'>
        <Image src="/search.png" alt={''} width={16} height={16}/>
      </button>
    </form>
  )
}

export default SearchBar