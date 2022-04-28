import React, { useState } from 'react'
import { useLocation } from 'wouter'
import Menu from '../../components/Menu'
import "./index.css"

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [, pushLocation] = useLocation()

    const handleSubmit = e => {
        e.preventDefault()
        keyword === '' ? pushLocation('/404') 
        : pushLocation(`/search/${keyword}`)
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    return  <div id='container' className='home'>
                <Menu/>
                <div className='border w-screen flex justify-center items-center'>
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Search a title here..." onChange={handleChange} 
                        type='text' value={keyword} className='rounded-full p-2 w-96'/>
                    </form>
                </div>
            </div>
}