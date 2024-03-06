import React from 'react'

const Conversation = () => {
  return (
    // avatar symbol imported
    <div className='flex gap-2 items-center cursor-pointer py-1 p-2 rounded hover:bg-sky-500'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img 
                src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/
                account_profile_user_contact_person_avatar_placeholder-512.png
                alt='user avatar"
                 alt="avatar" 
                 />
            </div>
        </div>
        {/* name, emoji displayed */}
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>John Doe</p>
                <span className='text-x1'>€uro</span>
            </div>
        </div>
        {/* divider line  */}
        <div className='divider my-0  py-0 h-1'/>
    </div>
  )
}

export default Conversation


/*
Starter  Code 
import React from 'react'

const Conversation = () => {
  return (
    // avatar symbol imported
    <div className='flex gap-2 items-center cursor-pointer py-1 p-2 rounded hover:bg-sky-500'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img 
                src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/
                account_profile_user_contact_person_avatar_placeholder-512.png
                alt='user avatar"
                 alt="avatar" 
                 />
            </div>
        </div>
        {/* name, emoji displayed }
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>John Doe</p>
                <span className='text-x1'>€uro</span>
            </div>
        </div>
        {/* divider line  }
        <div className='divider my-0  py-0 h-1'/>
    </div>
  )
}

export default Conversation

*/