import React from 'react'

const Container = ({children}) => {
  return (
    <div className='mx-auto max-w-7xl bg-background px-4 min-w-xl'>
      {children}
    </div>
  )
}

export default Container