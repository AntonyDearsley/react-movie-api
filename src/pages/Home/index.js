import React, { useState } from 'react'
import { useLocation } from 'wouter'

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [, pushLocation] = useLocation()

    const handleSubmit = e => {
        e.preventDefault()
        keyword === '' ? pushLocation('/404') 
        : pushLocation(`/searchFilm/${keyword}`)
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }
    return  <div id='container' className='bg-zinc-900 h-screen  flex justify-center items-center'>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Search a film here..." onChange={handleChange} type='text' value={keyword}  className='rounder focus:none'/>
                </form>
            </div>
}