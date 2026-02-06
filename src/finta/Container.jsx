import React from 'react'

const Container = ({children}) => {
  return (
    <div className='lg:mx-auto min-w-106.25 max-w-4xl h-full'>
      {children}
    </div>
  )
}

export default Container