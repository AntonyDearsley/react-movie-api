import React from 'react';

export default function Element (params) {
    return <div id={params.id} key={params.id}>
        <img 
        className='poster' 
        src={params.image} 
        alt={`Element-${params.type}: ${params.title}`} 
        />
    </div>
}

