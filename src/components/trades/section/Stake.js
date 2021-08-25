import React, {useState} from 'react'

export default function Stake(props) {
    const [swap, setSwap] = useState(true);
    const showSwap = () => setSwap(!swap);
    return (
        <div className="bg-white w-full">
            <div className="flex max-w-screen-xl mx-auto text-gray-600 flex-col content-center items-center py-16">
                <h2 className="text-gray-700 text-2xl font-bold">{props.title}</h2>
                <h3 className="text-gray-700 text-xl">{props.subTitle}</h3>
                <div className="card w-6/12 bg-white shadow-box px-4 py-6 flex flex-col rounded-lg mt-8 ">
                    <div className="switcher flex flex-row items-center justify-center space-x-8">
                        <button className="border-b-1 border-yellow-rasta px-4">Swap</button>
                        <button className="border-b-1 border-yellow-rasta px-4">Liquidity</button>
                    </div>
                </div>
            </div>
      </div>
    )
}
