import React from "react";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MovieCard} from "../components/MovieCard";
import {MiniCard} from "../components/MiniCard";
import arrow from '../lib/assets/images/arrow.svg';


export const Movies = () => {
    return (
        <div className="Movies">
            <Header/>
            <section className="section-filter">
                <div className="filter">
                    <h3>FILTER</h3>
                    <ul>
                        <li>
                            <label> YEAR </label>
                            <img src={arrow} alt=""/>
                        </li>
                        <li>
                            <label> RATING </label>
                            <img src={arrow} alt=""/>
                        </li>
                        <li>
                            <label> POPULAR </label>
                            <img src={arrow} alt=""/>
                        </li>
                        <li>
                            <label> GENRE </label>
                            <img src={arrow} alt=""/>
                        </li>
                        <li>
                            <label> SERVICE </label>
                            <img src={arrow} alt=""/>
                        </li>
                        <li>
                            <label> OTHER </label>
                            <img src={arrow} alt=""/>
                        </li>

                    </ul>
                </div>
            </section>


            <div className="moviespopular">
                <h3>POPULAR MOVIES THIS WEEK</h3>
                <div className="moviecards">
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                </div>
            </div>

            <div className="alltimepopular">
                <h3>ALL TIME POPULAR</h3>
                <div className="minicards">
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                </div>
            </div>

            <Footer/>
        </div>
    );
};