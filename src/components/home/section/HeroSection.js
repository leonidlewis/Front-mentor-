import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DataBank from "../../DataBank";
import { Link, BrowserRouter as Router } from "react-router-dom";

export default function HeroSection() {
  return (
    <div>
      <div className="flex w-full  py-16 bg-gradient-to-b from-black to-red-rasta via-black text-white flex-col">
        <div className="flex w-full px-8 md:px-0 md:max-w-screen-xl md:mx-auto items-center flex-col md:flex-row">
          <div className="leftSection w-full md:w-6/12">
            <h1 className="text-5xl font-bold text-center md:text-left md:pr-48 leading-tight">
              {DataBank.homepage.heroSection.title}
            </h1>
            <p className="mt-8 text-center md:text-left">{DataBank.homepage.heroSection.desc}</p>
            <div className="cta flex-row mt-8 space-x-8 hidden md:flex">
              <Router>
                <Link to="#" className="bg-gradient-to-r font-bold w-1/3 from-yellow-rasta to-green-rasta_cta text-center py-3 rounded-xl">
                  <button>Farm Rasta Now</button>
                </Link>
                <Link to="#" className="border-2 font-bold border-yellow-rasta py-3 rounded-xl w-1/3 text-center">
                  <button>Buy Rasta</button>
                </Link>
              </Router>
            </div>
          </div>
          <div className="images hidden md:block md:w-6/12 text-right">
            <LazyLoadImage
              src={DataBank.homepage.heroSection.image}
              alt="Logo"
              className={`w-full mx-auto`}
              effect="blur"
            />
          </div>
        </div>
        <div className=" w-full hidden md:flex md:block md:max-w-screen-xl md:mx-auto items-center md:flex-row space-x-8 my-16">
            {DataBank.homepage.heroSection.counter.map((item,index) => {
                return <div className="w-1/4 bg-red-rasta rounded-xl text-center py-6" key={index}>
                    <div className="number text-3xl font-bold">{item.numbers}</div>
                    <div className="desc">{item.label}</div>
                    </div>
            })}
        </div>
      </div>
    </div>
  );
}
