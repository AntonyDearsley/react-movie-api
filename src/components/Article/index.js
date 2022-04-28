import React from 'react'
import { useLocation } from 'wouter'

export default function Article({ children , url}) {
  const [, pathLocation] = useLocation()
  
  const handleClick = () => {
    pathLocation('/404')
  }

  return <div key={url} className='article' onClick={handleClick}>
    {children}
  </div>
  
}
