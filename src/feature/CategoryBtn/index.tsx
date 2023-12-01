"use client";

import React, { useState } from 'react';

export default function CategoryBtn(){
    const [color, setColor] = useState('#B99162');

    const style = {
        color: '#fefefe',
        backgroundColor: color,
        border: '.5px solid #fefefe',
        borderRadius: '16px',
        paddingLeft: '8px',
        paddingRight: '8px'
    }

    const handleClick = () => {
        setColor('#A98C65');
    }

    return(
        <>
            <div>
                <button style={style} onClick={handleClick}>aaaffff</button>
            </div>
        </>
    )
}
