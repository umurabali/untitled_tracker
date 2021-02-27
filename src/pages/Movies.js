import React, {useState, useEffect} from "react";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MovieCard} from "../components/MovieCard";
import {MiniCard} from "../components/MiniCard";
import arrow from '../lib/assets/images/arrow.svg';
import {Popular} from "../components/Popular"
import * as Constants from "../Constants";


export const Movies = () => {
    const [popularItems, setPopularItems] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${Constants.API_KEY}`)
        .then(response => response.json())
        .then(json => setPopularItems(json.results.slice(0,5)))        
    }, [])

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
                            <ul className="">
                                <li>Highest</li>
                                <li>Lowest</li>
                                <li>TOP 250</li>
                            </ul>
                        </li>
                        <li>
                            <label> POPULAR </label>
                            <img src={arrow} alt=""/>
                            <ul className="">
                                <li>All Time</li>
                                <li>This Year</li>
                                <li>This Month</li>
                                <li>This Week</li>
                            </ul>
                        </li>
                        <li>
                            <label> GENRE </label>
                            <img src={arrow} alt=""/>
                            <ul className="">
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
            <Popular popularItems={popularItems} />
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