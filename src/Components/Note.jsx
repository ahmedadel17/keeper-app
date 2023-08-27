import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


function Note({noteTitle,noteContent,delet,id}) {

  return (
    <div className='border w-60 p-4 m-4 shadow-lg rounded-lg bg-white Mclaren relative'>
      <h3 className='text-lg font-bold capitalize'>{noteTitle}</h3>
      <p>{noteContent}</p>
      <p onClick={()=>delet(id)} className='absolute right-2 text-red-700 bottom-1'><DeleteIcon /></p>
    </div>
  )
}

export default Note
