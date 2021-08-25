import React from 'react'
import Slide from '../../elements/SlickSlide/SlickSlide'
export default function TeamSlide(props) {
    
    return (
        <div className="max-w-screen-xl mx-auto">
            <Slide items={props.items}/>
        </div>
    )
}
