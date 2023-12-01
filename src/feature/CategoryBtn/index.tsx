"use client";

import React, { useState } from 'react';

export default function CategoryBtn(){
    const [color, setColor] = useState('#B99162');
    const [boxShadow, setBoxShadow] = useState('0px 2px 15px -5px #777777');

    const style = {
        color: '#fefefe',
        backgroundColor: color,
        border: '.5px solid #fefefe',
        borderRadius: '16px',
        paddingLeft: '8px',
        paddingRight: '8px',
        boxShadow: boxShadow,
    }

    const handleClick = () => {
        setColor('#A98C65', );
        setBoxShadow("none")
    }

    return(
        <>
            <div>
                <button style={style} onClick={handleClick}>aaaffff</button>
            </div>
        </>
    )
}
