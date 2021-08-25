import React from 'react'
import HeroSection from './section/HeroSection';
import Community from './section/Community';
import FavCreator from "./section/FavoriteCreator";
export default function Homepage() {
    return (
        <div>
            <section>
                <HeroSection/>
                <Community/>
                <FavCreator/>
            </section>
        </div>
    )
}
