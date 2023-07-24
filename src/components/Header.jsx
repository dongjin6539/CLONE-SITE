import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div id="header" className="header_top inner clear">
            <h1 className="header_logo">
                <Link to="/">
                    <img src="assets/images/main_logo.png" alt="로고" />
                </Link>
            </h1>
            <ol className="header_gnb">
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/">로그인</Link>
                </li>
                <li>
                    <Link to="/">회원가입</Link>
                </li>
                <li className="text_adjust">
                    글자
                    <Link to="/">
                        <img src="assets/images/icon_plus.png" alt="글자 확대" />
                    </Link>
                    <Link to="/">
                        <img src="assets/images/icon_minus.png" alt="글자 축소" />
                    </Link>
                    <Link to="/">
                        <img src="assets/images/icon_pause.png" alt="글자 기본크기" />
                    </Link>
                </li>
                <li className="site_bookmark">
                    <Link to="/">즐겨찾기</Link>
                </li>
                <li className="site_bookmark">
                    <Link to="/">
                        <img src="assets/images/icon_kakao.png" alt="카카오톡" />
                    </Link>
                </li>
            </ol>
        </div>
        <div className="header_bottom">
            <ul className="header_lnb inner clear">
                <li>
                    <Link to="/">생활체육정보</Link>
                    <div className="header_gnb">
                        <ol className="header_gnb_list">
                            <li>
                                <Link to="/">생활체육소개</Link>
                            </li>
                            <li>
                                <Link to="/">생활체육 종목안내</Link>
                            </li>
                            <li>
                                <Link to="/">서비스팀장/지도자안내</Link>
                            </li>
                            <li>
                                <Link to="/">e-book</Link>
                            </li>
                            <li>
                                <Link to="/">관련기간안내</Link>
                            </li>
                            <li>
                                <Link to="/">장애인전용체육시설 현황</Link>
                            </li>
                        </ol>
                    </div>
                </li>
                <li>
                    <Link to="/">찾아가는 생활체육</Link>
                    <div className="header_gnb">
                        <ol className="header_gnb_list">
                            <li>
                                <Link to="/">찾아가는 생활체육 안내</Link>
                            </li>
                            <li>
                                <Link to="/">생활체육 상담게시판</Link>
                            </li>
                            <li>
                                <Link to="/">생활체육서비스팀 일정보기</Link>
                            </li>
                        </ol>
                    </div>
                </li>
                <li>
                    <Link to="/">생활체육 이렇게 해봐요</Link>
                    <div className="header_gnb">
                        <ol className="header_gnb_list">
                            <li>
                                <Link to="/">생활체육 이렇게 해봐요</Link>
                            </li>
                            <li>
                                <Link to="/">비대면 자료실</Link>
                            </li>
                            <li>
                                <Link to="/">통합체육 수업안내서 동영상</Link>
                            </li>
                        </ol>
                    </div>
                </li>
                <li>
                    <Link to="/">스포츠용품대여</Link>
                    <div className="header_gnb">
                        <ol className="header_gnb_list">
                            <li>
                                <Link to="/">사업안내</Link>
                            </li>
                            <li>
                                <Link to="/">용품보유현황</Link>
                            </li>
                            <li>
                                <Link to="/">용품임대조회</Link>
                            </li>
                        </ol>
                    </div>
                </li>
                <li>
                    <Link to="/">생활체육프로그램 안내</Link>
                    <div className="header_gnb">
                        <ol className="header_gnb_list">
                            <li>
                                <Link to="/">생활체육동호인클럽</Link>
                            </li>
                            <li>
                                <Link to="/">생활체육교실안내</Link>
                            </li>
                            <li>
                                <Link to="/">생활체육대회/행사정보</Link>
                            </li>
                        </ol>
                    </div>
                </li>
                <li>
                    <Link to="/">고객마당</Link>
                    <div className="header_gnb">
                        <ol className="header_gnb_list">
                            <li>
                                <Link to="/">공지사항</Link>
                            </li>
                            <li>
                                <Link to="/">자유게시판</Link>
                            </li>
                            <li>
                                <Link to="/">사진/영상 갤러리</Link>
                            </li>
                            <li>
                                <Link to="/">생활체육자료실</Link>
                            </li>
                            <li>
                                <Link to="/">청각·언어장애인을 위한 이용안내</Link>
                            </li>
                        </ol>
                    </div>
                </li>
            </ul>
            <div className="header_menu_all inner">
                <Link to="/">전체메뉴로 이동</Link>
            </div>
        </div>
    </header>
  )
}

export default Header