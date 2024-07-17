import React from "react";
import {ReactNode} from "react";

interface ContentLayoutProps {
    nav: ReactNode;
    children: ReactNode;
    footer: ReactNode;
}

export function ContentLayout(props: ContentLayoutProps){
    return (
        <div className="flex flex-col min-h-screen">
            {props.nav}

            <main className="flex-grow">
                {props.children}
            </main>

            {props.footer}
        </div>
    )
}