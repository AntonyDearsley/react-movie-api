import React from 'react';

export default function Movie({id, title, url}) {
    return <div id={id}>
        <p>{url}</p>
        <img src={url} alt={`Movie: ${title}`} />
    </div>
}

