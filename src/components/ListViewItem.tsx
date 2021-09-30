import React from "react"
import '../styles/listview-item.scss'

interface PropsLisViewItem {
    name: string,
    icon: JSX.Element
}

function ListViewItem(props: PropsLisViewItem) {
    return (
        <>
            <div className="listview-item noselect">
                <div className="listview-item-icon">{props.icon}</div>
                <p>{props.name}</p>
            </div>
        </>
    )
}

export default ListViewItem