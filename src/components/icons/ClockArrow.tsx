import * as React from "react"

function ClockArrow() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                opacity={0.8}
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6.375 12l-2.25 2.25L1.875 12M4.125 12c0 .694.086 1.366.235 2.015M22.125 12a9 9 0 00-9-9 9 9 0 00-9 9M13.125 21a9 9 0 009-9M5.754 17.155A8.982 8.982 0 0013.125 21" />
                <path d="M16.496 14.871l-3.652-2.173V7.985" />
            </g>
        </svg>
    )
}

export default ClockArrow
