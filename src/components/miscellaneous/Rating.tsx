import React from "react";

interface RatingProps {
    rating: number;
    starColor: string;
    missingStarColor: string;
}

export function Rating(props: RatingProps) {
    return (
        <div className="rating">
            <StarIcon className={"inline w-5 h-5 " + (props.rating >= 1 ? props.starColor : props.missingStarColor)}/>
            <StarIcon className={"inline w-5 h-5 " + (props.rating >= 2 ? props.starColor : props.missingStarColor)}/>
            <StarIcon className={"inline w-5 h-5 " + (props.rating >= 3 ? props.starColor : props.missingStarColor)}/>
            <StarIcon className={"inline w-5 h-5 " + (props.rating >= 4 ? props.starColor : props.missingStarColor)}/>
            <StarIcon className={"inline w-5 h-5 " + (props.rating >= 5 ? props.starColor : props.missingStarColor)}/>
        </div>
    )
}

export function StarIcon(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
             {...props}>
            <path fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"></path>
        </svg>
    )
}

// Example: <Rating rating={3} starColor={"text-primary"} missingStarColor={"text-base-300"} />