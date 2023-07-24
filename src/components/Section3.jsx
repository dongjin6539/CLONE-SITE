import React from 'react'
import { Link } from 'react-router-dom';

const Section3 = () => {
  return (
    <section id="section3" className="section3 section">
        <div className="inner">
            <h2 className="m_tit">
                다양하게 이용해요! <span>생활체육서비스</span>
            </h2>
            <div className="section3_list pc_sec3">
                <ul className="section3_tab clear">
                    <li className="on">
                        <button type="button">
                            <span>찾아가는</span>
                            생활체육서비스
                            <span className="select_text"> : 해당 탭이 선택되었습니다.</span>
                        </button>
                    </li>
                    <li>
                        <button type="button">
                            <span>알려드려요</span>
                            생활체육정보
                            <span className="select_text"> : 해당 탭이 선택되었습니다.</span>
                        </button>
                    </li>
                    <li>
                        <button type="button">
                            <span>함께 소통해요!</span>
                            소셜 컬쳐
                            <span className="select_text"> : 해당 탭이 선택되었습니다.</span>
                        </button>
                    </li>
                    <li>
                        <button type="button">
                            <span>청각·언어장애인을 위한</span>
                            이용안내
                            <span className="select_text"> : 해당 탭이 선택되었습니다.</span>
                        </button>
                    </li>
                </ul>
                <div className="section3_ct">
                    <div className="section3_ct1 clear">
                        <div>
                            <Link to="/">
                                <em className="serivce_tit">상담하기</em>
                                <p className="serivce_ct">생활체육정보센터에 궁금한 점을 상담해보세요.</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <em className="serivce_tit">내상담 내역보기</em>
                                <p className="serivce_ct">내 상담 내역을 자세하게 확인해보세요.</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <em className="serivce_tit">전체상담 내역보기</em>
                                <p className="serivce_ct">전체상담 내역을 자세하게 확인해보세요.</p>
                            </Link>
                        </div>
                        <div className="serivce_box4">
                            <em className="serivce_tit">상담전화</em>
                            <p className="serivce_ct4">
                                1577-7976
                                <span>상담시간 : 평일 09:00 - 18:00</span>
                            </p>
                        </div>
                    </div>
                    <div className="section3_ct2 clear">
                        <Link to="/">
                            <dl className="ebook_box">
                                <dt className="info_tit">e-Book</dt>
                                <dd className="info_ct">
                                    e-Book으로 다양한 정보를 <span>간편하게 학습해보세요.</span>
                                </dd>
                            </dl>
                        </Link>
                        <Link to="/">
                            <dl className="webzine_box">
                                <dt className="info_tit">웹진</dt>
                                <dd className="info_ct">
                                    대한장애인체육회 웹진을 통해 <span>매월 새로운소식을 만나보세요.</span>
                                </dd>
                            </dl>
                        </Link>
                    </div>
                    <div className="section3_ct3">
                        <ul>
                            <li className="sns1">
                                <Link to="/">페이스북</Link>
                            </li>
                            <li className="sns2">
                                <Link to="/">인스타그램</Link>
                            </li>
                            <li className="sns3">
                                <Link to="/">유튜브</Link>
                            </li>
                            <li className="sns4">
                                <Link to="/">트위터</Link>
                            </li>
                            <li className="sns5">
                                <Link to="/">블로그</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="section3_ct4">
                        <Link to="/">
                            <p>
                                <span>청각·언어장애인을 위한 이용안내 페이지로 이동</span>합니다.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section3