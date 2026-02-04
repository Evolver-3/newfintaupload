import { useState,useEffect } from "react"
import {motion} from 'motion/react'

const DarkBtn = () => {
  const [dark,setDark]=useState(
    localStorage.getItem("theme")==="dark"
  )

  useEffect(()=>{
    if(dark){
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme","dark")
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme","light")
    }
  },[dark])
  return (
    <div className="absolute right-10 top-5">
      <button onClick={()=>setDark(!dark)} className="text-sm dark:text-white text-yellow-500 ">
        {dark?
        (
        <motion.svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
          <path d="M20.71 13.51c-.78.23-1.58.35-2.38.35-4.52 0-8.2-3.68-8.2-8.2 0-.8.12-1.6.35-2.38.11-.35.01-.74-.25-1s-.64-.36-1-.25A10.17 10.17 0 0 0 2 11.8C2 17.42 6.57 22 12.2 22c4.53 0 8.45-2.91 9.76-7.24.11-.35.01-.74-.25-1s-.64-.36-1-.25M12.2 20C7.68 20 4 16.32 4 11.8a8.15 8.15 0 0 1 4.18-7.15c-.03.34-.05.68-.05 1.02 0 5.62 4.57 10.2 10.2 10.2.34 0 .68-.02 1.02-.05C17.93 18.38 15.23 20 12.2 20M16 8l.94-2.06L19 5l-2.06-.94L16 2l-.94 2.06L13 5l2.06.94zm4.25-.5-.55 1.2-1.2.55 1.2.55.55 1.2.55-1.2 1.2-.55-1.2-.55z"></path>
        </motion.svg>
        ):
        (
        <motion.svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
          <path d="M12 17.01c2.76 0 5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12s2.25 5.01 5.01 5.01M12 9c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01-3.01-1.35-3.01-3.01S10.34 9 12 9m-1 13h2v-4h-2zm0-16h2V2h-2zm-9 5h4v2H2zm16 0h4v2h-4zM4.22 18.36l.71.71.71.71 1.41-1.42 1.41-1.41-.7-.71-.71-.7-1.41 1.41zM18.36 4.22l-1.41 1.42-1.41 1.41.7.71.71.7 1.41-1.41 1.42-1.41-.71-.71zm-9.9 2.83L7.05 5.64 5.64 4.22l-.71.71-.71.71 1.42 1.41 1.41 1.41.71-.7zm7.08 9.9 1.41 1.41 1.41 1.42.71-.71.71-.71-1.42-1.41-1.41-1.41-.71.7z"></path>
        </motion.svg>
        )
      }
      </button>

    </div>
  )
}

export default DarkBtn