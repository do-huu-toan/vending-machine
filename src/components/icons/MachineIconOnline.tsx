import * as React from "react"

function MachineIconOnline(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x={3.75}
                y={1.75}
                width={16.5}
                height={20.5}
                rx={1.75}
                stroke="#33CC5E"
                strokeWidth={1.5}
            />
            <mask id="prefix__a" fill="#fff">
                <rect x={8} y={16} width={8} height={4} rx={1} />
            </mask>
            <rect
                x={8}
                y={16}
                width={8}
                height={4}
                rx={1}
                stroke="#33CC5E"
                strokeWidth={3}
                mask="url(#prefix__a)"
            />
            <rect x={7.5} y={5.5} width={1} height={2} rx={0.5} stroke="#33CC5E" />
            <rect x={7.5} y={10.5} width={1} height={2} rx={0.5} stroke="#33CC5E" />
            <rect x={11.5} y={5.5} width={1} height={2} rx={0.5} stroke="#33CC5E" />
            <rect x={11.5} y={10.5} width={1} height={2} rx={0.5} stroke="#33CC5E" />
            <rect x={15.5} y={5.5} width={1} height={2} rx={0.5} stroke="#33CC5E" />
            <rect x={15.5} y={10.5} width={1} height={2} rx={0.5} stroke="#33CC5E" />
        </svg>
    )
}

export default MachineIconOnline
