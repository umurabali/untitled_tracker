import React from "react";
import {ReactComponent as Eye} from '../lib/assets/images/eye.svg';
import {ReactComponent as Hearth} from '../lib/assets/images/hearth.svg';
import {ReactComponent as Star} from '../lib/assets/images/star.svg';


export const MovieCard = () => {
    return (
        <div className="movie-card">
            <div className="data">
                <Eye className="icon" stroke='white'/> <span>30K</span>
                <Hearth className="icon nomobile" stroke='white'/> <span className="nomobile">4K</span>
                <Star className="icon" stroke='white'/> <span>4.7</span>
            </div>
        </div>
    );
};