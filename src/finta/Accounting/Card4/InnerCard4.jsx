import React from 'react'

const data = [
  {
    type: "if",
    rows: [
      { field: "Name", operator: "is", value: "Stripe", color: "#744BA6" },
      { field: "Product", operator: "is", value: "Annual plan", color: "#007BFB" }
    ]
  },
  {
    type: "then",
    rows: [
      { field: "Category", operator: "to", value: "Revenue", color: "#A58E41" },
      { field: "Spread", operator: "to", value: "Yearly", color: "#19A35B" }
    ]
  }
];

const SpanElement=({className='',tag})=>{
  return(
    <div className={`${className} rounded-sm shadow-finta flex justify-around items-center mx-1 `}>

      {tag}
      <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
      fill="currentColor" viewBox="0 0 24 24" >

      <path className='text-neutral-500' d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>

      </svg>

    </div>
  )
}


const InnerCard4 = () => {
  return (
    <div className='w-full h-fit container shadow-finta '>
     {
      data.map((item,index)=>(
        <div key={index} className='flex flex-col gap-4 w-55 bg-card'>

          <div className='text-first text-neutral-700 font-semibold px-1 py-1 bg-neutral-200 w-fit rounded-sm'>
            {item.type.toUpperCase()}

          </div>

          <span className=' text-white bg-black rounded-full px-1 w-fit '>+</span>

         {item.rows.map((row,n)=>(
          <div key={n} className='flex w-full text-first'>
            <SpanElement tag={row.field} className='w-[35%] '></SpanElement>
            <SpanElement tag={row.operator} className='w-[15%]'></SpanElement>
            <SpanElement tag={row.value } className='w-[35%]'></SpanElement>
          </div>
         ))}
        </div>
      ))
     }



    </div>
  )
}

export default InnerCard4

