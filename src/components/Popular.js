import React from "react";
import {MovieCard} from "./MovieCard";
import * as Constants from "../Constants";

export const Popular = (props) => {
    console.log(props)
    return (
        <div>
        <h3>Whats Popular</h3>        
        <div className="moviecards">                
                {props.popularItems.map((item, index) => {
                        console.log(item)
                        return <MovieCard posterPath={item.poster_path}/>
                 })}               
        </div>
    </div>
    );
};