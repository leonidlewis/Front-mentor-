import React from 'react'

export default function Header(props) {
    return (
        <div>
      <div
        className="flex w-full flex-col bg-cover bg-blend-overlay bg-black bg-opacity-25  bg-top text-white py-32 items-center"
        style={{
          backgroundImage: "url(" + props.images + ")",
          backgroundSize: "cover",
        }}
      >
          <h1 className="text-4xl">{props.title}</h1>
      </div>
      
    </div>
    )
}
