import React from 'react'

const url404 = "https://cdn.dribbble.com/users/547471/screenshots/3063720/not_found.gif"

export default function Error404() {
    return  <div id='container' className='bg-[#1b1b1b] h-screen flex justify-center items-center'>
                <img src={url404} alt="error 404" />
            </div>
}
