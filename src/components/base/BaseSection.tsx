import React from "react";
import {ReactNode} from "react";

interface ContentSectionProps {
    sectionId: string;
    className?: string;
    children: ReactNode;
}

export function BaseSection(props: ContentSectionProps) {
    return (
        <section className={props.className} id={props.sectionId}>
            <div className="px-4 py-2 flex items-center w-full max-w-[1300px] mx-auto">
                {props.children}
            </div>
        </section>)
}