import React from 'react'
import '../styles/cardview.scss'

import Circle from '../components/Circle'

interface CardViewProps {
    color: string,
    children: JSX.Element
}

function CardView(props: CardViewProps) {

    return (
        <>
            <div className="card" style={{ backgroundColor: props.color }}>
                <Circle/>
                {props.children}
            </div>
        </>
    );
}

export default CardView