import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex items-center gap-8 justify-between bg-white ' >
        <div className='flex gap-5 items-center' >
            <h2 className='bg-purple-500 p-1 rounded-lg text-white text-sm px-2 ' >
            🔥 Join Membership for $9.99/M
            </h2>
        </div>
          <UserButton />
    </div>
  )
}

export default Header