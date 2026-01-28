import Container from './Container'
import React from 'react'
import Navbar from './Navbar'
import Body from './Body'

const Lay = () => {

  const changeClickTheme=()=>{
    const currentTheme=document.documentElement.classList.contains("dark")?"light":"dark";

    document.documentElement.classList.toggle("dark");

    localStorage.setItem("theme",currentTheme)
  }
  return (

    <div className='relative bg-radial-[at_50%_0%] from-white via-sky-100 to-b-white shadow-finta pb-10'>

       <Navbar/>
       <Body/>
    

      <button className='fixed text-sm font-mono shdow-soft px-2 py-1 rounded-md top-30 right-10  flex items-center justify-center' onClick={changeClickTheme}>

        <i className='bx  bx-sun bx-sm absolute inset-0  shrink-0 text-yellow-700 dark:scale-0 scale-100 dark:rotate-45 transition-all duration-300 m-auto'></i> 

        <i className='bx  bx-moon absolute bx-sm inset-0 shrink-0 dark:text-neutral-800 dark:scale-100 scale-0 dark:rotate-0 rotate-45 transition-all duration-300 m-auto'></i> 
      </button>
    </div>
  )
}

export default Lay