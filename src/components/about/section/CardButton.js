import React from "react";
import { Link } from "react-router-dom";

export default function CardButton(props) {
  return (
    <div className="max-w-screen-xl mx-auto w-full card-wrapper grid grid-cols-2 md:grid-cols-6 gap-3 text-green-rasta">
      {props.items.map((item, index) => {
        return (
          <Link to={item.link}
            key={index}
            className="px-8  md:flex text-center shadow-box items-center 
            content-center py-8 justify-center font-bold rounded-xl bg-gradient-to-r hover:text-white hover:from-yellow-rasta hover:to-green-rasta"
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
