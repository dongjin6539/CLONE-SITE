import React from 'react'
import { Link } from 'react-router-dom';

const Section2 = () => {
  return (
    <section id="section2" className="section2 section bg_v8">
        <div className="inner clear">
            <h2 className="m_tit">
                다양한 정보를 전해주는 <span>생활체육소식</span>
            </h2>
            <div className="section2_left">
                <div className="section2_tab">
                    <ul>
                        <li className="on"><Link to="/">공지사항</Link></li>
                        <li><Link to="/">사진/영상갤러리</Link></li>
                        <li><Link to="/">비대면게시판</Link></li>
                    </ul>
                    
                </div>
                <div className="section2_more">
                    <Link to="/" className="more on">
                        더보기 <span>공지사항 더보기 아이콘</span>
                    </Link>
                    <Link to="/" className="more">
                        더보기 <span>사진/영상갤러리 더보기 아이콘</span>
                    </Link>
                    <Link to="/" className="more">
                        더보기 <span>비대면게시판 더보기 아이콘</span>
                    </Link>
                </div>
                <div className="section2_ct">
                    <div className="section2_board clear">
                        <h2 className="blind">공지사항 내용</h2>
                        <Link to="/">
                            <dl>
                                <dt className="new_tit">
                                    <em>2023.05.26</em>
                                    <p>제2회 전국어울림생활체육대축전 안내</p>
                                </dt>
                                <dd className="new_ct">제2회 전국어울림생활체육대축전 안내 포스터입니다. 많은 관심과 참여부탁드립니다. 감사합니다.</dd>
                            </dl>
                        </Link>
                        <Link to="/">
                            <dl>
                                <dt className="new_tit">
                                    <em>2023.05.15</em>
                                    <p>제17회 전국장애학생체육대회</p>
                                </dt>
                                <dd className="new_ct">제17회 전국장애학생체육대회
                                    ○ 기간: 2023. 5. 16.(화) ~ 19.(금) / 4일간
                                    ○ 장소: 울산광역시 일원
                                        - 개회식: 5.16.(화) 16:00 울산 동천체육관                                           
                                    ○ 참가 인원: 약 3,500여명                                           
                                    ○ 경기종목: 17개 종목
                                        - 육성 종목(5) : 골볼, 보치아, 수영, 육상, 탁구
                                        - 보급 종목(10) : 농구, 디스크골프, 배구, 배드민턴, 볼링, 역도, 조정, 축구, 플로어볼, e스포츠
                                        - 시범 종목(1) : 슐런
                                        - 전시 종목(1) : 쇼다운
                                </dd>
                            </dl>
                        </Link>
                        <Link to="/">
                            <dl>
                                <dt className="new_tit">
                                    <em>2021.07.19</em>
                                    <p>생활체육정보센터 카카오톡 채널 개설 안내</p>
                                </dt>
                                <dd className="new_ct">안녕하세요. 생활체육정보센터 담당자입니다.
                                    이용자 분들의 홈페이지 사용 편의를 증진 시키기 위해,                                            
                                    실시간 홈페이지 이용 관련 문의사항 안내를 할 수 있는                                            
                                    생활체육정보센터 카카오톡 채널이 개설 되었습니다.(홈페이지 메인 화면 우측 상단 아이콘 배치)                                           
                                    * 운영시간: 월~금, 10:00~17:00(* 점심시간 제외)
                                    붙임의 QR코드와 URL 주소(http://pf.kakao.com/_GxlxiqK)를 이용하여 채널추가 및 채팅이 가능합니다.
                                    많은 관심과 이용 부탁드립니다.   
                                    감사합니다.
                                </dd>
                            </dl>
                        </Link>
                    </div>
                    <div className="section2_board clear">
                        <h2 className="blind">사진/영상 갤러리</h2>
                        <Link to="/">
                            <dl>
                                <dt className="new_tit gallery_tit">
                                    <em>2021.01.08</em>
                                    <p><img src="assets/images/banner01.png" alt="여성스포츠위원회 홍보영상" /></p>
                                </dt>
                                <dd className="new_ct gallery_ct">여성스포츠위원회 홍보영상</dd>
                            </dl>
                        </Link>
                        <Link to="/">
                            <dl>
                                <dt className="new_tit gallery_tit">
                                    <em>2020.03.18</em>
                                    <p><img src="assets/images/banner02.png" alt="코로나바이러스감염증-19 예방 국민 행동수칙" /></p>
                                </dt>
                                <dd className="new_ct gallery_ct">코로나바이러스감염증-19 예방 국민 행동수칙</dd>
                            </dl>
                        </Link>
                        <Link to="/">
                            <dl>
                                <dl>
                                    <dt className="new_tit gallery_tit">
                                        <em>2020.03.18</em>
                                        <p><img src="assets/images/banner03.png" alt="코로나바이러스감염증-19 예방 국민 행동수칙(영상)" /></p>
                                    </dt>
                                    <dd className="new_ct gallery_ct">코로나바이러스감염증-19 예방 국민 행동수칙(영상)</dd>
                                </dl>
                            </dl>
                        </Link>
                    </div>
                    <div className="section2_board clear">
                        <h2 className="blind">비대면게시판</h2>
                        <Link to="/">
                            <dl>
                                <dt className="new_tit">
                                    <em>2020.12.14</em>
                                    <p>시도장애인체육회별 비대면 홈트레이닝 영상을 소개합니다.</p>
                                </dt>
                            </dl>
                        </Link>
                        <Link to="/">
                            <dl>
                                <dt className="new_tit">
                                    <em>2022.03.30</em>
                                    <p>역량강화 폐회식 12.03 김동민 장애인 프로그램 평가</p>
                                </dt>
                            </dl>
                        </Link>
                        <Link to="/">
                            <dl>
                                <dt className="new_tit">
                                    <em>2022.03.30</em>
                                    <p>12.03 강지환 운동재활과 처치</p>
                                </dt>
                            </dl>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="section2_right">
                <div className="slideArea">
                    <div className="slide_top pos_r">
                        <p>
                            <em>1</em> / <span>1</span>
                        </p>
                        <div className="control_btn">
                            <button type="button" className="prev_btn">이전</button>
                            <button type="button" className="both_btn">정지</button>
                            <button type="button" className="next_btn">다음</button>
                        </div>
                    </div>
                    <div className="web-slider type01">
                        <div id="webSlider1" className="slider-list">
                            <div className="item">
                                <Link to="/">
                                    <img src="assets/images/banner04.png" alt="이 누리집은 문화체육관광부, 복권위원회, 국민체육진흥공단의 재정후원을 받고 있습니다." />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2