import { motion } from "motion/react";

const items =[
    {
      "id": 1,
      "quote": '"I’ve become a huge fan of Finta. The platform is super easy to use, intuitive, and requires zero effort. Customer support is second to none."',
      "name": "Avi Hercenberg",
      "role": "Founder",
      "company": "Sessionary",
      "rating": 5
    },
    {
      "id": 2,
      "quote": '"Really easy onboarding and great team to work with!"',
      "name": "Alex Fuster",
      "role": "Founder",
      "company": "Astro",
      "rating": 5
    },
    {
      "id": 3,
      "quote": '"Really easy to use and get started. Helpful to keep on top of burn and accounting related issues."',
      "name": "Abhishey Ray",
      "role": "Founder",
      "company": "Octopipe",
      "rating": 5
    },
    {
      "id": 4,
      "quote": '"Incredible onboarding and support by Andy! We love working with Finta."',
      "name": "Aidan Lee",
      "role": "Founder",
      "company": "Aftercare",
      "rating": 5
    },
    {
      "id": 5,
      "quote": '"Finta is incredible — it took less than 10 minutes to do our bookkeeping for the entire year."',
      "name": "Bryant Lee",
      "role": "Founder",
      "company": "Vaero",
      "rating": 5
    },
    {
      "id": 6,
      "quote": '"Super easy onboarding process, and takes away the pain of having to file business taxes."',
      "name": "Tejas Hosangadi",
      "role": "Founder",
      "company": "Preloop",
      "rating": 5
    },
        {
      "id": 7,
      "quote": '"I’ve become a huge fan of Finta. The platform is super easy to use, intuitive, and requires zero effort. Customer support is second to none."',
      "name": "Avi Hercenberg",
      "role": "Founder",
      "company": "Sessionary",
      "rating": 5
    },
    {
      "id": 8,
      "quote": '"Really easy onboarding and great team to work with!"',
      "name": "Alex Fuster",
      "role": "Founder",
      "company": "Astro",
      "rating": 5
    },
    {
      "id": 9,
      "quote": '"Really easy to use and get started. Helpful to keep on top of burn and accounting related issues."',
      "name": "Abhishey Ray",
      "role": "Founder",
      "company": "Octopipe",
      "rating": 5
    },
    {
      "id": 10,
      "quote": '"Incredible onboarding and support by Andy! We love working with Finta."',
      "name": "Aidan Lee",
      "role": "Founder",
      "company": "Aftercare",
      "rating": 5
    },
    {
      "id": 11,
      "quote": '"Finta is incredible — it took less than 10 minutes to do our bookkeeping for the entire year."',
      "name": "Bryant Lee",
      "role": "Founder",
      "company": "Vaero",
      "rating": 5
    },
    {
      "id": 12,
      "quote": '"Super easy onboarding process, and takes away the pain of having to file business taxes."',
      "name": "Tejas Hosangadi",
      "role": "Founder",
      "company": "Preloop",
      "rating": 5
    }
  ]

export default function Upside() {
  return (
    <div className="relative overflow-hidden ">
      <motion.div
        className=" m-4 flex flex-col gap-3"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 44,
          repeat: Infinity,
          ease:"linear",
        }}
      >
        {[...items,...items].map((test,index)=>(
            <div key={index} className='bg- shadow-finta bg-white rounded-xl  text-left px-5 py-4 flex flex-col items-start gap-4 '>

              <p className='text-sm text-neutral-900 leading-4 mb-2'>{test.quote}</p>

              <div className="flex gap-3 items-center">

                  <div className="w-10 h-10 rounded-full bg-blue-500 shadow-weird"></div>

                  <div >
    
                  <h2 className="text-[14px] text-neutral-700 font-semibold">{test.name}</h2>
                  <h3 className="text-neutral-500  font-semibold text-xs ">{test.role}</h3>

                  </div>
                </div>
            </div>
            ))}
      </motion.div>
    </div>
  );
}


