import * as React from "react"

function MachineIcon() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x={0.75}
                y={0.75}
                width={16.5}
                height={20.5}
                rx={1.75}
                stroke="#fff"
                strokeWidth={1.5}
            />
            <mask id="prefix__a" fill="#fff">
                <rect x={5} y={15} width={8} height={4} rx={1} />
            </mask>
            <rect
                x={5}
                y={15}
                width={8}
                height={4}
                rx={1}
                stroke="#fff"
                strokeWidth={3}
                mask="url(#prefix__a)"
            />
            <rect x={4.5} y={4.5} width={1} height={2} rx={0.5} stroke="#fff" />
            <rect x={4.5} y={9.5} width={1} height={2} rx={0.5} stroke="#fff" />
            <rect x={8.5} y={4.5} width={1} height={2} rx={0.5} stroke="#fff" />
            <rect x={8.5} y={9.5} width={1} height={2} rx={0.5} stroke="#fff" />
            <rect x={12.5} y={4.5} width={1} height={2} rx={0.5} stroke="#fff" />
            <rect x={12.5} y={9.5} width={1} height={2} rx={0.5} stroke="#fff" />
        </svg>
    )
}

export default MachineIcon
