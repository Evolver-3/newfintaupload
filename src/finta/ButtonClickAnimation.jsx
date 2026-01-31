
import  { useState,useRef, useEffect } from "react";
import { motion, AnimatePresence,useInView } from "motion/react";


const ButtonClickAnimation = ({children,heading,text,logo,className=''}) => {
  
const [autoPlay,setAutoPlay]=useState(false);
const [showCard,setShowCard]=useState(false);
const [showBtn,setShowBtn]=useState(false);
const[play,setPlay]=useState(false);

const containerRef=useRef(null);

const isInView=useInView(containerRef,{once:true})

const waitingTime=(ms)=>new Promise((res)=>setTimeout(res,ms))

useEffect(()=>{
  if(!isInView)return
  
  const startAutoAnimation=async()=>{
    for(let i=0;i<3;i++){

      setShowCard(true)
      await waitingTime(5000)
      setShowCard(false)
      await waitingTime(800)
    }

    setAutoPlay(false)
    setShowBtn(true)
  }
  startAutoAnimation()
},[isInView])

const handlePlay=async()=>{
  if(play)return

  setPlay(true)
  setShowBtn(false)

  setShowCard(true)
  await waitingTime(5000)
  setShowCard(false)

  setPlay(false)
  setShowBtn(true)
}

  return (
    <div className="container">
      <div className="relative h-full w-full min-h-100 p-6 lg:px-16 lg:pb-10">
        <div className="flex h-full flex-col justify-end">

          <div className="absolute top-0 left-1/2 flex w-full max-w-106 -translate-x-1/2 justify-center pt-6 lg:pt-10">
            <div className="relative min-h-45 w-full sm:max-w-106"
            ref={containerRef}>

              <div className="absolute inset-0 flex items-center justify-center min-h-45 w-full">

                <AnimatePresence>
                  {showCard && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 20 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute"
                    >
                      {children}
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {showBtn &&!play && !autoPlay && (
                    <motion.div
                      onClick={handlePlay}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="bg-white shadow-finta flex items-center justify-center 
                                 hover:bg-linear-to-b hover:from-neutral-200 hover:to-neutral-300
                                 cursor-pointer rounded-full p-3"
                    >
                      <svg width="25" height="25" viewBox="0 0 12 12">
                        <circle cx="6" cy="6" r="0" fill="white" />
                        <path
                          d="M8.99949 5.93884L4.55282 8.62718L4.44799 3.43208L8.99949 5.93884Z"
                          fill="#211212"
                        />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-y-3 sm:mx-auto sm:max-w-md sm:items-center sm:text-center">
            <h2 className='text-blue-600 flex items-center gap-x-2 uppercase text-[11px] leading-4 font-bold '>
              {logo}
              {heading}
            </h2>
            <p className={`font-book text-sm md:text-base ${className}`}>
              {text}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ButtonClickAnimation