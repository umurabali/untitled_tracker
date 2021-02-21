import React from "react";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Button} from "../components/Button";
import {ReactComponent as Eye} from '../lib/assets/images/eye.svg';
import {ReactComponent as Hearth} from '../lib/assets/images/hearth.svg';
import {ReactComponent as Star} from '../lib/assets/images/star.svg';
import {ReactComponent as Calendar} from '../lib/assets/images/calendar.svg';


export const Details = () => {
    return (
        <div className="Details">
            <Header/>
                <div className="moviedetailscontainer">
                    <div className="moviedetails">
                        <div className="poster">
                            <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg" alt=""/>
                            <Button><Eye className="icon"/> Watched</Button>
                            <Button><Calendar className="icon"/>Add to Watch List</Button>
                            <Button><Hearth className="icon"/>Add to Favorites</Button>
                            <Button><Star className="icon"/>Give Rating</Button>
                        </div>
                        <div className="detailscontainer">
                            <div className="detailsmain">
                            <h3>GAME OF THRONES</h3>
                            <div className="playtime">2011 / 1hr</div>
                            <div className="genres">
                                <ul>
                                    <li>Fantasy</li>
                                    <li>Drama</li>
                                    <li>Action</li>
                                    <li>Adventure</li>
                                    <li>Mystery</li>
                                </ul>
                            </div>
                            <div className="creators">
                                <ul>
                                    <li> <span>Creator</span> David Benioff</li>
                                    <li> <span>Creator</span> D. B. Weiss</li>
                                </ul>
                            </div>
                            <div className="ratings">
                                <ul>
                                    <li> <span>IMDB:</span> <Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/>8.3</li>
                                    <li> <span>User Ratings:</span> <Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/><Star className="star"/>8.3</li>
                                </ul>
                            </div>
                            <div className="plot">
                                <p>Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.</p>
                            </div>
                            </div>
                            <div className="detailstab">
                                <div className="tab">

                                <ul>
                                    <li className="active">CAST</li>
                                    <li>CREW</li>
                                    <li>DETAILS</li>
                                </ul>
                                    <div className="cast">
                                        <Button>Emilia Clarke</Button>
                                        <Button>Sophie Turner</Button>
                                        <Button>Lena Headey</Button>
                                        <Button>Kit Harrington</Button>
                                        <Button>Peter Dinklage</Button>
                                        <Button>Maisei Williams</Button>
                                        <Button>John Bradley</Button>
                                        <Button>Conleth Hill</Button>
                                        <Button>Rory McCann</Button>
                                        <Button>Iain Glen</Button>
                                        <Button>Alfie Allen</Button>
                                        <Button>Aidan Gillen</Button>
                                        <Button>Nikolaj Coster-Waldau</Button>
                                        <Button>Liam Cunningham</Button>
                                        <Button>Jerome Flynn</Button>
                                        <Button>Show All...</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="seasons">
                                <div className="tab">

                                <ul>
                                    <li className="active">SEASON 1</li>
                                    <li>SEASON 2</li>
                                    <li>SEASON 3</li>
                                    <li>SEASON 4</li>
                                    <li>SEASON 5</li>
                                    <li>SEASON 6</li>
                                    <li>SEASON 7</li>
                                    <li>SEASON 8</li>
                                </ul>
                                </div>
                                <Button><Eye className="icon"/>Season Watched</Button>
                                <div className="episodes">
                                    <div className="episodecontent">
                                        <img src="https://www.themoviedb.org/t/p/w227_and_h127_bestv2/xIfvIM7YgkADTrqp23rm3CLaOVQ.jpg" alt=""/>
                                        <div className="content">
                                            <h4 className="episodename">1. Winter Is Coming</h4>
                                            <div className="airdate">April 17, 2011</div>
                                            <div className="overview">Jon Arryn, the Hand of the King, is dead. King Robert Baratheon plans to ask his oldest friend, Eddard Stark, to take Jon's place. Across the sea, Viserys Targaryen plans to wed his sister to a nomadic warlord in exchange for an army.</div>
                                            <Button><Eye className="icon"/>Watched</Button>
                                        </div>
                                    </div>
                                    <div className="episodecontent">
                                        <img src="https://www.themoviedb.org/t/p/w227_and_h127_bestv2/xIfvIM7YgkADTrqp23rm3CLaOVQ.jpg" alt=""/>
                                        <div className="content">
                                            <h4 className="episodename">1. Winter Is Coming</h4>
                                            <div className="airdate">April 17, 2011</div>
                                            <div className="overview">Jon Arryn, the Hand of the King, is dead. King Robert Baratheon plans to ask his oldest friend, Eddard Stark, to take Jon's place. Across the sea, Viserys Targaryen plans to wed his sister to a nomadic warlord in exchange for an army.</div>
                                            <Button><Eye className="icon"/>Watched</Button>
                                        </div>
                                    </div>
                                    <div className="episodecontent">
                                        <img src="https://www.themoviedb.org/t/p/w227_and_h127_bestv2/xIfvIM7YgkADTrqp23rm3CLaOVQ.jpg" alt=""/>
                                        <div className="content">
                                            <h4 className="episodename">1. Winter Is Coming</h4>
                                            <div className="airdate">April 17, 2011</div>
                                            <div className="overview">Jon Arryn, the Hand of the King, is dead. King Robert Baratheon plans to ask his oldest friend, Eddard Stark, to take Jon's place. Across the sea, Viserys Targaryen plans to wed his sister to a nomadic warlord in exchange for an army.</div>
                                            <Button><Eye className="icon"/>Watched</Button>
                                        </div>
                                    </div>
                                    <div className="episodecontent">
                                        <img src="https://www.themoviedb.org/t/p/w227_and_h127_bestv2/xIfvIM7YgkADTrqp23rm3CLaOVQ.jpg" alt=""/>
                                        <div className="content">
                                            <h4 className="episodename">1. Winter Is Coming</h4>
                                            <div className="airdate">April 17, 2011</div>
                                            <div className="overview">Jon Arryn, the Hand of the King, is dead. King Robert Baratheon plans to ask his oldest friend, Eddard Stark, to take Jon's place. Across the sea, Viserys Targaryen plans to wed his sister to a nomadic warlord in exchange for an army.</div>
                                            <Button><Eye className="icon"/>Watched</Button>
                                        </div>
                                    </div>
                                    <div className="episodecontent">
                                        <img src="https://www.themoviedb.org/t/p/w227_and_h127_bestv2/xIfvIM7YgkADTrqp23rm3CLaOVQ.jpg" alt=""/>
                                        <div className="content">
                                            <h4 className="episodename">1. Winter Is Coming</h4>
                                            <div className="airdate">April 17, 2011</div>
                                            <div className="overview">Jon Arryn, the Hand of the King, is dead. King Robert Baratheon plans to ask his oldest friend, Eddard Stark, to take Jon's place. Across the sea, Viserys Targaryen plans to wed his sister to a nomadic warlord in exchange for an army.</div>
                                            <Button><Eye className="icon"/>Watched</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};