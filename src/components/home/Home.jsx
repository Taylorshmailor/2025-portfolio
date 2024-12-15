import React from 'react';
import "./home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Room from '../model/Room';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <Room />
                <h1 className="home_name">Taylor Pham ʕ•ᴥ•ʔ</h1>
                <HeaderSocials />

                <a href="#contact" className="btn">Let's Chat!</a>

                <ScrollDown />
            </div>

            <Shapes/>
        </section>
    )
}

export default Home