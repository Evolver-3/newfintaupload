import React, { useState ,useEffect} from 'react'
import {AnimatePresence, motion} from 'motion/react'
import DarkBtn from './Darkmode/DarkBtn';

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
    
      <motion.div
      animate={{
        boxShadow:scroll ? "var(--shadow-finta)":"",
        background:scroll ? "white":"transparent"
      }}
      transition={{duration:0.4}}
      className='fixed w-full opacity-95 z-20 '>
       
      <div className='flex justify-around  items-center py-4 text-md relative text-foreground '>
        <div className='flex justify-between '>
          <img src='/finta-icon-light.svg' className='w-5'></img>
          <h2 className='text-[20px] font-semibold ml-1'>Finta</h2>

        </div>
        <div className=' gap-5 items-center hidden md:flex'>
          
          {navItems.map((item)=>(
            <a href={item.href} key={item.title} className=' text-sm hover:text-neutral-700'>{item.title}</a>
          ))}

          <button className='bg-blue-500 rounded-md px-4 py-1.5 text-white text-sm  hover:bg-blue-600 cursor-pointer font-semibold text-shadow-new'>Get started</button>

          
        </div>

        <button className='text-xl cursor-pointer md:hidden' onClick={()=>setOpen(!open)}>
          <i className='bx bx-menu'></i>
        </button>

        <DarkBtn/>
        
      </div>
      <AnimatePresence >
      {open && (
        
        <motion.div
        initial={{opacity:0,x:"100%"}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:"100%"}}
        transition={{type:"spring",stiffness:100,damping:20}}
        className='fixed flex flex-col justify-between px-10 md:px-50 items-center py-4  text-md bg-white dark:bg-gray-500 md:hidden rounded-md mx-3 w-[95%] top-2 shadow-strong '>

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
        
        </motion.div>
      
      )}
      </AnimatePresence>
      </motion.div>
      </>
 
    
  )
}

export default Navbar