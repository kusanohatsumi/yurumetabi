import React from "react";

export default function StyleLayout({ params, children }: { children: React.ReactNode, params: { id: string } }) {

    return (<>
        <div>{children}</div>
    </>)
}