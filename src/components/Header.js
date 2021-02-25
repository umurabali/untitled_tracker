import React from "react";
import SearchBar from "./SearchBar";
import {
    Link
  } from "react-router-dom";

export const Header = () => {
    return (
            <header>
            <div className="menu-container">
                <div className="logo">
                </div>
                <div className="menu">
                    <ul>
                        <li><Link exact to="/">HOME</Link></li>                        
                        <li><Link exact to="/movies">MOVIES</Link></li>
                        <li><Link exact to="/series">SERIES</Link></li>
                        <li><Link exact to="/animes">ANIMES</Link></li>
                        <li><Link exact to="/watchlist">WATCH LIST</Link></li>
                        <li><a href="">LOGIN</a></li>
                        <li><SearchBar/></li>
                    </ul>
                </div>
            </div>
            </header>
    );       
        
};
