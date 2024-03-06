import React, { Component } from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-1g shadow-md backdrop-blur-1g bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'> SignUp</h1>
        
        <form>
          <div>
            <label className='label p-2'>
            <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='Walter White' className='w-full input input-bordered h-10' />
          </div> 
            
          <div>
          <label className='label p-2'>
          <span className='text-base label-text'>Username</span>
          </label>
          <input type='text' placeholder='Heisenberg' className='w-full input input-bordered h-10' />          
          </div>

          <div>
          <label className='label '>
          <span className='text-base label-text'>Password</span>
          </label>
          <input type='text' placeholder='4 digit pin' className='w-full input input-bordered h-10' />          
          </div>

          <div>
          <label className='label '>
          <span className='text-base label-text'>Confirm Password</span>
          </label>
          <input type='text' placeholder='repeat it' className='w-full input input-bordered mt-2 h-10' />          
          </div>

          {/* GENDER CHECKBOX GOES HERE */}
          <GenderCheckbox/>

          <a href="#" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>Already have an account</a>

          <div>
          <button className='btn btn-block btn-sm mt-2'>SignUp</button>
          </div>

        </form>

      </div>
     </div>  
  )
}

export default SignUp




// Starter Code for SignUp Component
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//   return (
//      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-1g shadow-md backdrop-blur-1g bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'> SignUp</h1>
        
//         <form>
//           <div>
//             <label className='label p-2'>
//             <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input type='text' placeholder='Walter White' className='w-full input input-bordered h-10' />
//           </div> 
            
//           <div>
//           <label className='label p-2'>
//           <span className='text-base label-text'>Username</span>
//           </label>
//           <input type='text' placeholder='Heisenberg' className='w-full input input-bordered h-10' />          
//           </div>

//           <div>
//           <label className='label '>
//           <span className='text-base label-text'>Password</span>
//           </label>
//           <input type='text' placeholder='4 digit pin' className='w-full input input-bordered h-10' />          
//           </div>

//           <div>
//           <label className='label '>
//           <span className='text-base label-text'>Confirm Password</span>
//           </label>
//           <input type='text' placeholder='repeat it' className='w-full input input-bordered mt-2 h-10' />          
//           </div>

//           {/* GENDER CHECKBOX GOES HERE */}
//           <GenderCheckbox/>

//           <a href="#" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>Already have an account</a>

//           <div>
//           <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//           </div>

//         </form>

//       </div>
//      </div>  
//   )
// }

// export default SignUp