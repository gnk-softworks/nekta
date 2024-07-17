import React, {ReactNode} from "react";
import Link from "next/link";
import {NektaBadge} from "../miscellaneous/NektaBadge";

interface FooterLink {
    text: string;
    href: string;
}

interface FooterProps {
    copyright: string | ReactNode;
    links?: FooterLink[];
    includeNektaBadge?: boolean;
}

export function Footer(props: FooterProps) {
    return (
        <footer
            className="flex flex-col sm:flex-row gap-2 p-4 w-full max-w-[1300px] mx-auto shrink-0 items-center">
            {props.includeNektaBadge && (<NektaBadge/>)}
            <p className="text-xs text-baseContent">{props.copyright}</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                {props.links?.map((link, index) => (
                    <Link key={index} href={link.href} className="text-xs hover:underline underline-offset-4">
                        {link.text}
                    </Link>
                ))}
            </nav>
        </footer>
    )
}