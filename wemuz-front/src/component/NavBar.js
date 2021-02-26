import React, { Component } from 'react';
import '../css/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="nav-container">
                    <div className="nav-left">
                        <a href="/"><img className="nav__logo" src="/static/img/intro/icon/wemuz_logo.svg" alt=""></img></a>
                        <a href="/"><img className="nav__logo--white" src="/static/img/intro/icon/wemuz_logo_white.svg" alt=""></img></a>
                    </div>
                    <button className="nav__menu-btn">
                        <div className="menu-trigger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div className="nav-right">
                        <ul className="nav-right__menu">
                            <li><a className="nav__link" href="/policy">공지사항</a></li>
                            <li><a className="nav__link" href="https://forms.gle/8obBSCDPpCRnz9HR6">문의사항</a></li>
                            <li><a className="nav__link" href="/mukathon">뮤커톤</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;