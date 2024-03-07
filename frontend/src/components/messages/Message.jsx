import React from 'react'

const Message = () => {
  return (
    // <div className='chat chat-end'>
    <div className='chat chat-end bg-opacity-10 backdrop-blur-lg backdrop-filter bg-white bg-opacity-10 border border-white border-opacity-10 shadow-lg rounded-lg'>

        {/*image of sender  */}
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
            <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/
                account_profile_user_contact_person_avatar_placeholder-512.png" alt="CSS chat_bubble component" />
            
            </div> 
        </div>
        {/* sender message */}
        <div className={'chat-bubble text-white bg-blue-500'}>Hi, How are you.</div>
        {/*time and date*/}
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message






// for glossy look

// import React from 'react';

// const Message = () => {
//   return (
//     <div className='chat chat-end bg-opacity-50 backdrop-blur-lg backdrop-filter bg-white bg-opacity-10 border border-white border-opacity-10 shadow-lg rounded-lg'>
//       {/* image of sender */}
//       <div className='chat-image avatar'>
//         <div className='w-10 rounded-full'>
//           <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="CSS chat_bubble component" />
//         </div>
//       </div>
//       {/* sender message */}
//       <div className='chat-bubble text-white bg-blue-500'>Hi!</div>
//       {/* time and date */}
//       <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
//     </div>
//   );
// };

// export default Message;
