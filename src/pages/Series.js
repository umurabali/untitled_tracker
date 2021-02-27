import React, {useState, useEffect} from "react";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import arrow from "../lib/assets/images/arrow.svg";
import {MovieCard} from "../components/MovieCard";
import {MiniCard} from "../components/MiniCard";
import {Popular} from "../components/Popular"
import * as Constants from "../Constants";


export const Series = () => {
    const [popularItems, setPopularItems] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${Constants.API_KEY}`)
        .then(response => response.json())
        .then(json => setPopularItems(json.results.slice(0,Constants.MAX_POPULAR_ITEM)))         
    }, [])

    return (
        <div className="Series">
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