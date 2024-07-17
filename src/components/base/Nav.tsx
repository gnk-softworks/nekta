'use client'

import React from "react";
import Link from "next/link";
import {ReactNode} from "react";

interface NavLink {
    text: string;
    href: string;
}

interface NavProps {
    logo: string | ReactNode;
    links?: NavLink[];
    className?: string;
}
export function Nav(props: NavProps) {
    return (
        <header className={"sticky top-0 " + (props.className || "bg-primary text-primaryContent")}>
            <div className="px-4 py-2 h-14 flex items-center w-full max-w-[1300px] mx-auto">
                {props.logo}
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    {props.links?.map((link, index) => (
                        <Link key={index} href={link.href} className={"text-sm font-medium hover:underline underline-offset-4"}>
                                {link.text}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}