import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-4.svg";
import { ReactTyped } from 'react-typed';

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section_title">About Me</h2>

            <div className="about_container grid">
                <img src={Image} alt="" className="about_img" />

                <div className="about_data grid">
                    <div className="about_info">
                    <p className="about_description">Hi!<br/>I'm Taylor, a&nbsp;
                        <span className="home_animated-typing">
                            <ReactTyped
                            strings={["Front-End Developer", "Web Developer", "UX Designer"]}
                            typeSpeed={100}
                            backSpeed={100}
                            loop
                            />
                        </span> <br/>
                        with an interest in design.
                        I'm passionate about user accessibility and designing applications to be as simple and user-friendly as possible.
                        It's nice to meet you!
                    </p>
                        <a target="_blank" href="https://drive.google.com/file/d/1ezmWnN7CVYnpByUdgAgLGwFdL1H958oT/view?usp=sharing" className="btn">Download CV</a>
                    </div>

                    <div className="about_skills grid">
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Development</h3>
                                <span className="skills_number">90%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage development"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">UX/UI Design</h3>
                                <span className="skills_number">40%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage ui_design"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Knitting</h3>
                                <span className="skills_number">15%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage knitting"></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About