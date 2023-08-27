import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import Example from './Components/Example'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Note from './Components/Note';
import Addnote from './Components/Addnote';
import notes from './notes';
// import './App.css'

function App() {
  // const storednotes=JSON.parse(localStorage.getItem('notes'))
  const stored=JSON.parse(localStorage.getItem('items'))
  const[notestatearray,setnotesarray]=useState(stored);

  const[note,setnote]=useState({
    title:'',
    content:''
})

const handlechange=(e)=>{
    setnote((prev)=>{
         return {
              ...prev,
              [e.target.name]:e.target.value
         }
    })
}
  const handlesubmit=(e)=>{
    e.preventDefault()
    setnote({title:'',content:''});
    setnotesarray((prev)=>[...prev,note])
    localStorage.setItem('notesarr',notestatearray)
   

}
useEffect(()=>{
  localStorage.setItem('items',JSON.stringify(notestatearray));

},[notestatearray])
const handledelete=(id)=>{
  setnotesarray(prev=>prev.filter((item,index)=>index!=id))
  
  
}


  return (
    <>
    <div className="bg-gray-200 h-screen overflow-scroll">
    <Header/>
    <Addnote submit={handlesubmit} change={handlechange} content={note.content} title={note.title}/>
   <div className='flex flex-wrap border items-center justify-center md:justify-start lg:justify-start'>  
   {notestatearray.map((note,index)=>{
      return <Note key={index} id={index} noteTitle={note.title} noteContent={note.content} delet={handledelete} />
    })}
   </div>
    <Footer/>
    {/* <Example/> */}
    </div>
    </>
  )
  }

export default App
