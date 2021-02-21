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
                            <ul className="filteractive">
                                <li>All</li>
                                <li>Upcoming</li>
                                <li>2020s</li>
                                <li>2010s</li>
                                <li>2000s</li>
                                <li>1990s</li>
                                <li>1980s</li>
                                <li>1970s</li>
                                <li>1960s</li>
                                <li>1950s</li>
                                <li>1940s</li>
                            </ul>
                        </li>
                        <li>
                            <label> RATING </label>
                            <img src={arrow} alt=""/>
                            <ul className="filteractive">
                                <li>Highest</li>
                                <li>Lowest</li>
                                <li>TOP 250</li>
                            </ul>
                        </li>
                        <li>
                            <label> POPULAR </label>
                            <img src={arrow} alt=""/>
                            <ul className="filteractive">
                                <li>All Time</li>
                                <li>This Year</li>
                                <li>This Month</li>
                                <li>This Week</li>
                            </ul>
                        </li>
                        <li>
                            <label> GENRE </label>
                            <img src={arrow} alt=""/>
                            <ul className="filteractive">
                                <li>Action</li>
                                <li>Adventure</li>
                                <li>Animation</li>
                                <li>Comedy</li>
                                <li>Crime</li>
                                <li>Documentary</li>
                                <li>Drama</li>
                                <li>Family</li>
                                <li>Fantasy</li>
                                <li>History</li>
                                <li>Horror</li>
                                <li>Music</li>
                                <li>Mystery</li>
                                <li>Romance</li>
                                <li>Science Fiction</li>
                                <li>Thriller</li>
                                <li>TV Movie</li>
                                <li>War</li>
                                <li>Western</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="moviespopular">
                <h3>POPULAR MOVIES THIS WEEK</h3>
                <div className="line"></div>
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
                <div className="line"></div>
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