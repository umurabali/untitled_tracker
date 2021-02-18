import React from "react";
import facebook from '../lib/assets/images/facebook.svg';
import instagram from '../lib/assets/images/instagram.svg';
import twitter from '../lib/assets/images/twitter.svg';

export const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="menu">
                <ul>
                    <li><a href="">ABOUT US</a></li>
                    <li><a href="">NEWS</a></li>
                    <li><a href="">APPS</a></li>
                    <li><a href="">HELP</a></li>
                    <li><a href="">TERMS</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
                </div>
                <div className="socialmedia">
                    <a href="">
                        <img src={facebook} alt=""/>
                    </a>
                    <a href="">
                        <img src={instagram} alt=""/>
                    </a>
                    <a href="">
                        <img src={twitter} alt=""/>
                    </a>
                </div>
                <div className="copyright">
                   <p>
                    © copyrightli yazilar alanı işte
                   </p>
                </div>
            </div>
        </footer>
    );
};