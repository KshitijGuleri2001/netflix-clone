import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=' flex justify-between font-medium items-center w-full p-4 z-[100] absolute'>
  
     <div className='text-red-600 cursor-pointer text-5xl'>
        NETFLIX
      </div>
      <div className=''>
          <Link to="/SignIn"> <button className='p-4 text-white'>SignIn</button> </Link>
  <Link to="/SignUp">
  <button className=' p-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 '>SignUp</button>
  </Link>      

      </div>
    </div>
  )
}

export default Navbar