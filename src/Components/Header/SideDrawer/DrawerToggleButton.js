import React from 'react'
import './DrawerToggle.css';
export default function DrawerToggleButton(props) {
    return (
        
            <button className="toggle-button" onClick={props.click}>
                <div className="toggle-button__line"/>

                <div className="toggle-button__line"/>

                <div className="toggle-button__line"/>
            </button>
    
    )
}
