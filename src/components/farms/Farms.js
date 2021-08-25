import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DataBank from "../DataBank";
import ToggleSwitch from "../elements/toggle-switch/ToggleSwitch";
import CardsSection from "./section/CardSection";
import { slice, concat } from "lodash";
import * as FaIcons from "react-icons/fa";

export default function Farms() {
  const { farm } = useParams();
  
  var pages = null;

  if(farm === "mr-rasta")
  pages = DataBank.farms.child.mr_rasta;
  else
  pages = DataBank.farms.child.mrs_rasta;

  const farmPage = pages;
  let [checked, setChecked] = useState(false);
  

  const LENGTH = farmPage.page.card.content.length;
  const DATA = farmPage.page.card.content;
  const LIMIT = 3;

  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(DATA, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);
  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
    const newList = concat(list, slice(DATA, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  return (
    <div className="">
      
      <div
        className="flex w-full text-black flex-col bg-blend-overlay bg-black bg-opacity-50 text-white py-16 items-center"
        style={{
          backgroundImage: "url(" + farmPage.page.header_img + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-4xl font-bold">{farmPage.page.title}</h1>
      </div>
      <div className=" py-8  w-full bg-white text-black">
        <div className=" flex flex-col text-gray-800 items-center w-10/12 mx-auto">
          <h2 className="font-bold text-xl">{farmPage.page.subtitle}</h2>
          <p className="text-gray-700">{farmPage.page.desc}</p>
          <div className="toggle-button items-end flex-col flex w-full">
            <ToggleSwitch
              id="toggleSwitch"
              checked={checked}
              onChange={setChecked}
            />
          </div>
          <div className="card items-center text-center w-full mt-16">
            {checked && <CardsSection itemsToRender={list}/>}
            {showMore && checked && 
              <button onClick={loadMore} className="flex items-center justify-center mx-auto mt-8 text-md space-x-4 hover:text-red-rasta"> 
              <FaIcons.FaChevronCircleDown/>
              <span>Load More</span> </button>
            }
            {!checked && "No Farm Data Found"}
            
           
           
          </div>
        </div>
      </div>
    </div>
  );
}
