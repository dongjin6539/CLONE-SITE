import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer_wrap">
      <div className="footer inner clear">
        <div className="footer_left">
          <h2>
            <img src="assets/images/main_logo2.png" alt="로고2" />
          </h2>
        </div>
        <div className="footer_right">
          <div className="footer_info">
            <ul className="footer_link clear">
              <li><Link to="/">이용약관</Link></li>
              <li><Link to="/" style={{ color: '#005bba', fontWeight: 'bold' }}>개인정보처리방침</Link></li>
              <li><Link to="/">이메일무단수집거부</Link></li>
              <li><Link to="/">생활체육자료실</Link></li>
              <li><Link to="/">관련기관안내</Link></li>
            </ul>
            <label htmlFor="family_site" className="r_only">패밀리 사이트 선택</label>
            <select name="family_site" id="family_site" className="family_site">
              <option value="">family_site</option>
              <option value="1">kpc 기관홈페이지</option>
              <option value="2">kpc 통합정보센터</option>
              <option value="3">kpc 장애인체력인증센터</option>
            </select>
            <div className="mark_link">
              <Link to="/">이동</Link>
            </div>
            <div className="mark_link02">
              <Link to="/">
                <img src="assets/images/web.png" alt="웹접근성" />
              </Link>
            </div>
            <div style={{ position: 'absolute', top: '150px', right: '10px' }}>
              <Link to="/">
                <img src="assets/images/footer02.png" alt="페이지" />
              </Link>
            </div>
          </div>
          <address className="footer_adress">
            <p className="footer_info">
              <span>
                (05540) 서울시 송파구 올림픽로 424 벨로드롬 1층 (방이동)
              </span>
              <span>대표전화 : 1577-7976</span>
            </p>
            <p>본 홈페이지는 시각장애인을 위한 대체텍스트를 적용하여 제작되었습니다.</p><br />
            <p>본 홈페이지는 문화체육관광부, 복권기금, 문화체육진흥공단의 재정후원을 받아<br />운영되고 있습니다.</p><br />
            <div>
              <div style={{ width: '49%', display: 'inline-block' }}>
                COPYRIGHT ⓒ 2014 KPC ALLRIGHT RESERVED
              </div>
              <div style={{ width: '40%', display: 'inline-block', textAlign: 'right', paddingRight: '40px' }}>
                Total
                <img src="assets/images/footer_people.png" style={{ width: '15px', height: 'auto', marginTop: '3px' }} alt="사람이미지" />
                <span style={{ color: '#0a338e' }} className="footerVisitorTotal">68091</span>
                | Today
                <img src="assets/images/footer_people.png" style={{ width: '15px', height: 'auto', marginTop: '3px' }} alt="사람이미지" />
                <span style={{ color: '#0a338e' }} className="footerVistorToday">33</span>
              </div>
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;