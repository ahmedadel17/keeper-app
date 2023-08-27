import {React,useState} from 'react'
// import notes from '../notes'
import AddIcon from '@mui/icons-material/Add';
function Addnote({submit,change,content,title}) {
     
   
   
  return (
    <div className='border  bg-white container mx-auto w-[300px] lg:w-[600px] md:w-[300px] sm:w-[300px] rounded-lg my-4 shadow-lg relative'>
      <form action="" 
      onSubmit={submit}
      className='flex flex-col justify-center  mx-auto rounded-lg'>

          <input type="text" 
          placeholder='Title' 
          className='p-3 rounded-lg w-full focus:outline-none text-lg Mclaren' 
          name='title' 
          value={title} 
          onChange={change}/>

          <textarea 
          name="content"
          id="note" 
          cols="30"
          rows="5"
          className='p-3 rounded-lg w-full resize-none focus:outline-none text-lg capitalize Mclaren'
          placeholder='Take note' 
          value={content} 
          onChange={change}></textarea>
          <button className='border bg-yellow-400 w-14 h-14 rounded-full text-white absolute top-48  right-4'><AddIcon/></button>
      </form>
    </div>
  )
}

export default Addnote
