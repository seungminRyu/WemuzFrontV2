import React, { Component } from 'react';
import '../css/Content.css';

class Content extends Component {
    render() {
        return (
            <div className="contents">
                <h1>공지사항</h1>
                <dl className="notice-table">
                    <dt className="notice-header" id="test">
                        <strong>[복구완료] 출석 열람 미션 참여 불가 안내</strong>
                        <em>2020.11.08</em>
                    </dt>
                    <dd className="notice-contents">
                        <p>안녕하세요.</p>
                        <p>위뮤즈 운영팀입니다.</p>
                        <p><br></br></p>
                        <p>11월 8일(일) 오전 8:30 ~ 10:00경 출석 열람 미션 참여 후</p>
                        <p>정상 참여 시에도 미참여로 진행된 유저분들에 대한 복구가 완료되었습니다.</p>
                        <p><br></br></p>
                        <p>관련하여 추가적으로 궁금한 내용이나,</p>
                        <p>문제가 있으실 경우 앱내 고객센터를 통해 문의해주시길 부탁드리겠습니다.</p>
                    </dd>
                    <div className="pagination">
                        <span data-page="1" className="present-page">1</span>
                        <span data-page="2">2</span>
                        <span data-page="3">3</span>
                        <span data-page="4"><img src="src/assets/icon/icon_page-next.svg" alt=""></img></span>
                    </div>
                </dl>
            </div>
        )
    }
}

export default Content;