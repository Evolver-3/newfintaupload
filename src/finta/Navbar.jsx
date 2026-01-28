import Container  from './Container'
import React, { useState ,useEffect} from 'react'
import {motion} from 'motion/react'

const Navbar = () => {
  const navItems=[{title:"Founders",href:"/Founders"},
    {title:"Guide",href:"/Guide"},
    {title:"Pricing",href:"/Pricing"},
    {title:"Log In",href:"/log in"}
  ]

  const [scroll,setScroll]=useState(false);

  useEffect(() => {
  const handleScroll = () => {
  if (window.scrollY > 70) {
  setScroll(true);
  } else {
  setScroll(false);
  }
  };
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [open,setOpen]=useState(false)
  return (<>
    
      <motion.div className='fixed w-full bg-white opacity-95 z-20 '>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:scroll ? 1:0}}
        transition={{duration:0.3}}

        className='absolute inset-0 py-4 shadow-finta z-50 '></motion.div>
      <div className='flex justify-around  items-center py-4 text-md relative '>
        <div className='flex justify-between '>
          <img src='/finta-icon-light.svg' className='w-5'></img>
          <h2 className='text-[20px] font-semibold ml-1'>Finta</h2>

        </div>
        <div className=' gap-5 items-center hidden md:flex'>
          
          {navItems.map((item)=>(
            <a href={item.href} key={item.title} className='text-black text-sm hover:text-neutral-700'>{item.title}</a>
          ))}

          <button className='bg-blue-500 rounded-md px-4 py-1.5 text-white text-sm  hover:bg-blue-600 cursor-pointer font-semibold text-shadow-new'>Get started</button>

          
        </div>

        <button className='md:hidden cursor-pointer' onClick={()=>setOpen(!open)}>
          <i className='bx bx-menu'></i>
        </button>
        
      </div>
      {open && (
        <div className='fixed flex flex-col justify-between px-10 md:px-50 items-center py-4  text-md bg-white md:hidden rounded-md mx-3 w-[95%] top-2 shadow-strong '>

        <div className='flex justify-between gap-3 '>
          <img src='/finta-icon-light.svg' className='w-5'></img>
          <h2 className='text-[20px] font-semibold ml-1'>Finta</h2>

        </div>
        <div className=' gap-3 items-center flex flex-col py-4'>
          
          {navItems.map((item)=>(
            <a href={item.href} key={item.title} className='hover:text-neutral-500'>{item.title}</a>
          ))}

          <button className='bg-blue-500 rounded-md px-4 py-1.5 text-white text-sm  hover:bg-blue-600 cursor-pointer font-semibold text-shadow-new'>Get started</button>

          
        </div>

        <button className='md:hidden absolute top-3 right-2 cursor-pointer' onClick={()=>setOpen(false)} >
          <i className='bx bx-x bx-sm text-neutral-600 hover:text-neutral-400'></i>
        </button>
        
      </div>
        

      )}
      </motion.div>
      </>
 
    
  )
}

export default Navbar