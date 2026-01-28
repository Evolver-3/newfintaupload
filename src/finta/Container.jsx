import React from 'react'

const Container = ({children}) => {
  return (
    <div className='mx-auto max-w-4xl h-full'>
      {children}
    </div>
  )
}

export default Container