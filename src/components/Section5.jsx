import React from 'react'
import { Link } from 'react-router-dom';

const Section5 = () => {
  return (
    <section id="section5" className="section5 section">
        <div className="inner clear">
            <div className="section5_right">
                <div className="rental_tit">
                    <h2 className="m_tit">
                        <em className="clear">대여해봅시다!</em>
                        <span>스포츠용품 보유현황</span>
                    </h2>
                    <Link to="/" className="more">
                        더보기 <span>더보기 아이콘</span>
                    </Link>
                </div>
                <div className="slide_box pos_r">
                    <div className="control_btn">
                        <button className="prev_btn">이전</button>
                        <button className="next_btn">다음</button>
                    </div>
                    <ul className="bxslider owl-carousel owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                            <div className="owl-item">
                                <li>
                                    <dl className="rental_ct2">
                                        <dt>
                                            <img src="assets/images/badminton.png" alt="배드민턴" />
                                            <span className="rental_img_tit">
                                                <span className="clear">추천</span>종목
                                            </span>
                                        </dt>
                                        <dd>
                                            <Link to="/"><em>배드민턴</em></Link>
                                        </dd>
                                    </dl>
                                </li>
                            </div>
                            <div className="owl-item">
                                <li>
                                    <dl className="rental_ct2">
                                        <dt>
                                            <img src="assets/images/basketball.png" alt="농구" />
                                            <span className="rental_img_tit">
                                                <span className="clear">추천</span>종목
                                            </span>
                                        </dt>
                                        <dd>
                                            <Link to="/"><em>농구</em></Link>
                                        </dd>
                                    </dl>
                                </li>
                            </div><div className="owl-item">
                                <li>
                                    <dl className="rental_ct2">
                                        <dt>
                                            <img src="assets/images/cycle.png" alt="사이클" />
                                            <span className="rental_img_tit">
                                                <span className="clear">추천</span>종목
                                            </span>
                                        </dt>
                                        <dd>
                                            <Link to="/"><em>사이클</em></Link>
                                        </dd>
                                    </dl>
                                </li>
                            </div><div className="owl-item">
                                <li>
                                    <dl className="rental_ct2">
                                        <dt>
                                            <img src="assets/images/gateball.png" alt="게이트볼" />
                                            <span className="rental_img_tit">
                                                <span className="clear">추천</span>종목
                                            </span>
                                        </dt>
                                        <dd>
                                            <Link to="/"><em>게이트볼</em></Link>
                                        </dd>
                                    </dl>
                                </li>
                            </div><div className="owl-item">
                                <li>
                                    <dl className="rental_ct2">
                                        <dt>
                                            <img src="assets/images/parkgolf.png" alt="파크골프" />
                                            <span className="rental_img_tit">
                                                <span className="clear">추천</span>종목
                                            </span>
                                        </dt>
                                        <dd>
                                            <Link to="/"><em>파크골프</em></Link>
                                        </dd>
                                    </dl>
                                </li>
                            </div><div className="owl-item">
                                <li>
                                    <dl className="rental_ct2">
                                        <dt>
                                            <img src="assets/images/newsports.png" alt="뉴스포츠" />
                                            <span className="rental_img_tit">
                                                <span className="clear">추천</span>종목
                                            </span>
                                        </dt>
                                        <dd>
                                            <Link to="/"><em>뉴스포츠</em></Link>
                                        </dd>
                                    </dl>
                                </li>
                            </div><div className="owl-item">
                                <li>
                                    <dl className="rental_ct2">
                                        <dt>
                                            <img src="assets/images/rowing.png" alt="조정" />
                                            <span className="rental_img_tit">
                                                <span className="clear">추천</span>종목
                                            </span>
                                        </dt>
                                        <dd>
                                            <Link to="/"><em>조정</em></Link>
                                        </dd>
                                    </dl>
                                </li>
                            </div><div className="owl-item">
                                <li>
                                    <dl className="rental_ct2">
                                        <dt>
                                            <img src="assets/images/tennis.png" alt="테니스" />
                                            <span className="rental_img_tit">
                                                <span className="clear">추천</span>종목
                                            </span>
                                        </dt>
                                        <dd>
                                            <Link to="/"><em>테니스</em></Link>
                                        </dd>
                                    </dl>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section5