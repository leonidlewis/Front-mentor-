import React from 'react'

export default function DescriptionSection(props) {
    return (
        <div className="max-w-screen-xl mx-auto text-center text-black space-y-6">
            {props.text}
        </div>
    )
}
