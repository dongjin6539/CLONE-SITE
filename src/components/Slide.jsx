import React from 'react'
import { Link } from 'react-router-dom';

const Slide = () => {
  return (
    <section>
        <div id="mainContents" className="main_slide pos_r">
            <div className="main_slide_txt">
                <h2>생활체육</h2>
                <p>장애를 이기는 좋은습관입니다.</p>
            </div>
            <div className="owl-carousel owl-carousel1 owl-theme owl-loaded owl-drag">
                <div className="owl-stagt-outer">
                    <div className="owl-stage">
                        <div className="owl-item">
                            <div className="item">
                                <img src="assets/images/slide01.png" alt="슬라이드 이미지1" />
                            </div>
                        </div>
                        <div className="owl-item">
                            <div className="item">
                                <img src="assets/images/slide02.png" alt="슬라이드 이미지2" />
                            </div>
                        </div>
                        <div className="owl-item">
                            <div className="item">
                                <img src="assets/images/slide03.png" alt="슬라이드 이미지3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="control_btn">
                <button className="prev_btn">이전</button>
                <button className="both_btn">정지</button>
                <button className="next_btn">다음</button>
            </div>
        </div>
        <div className="main_link_area bg_v8">
            <div className="main_link inner clear">
                <div className="linkbox">
                    <div className="linkbox_1">
                        <div className="box">
                            <Link to="/" className="leader_link">
                                <p className="link_tit">
                                    <strong>생활체육 지도자</strong>
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="linkbox_2">
                        <div className="box">
                            <Link to="/" className="leader_link">
                                <p className="link_tit">
                                    <strong>스포츠 용품대여</strong>
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="linkbox_3">
                        <div className="box">
                            <Link to="/" className="leader_link">
                                <p className="link_tit">
                                    <strong>생활체육 동호회</strong>
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="linkbox_4">
                        <div className="box">
                            <Link to="/" className="leader_link">
                                <p className="link_tit">
                                    <strong>서비스 상담하기</strong>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Slide