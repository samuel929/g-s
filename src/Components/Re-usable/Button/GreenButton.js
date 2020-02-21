import React from 'react'
import './Button.scss';
export default function Button(props) {
    return (
        <div>
            <button className="input-green">{props.children}</button>
        </div>
    )
}
