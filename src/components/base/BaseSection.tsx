import React from "react";
import {ReactNode} from "react";

interface ContentSectionProps {
    sectionId: string;
    className?: string;
    children: ReactNode;
}

export function BaseSection(props: ContentSectionProps) {
    return (
        <section
            className={"w-full px-4 py-2 flex items-center max-w-[1300px] mx-auto " + props.className}
            id={props.sectionId}
        >
            {props.children}
        </section>
    )
}