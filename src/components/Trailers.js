import React from "react";
import {ReactComponent as Play} from '../lib/assets/images/play.svg';

export const Trailers = () => {
    return (
        <div className="trailer-card">
            <div className="trailer">
            <Play className="playicon"/>
            </div>
            <h4>The SpongeBob Movie - Official Trailer</h4>
        </div>
    );
};