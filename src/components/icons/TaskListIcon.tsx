import * as React from "react"

function TaskListIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 22"
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
        <path
          clipRule="evenodd"
          d="M7.998 3.997l1.3-1.626c.19-.237.478-.375.782-.375h3.84c.305 0 .592.138.782.375l1.3 1.626v1a1 1 0 01-1 1H8.998a1 1 0 01-1-1v-1 0z"
        />
        <path d="M20.003 12V5.998a2 2 0 00-2-2.001h-2.001M7.998 3.997h-2a2 2 0 00-2.001 2v13.006a2 2 0 002 2H12" />
        <path d="M15.998 3.997H18a2 2 0 012.001 2v13.006a2 2 0 01-2 2h-6.003M11.998 11h4M10 9.5l-2.063 2L7 10.59M12 16.5h4M10 15l-2.063 2L7 16.09" />
      </g>
    </svg>
  )
}

export default TaskListIcon;
