import {BaseSection} from "../base/BaseSection";
import {ReactNode} from "react";
import React from "react";

interface HeroSectionProps {
    column1: ReactNode;
    column2: ReactNode;
    className?: string;
}

export async function HeroSection(props: HeroSectionProps) {
    return (
        <BaseSection sectionId="hero" className={"py-12 "+ props.className}>
            <div className="grid w-full mx-auto gap-4 lg:grid-cols-2 lg:gap-8">
                {props.column1}
                {props.column2}
            </div>
        </BaseSection>
    )
}