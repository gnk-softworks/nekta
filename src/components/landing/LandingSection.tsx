import React from "react";
import {ReactNode} from "react";
import {BaseSection} from "../base/BaseSection";

interface LandingSectionProps {
    id: string;
    title: ReactNode;
    description: ReactNode;
    content: ReactNode;
    className?: string;
}

export function LandingSection(props: LandingSectionProps) {
    return (
        <BaseSection sectionId={props.id} className={"py-12 md:py-24 " + props.className}>
            <div className="w-full flex flex-col gap-4 items-center justify-center text-center mx-auto">
                <div className="max-w-[800px] mx-auto text-center mb-8">
                    <h2>{props.title}</h2>
                    <p className="text-baseContentAlt">
                        {props.description}
                    </p>
                </div>
                {props.content}
            </div>
        </BaseSection>
    )
}