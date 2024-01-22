"use client";

import React, { useState } from 'react';

export default function CategoryBtn({
    children,
    onClick,
    selected, 
}:{children: React.ReactNode, onClick?:() => void, selected?: boolean}){ // selectedプロパティの型を追加します。
    const [color, setColor] = useState('#B99162');
    const [shadow, setShadow] = useState('0px 1px 1px 0px #777777')

    React.useEffect(() => {
        if (selected) {
            setColor('#A98C65');
            setShadow('none');
        } else {
            setColor('#B99162');
            setShadow('0px 1px 1px 0px #777777');
        }
    }, [selected]);

    const styles = {
        color: '#fefefe',
        backgroundColor: color,
        border: '.5px solid #fefefe',
        borderRadius: '16px',
        paddingLeft: '8px',
        paddingRight: '8px',
        boxShadow: shadow
    }

    const handleClick = () => {
        onClick && onClick();
    }

    return(
        <>
            <button style={styles} onClick={handleClick}>{children}</button>
        </>
    )
}
