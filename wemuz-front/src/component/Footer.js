import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer__container">
                <div className="footer__left">
                    <a href="https://www.wemuz.me/"><span className="footer__logo" ></span></a>
                    <ul className="footer__policy">
                        <li><a href="/policy?type=privacy">개인정보 처리방침</a></li>
                        <li><a href="/policy?type=terms">이용약관</a></li>
                        <li><a href="https://forms.gle/8obBSCDPpCRnz9HR6">문의사항</a></li>
                        <li><a href="tel:010-4613-3797">전화 : 010-4613-3797</a></li>
                        <li><a href="mailto:wemuzmusic@gmail.com">이메일 : wemuzmusic@gmail.com</a></li>
                    </ul>
                </div>
                <div className="footer__right">
                    <div className="footer__social-link">
                        <button className="social-link social--facebook"></button>
                        <button className="social-link social--instagram"></button>
                        <button className="social-link social--youtube"></button>
                    </div>
                    <div className="footer__address">
                        <h5>© 초코뮤직</h5>
                        <p>대표: 김민찬{'\t'}<span className="br--mobile"></span><span className="line--desktop">|{'\t'}</span>사업자등록번호: 431-14-01364{'\t'}<span className="line--desktop">|</span></p>
                        <p>부산광역시 금정구 부산대학로 63번길 2, 제3공학관 3217</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;