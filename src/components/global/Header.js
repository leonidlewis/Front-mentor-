import React, { useState } from "react";
import Sidebar from "../global/Sidebar";
import DataBank from "../DataBank";
import { LazyLoadImage } from "react-lazy-load-image-component";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <header className="border-b-default border-white border-opacity-50">
        <div className="flex  items-center justify-between w-10/12 mx-auto">
          <Sidebar />
          <div className="logo flex-grow-1 text-center">
            <Link to="/">
              <LazyLoadImage
                src={DataBank.navbar.logo}
                alt="Logo"
                className={`w-64 mx-auto`}
                effect="blur"
              />
            </Link>
          </div>
          <div className="right-cta items-center flex flex-row">
            <button
              className="text-white border-1 px-8 py-1 rounded-xl border-green-rasta"
              onClick={() => setShowModal(true)}
            >
              Connect
            </button>
          </div>
        </div>
      </header>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-rasta pb-8 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b-1 border-solid border-gray-100 rounded-t ">
                  <h3 className="text-3xl font-semibold">
                    Connect to a Wallet
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex">
                  <div className="grid grid-cols-3 mx-auto gap-4">
                    {DataBank.wallet.map((item, index) => {
                      return (<Link className="wallet-wrap flex flex-col space-y-3 bg-gray-inBlack px-2 py-4 rounded-xl items-center" to={item.link} key={index}>
                        <span><img src={item.icon.type}></img></span>
                        <span>{item.name}</span>
                      </Link>)
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
