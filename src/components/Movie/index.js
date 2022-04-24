import React from 'react';

export default function Movie (params) {
    return <div id={params.id}>
        <img 
        className='poster' 
        src={params.image} 
        alt={`Movie: ${params.title}`} 
        />
    </div>
}

