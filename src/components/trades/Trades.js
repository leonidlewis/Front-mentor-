import React from 'react'
import Header from './section/Header'
import bgImg from "../../assets/swap-header.jpg";
import DataBank from '../DataBank';
import Stake from './section/Stake';

function Trades() {
    const data = DataBank.trades
    return (
        <div>
            <Header images={bgImg} title={data.heading.title}/>
            <Stake title={data.content.title} subTitle={data.content.subTitle}/>
        </div>
    )
}

export default Trades
