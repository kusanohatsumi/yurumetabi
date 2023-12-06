"use client";

import React, { Children, useState } from 'react';

export default function CategoryBtn({
    children,
}:{children: React.ReactNode}){
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
            <button style={style} onClick={handleClick}>{children}</button>
        </>
    )
}
