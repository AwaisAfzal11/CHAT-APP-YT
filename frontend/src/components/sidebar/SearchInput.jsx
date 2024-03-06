import React from 'react'
import { FaSearchDollar } from "react-icons/fa";
const SearchInput = () => {
  return (
    // search bar, symbol and divider
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search ... ' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <FaSearchDollar className='h-6 w-6 ouline-none'/>
        </button>
    </form>

  )
}


export default SearchInput


// Search Input Starter Code
/*
import React from 'react'
import { FaSearchDollar } from "react-icons/fa";
const SearchInput = () => {
  return (
    // search bar, symbol and divider
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search ... ' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <FaSearchDollar className='h-6 w-6 ouline-none'/>
        </button>
    </form>

  )
}


export default SearchInput
 */