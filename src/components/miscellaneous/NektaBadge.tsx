import Link from "next/link";
import {NektaIcon} from "./NektaIcon";
import React from "react";

export function NektaBadge() {
    return (<Link
        href={'https://www.getnekta.com'}
        className={'w-fit flex flex-row bg-[#f48305] py-1 px-3 text-xs font-medium text-[#000000] rounded-md items-center justify-center'}
    >
        Built with <NektaIcon className="w-3 h-3 ml-2 mr-1"/>Nekta
    </Link>)
}