import React from "react";
import SearchBar from "./SearchBar";

export const Header = () => {
    return (
        <header>
            <div className="menu-container">
                <div className="logo">

                </div>
                <div className="menu">
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="">MOVIES</a></li>
                        <li><a href="">SERIES</a></li>
                        <li><a href="">ANIMES</a></li>
                        <li><a href="">WATCH LIST</a></li>
                        <li><a href="">LOGIN</a></li>
                        <li><SearchBar/></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};