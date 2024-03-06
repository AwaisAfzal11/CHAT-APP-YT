import React from 'react'
import Messages from './Messages'

const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        <>
            <div className='bg-slate-500 py-4 mb-2 px-2'>
            {/* Header  */}
            <span className='label-text'>To:</span>
            <span className='text-gray-500 font-bold'>Walter White</span>
            <Messages/>
            {/* <MessageInput/>  */}
            </div>

        </>
    </div>
  )
}

export default MessageContainer