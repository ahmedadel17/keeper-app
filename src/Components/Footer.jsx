import React from 'react'

function Footer() {
  return (
    <div className=' text-gray-600 capitalize fixed bottom-0 w-full text-center text-xl py-2 '>
      <h3 >copyright @{new Date().getFullYear()}</h3>
    </div>
  )
}

export default Footer
