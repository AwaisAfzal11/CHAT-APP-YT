import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className='sidebar bg-opacity-10 backdrop-blur-lg backdrop-filter bg-white bg-opacity-10 border border-white border-opacity-10 shadow-lg rounded-lg flex flex-col'>
      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations />
      <div className='mt-auto'>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;



// this  code is acording to the  video
// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import LogoutButton from './LogoutButton'

// const Sidebar = () => {
//   return (
//     // <div className='border-r border-slate-500 p-4 flex flex-col'>
//     <div className='sidebar bg-opacity-10 backdrop-blur-lg backdrop-filter bg-white bg-opacity-10 border border-white border-opacity-10 shadow-lg rounded-lg'>
//         <SearchInput/>
//         <div  className='divider px-3'></div>
//         <Conversations/>
//         <div className='mt-auto'>
//           <LogoutButton/>
//         </div>
//         {/* <LogoutButton/> */}
//         {/* // <Searchbar/>
//         // <Conversation/>
//         // <LogoutButton/>*/}
//     </div>
//   );
// }

// export default Sidebar



/*
Starter code for Sidebar
import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput/>
        <div  className='divider px-3'></div>
        <Conversations/>
        <LogoutButton/>
        {/* // <Searchbar/>
        // <Conversation/>
        // <LogoutButton/>}
        </div>
        )
      }
      
      export default Sidebar

*/