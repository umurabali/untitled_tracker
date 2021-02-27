import React, {useEffect, useState} from "react";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import SearchBar from "../components/SearchBar";
import {MovieCard} from "../components/MovieCard";
import {MiniCard} from "../components/MiniCard";
import {Trailers} from "../components/Trailers";
import {Button} from "../components/Button";
import * as Constants from "../Constants";
import {Popular} from "../components/Popular"

export const Home = () => {

    const [popularItems, setPopularItems] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${Constants.API_KEY}`)
        .then(response => response.json())
        .then(json => setPopularItems(json.results.slice(0,Constants.MAX_POPULAR_ITEM)))        
    }, [])

    return (
       
        <div className="Home">
            <Header/>
            <div className="hero">
                <div className="searchbar">
                    <SearchBar/>
                </div>
            </div>
            <div className="popular">
            <Popular popularItems={popularItems} />
            </div>
            <div className="community">
                <div className="community-wrapper">
                    <h2>Take your first step into a larger world.</h2>
                    <p>Sign in or register to get started. We’re your home for logging, rating and reviewing films, your watchlist of titles to see, your source for lists and inspiration, a cast and crew database and an activity stream of passionate film criticism, discussion and discovery.  </p>
                    <Button>Sign Up</Button>
                </div>
            </div>
            <div className="recents">
                <h3>Recently Reviewed</h3>
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
                </div>
            </div>
            <div className="trailers">
                <h3>New Trailers</h3>
                <div className="trailercards">
                    <Trailers/>
                    <Trailers/>
                    <Trailers/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};