import React, { Component } from 'react';
import '../css/TabBar.css';

class TabBar extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <ul className="policy-menu">
                    <li className="policy-menu__item">이용약관</li>
                    <li className="policy-menu__item">개인정보처리방침</li>
                    <li className="policy-menu__item">운영정책</li>
                    <li className="policy-menu__item activate-menu">공지사항</li>
                </ul>
                <button className="policy-menu-btn"></button>
            </nav>
        )
    }
}

export default TabBar;