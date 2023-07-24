import React from 'react'
import { Link } from 'react-router-dom';

const Section6 = () => {
  return (
    <section id="section6" className="section6 section">
        <div className="inner pos_r">
            <div className="exercise_tit">
                <h2 className="m_tit">
                    <em className="clear">건강하고 더 나은 삶을 위한</em>
                    <span>생활체육 이렇게 해봐요!</span>
                </h2>
                <Link className="more" to="/" target="_blank">더보기 <span>더보기 아이콘</span></Link>
            </div>
            <div className="slide_box pos_r">
                <div className="control_btn">
                    <button className="prev_btn">이전</button>
                    <button className="next_btn">다음</button>
                </div>
                <div className="exercise_slide owl-carousel owl-carousel3 clear">
                    <div className="owl-stage-outer">
                        <div className="owl-item">
                            <div className="slide item" style={{width: '310px'}}>
                                <div className="exercise_img">
                                    <img src="assets/images/artistic.png" alt="새천년체조 이미지" />
                                </div>
                                <em className="exercise_tit">새천년체조</em>
                                <p>우리 민족 고유의 기상과
                                    <span>움직임을 되살려 현대인들의...</span>
                                </p>
                                <Link to="/" target="_blank">상세보기 <span className="more_detail"> 종목 상세보기</span></Link>
                            </div>
                        </div>
                        <div className="owl-item">
                            <div className="slide item" style={{width: '310px'}}>
                                <div className="exercise_img">
                                    <img src="assets/images/weighttraining.png" alt="웨이트트레이닝 체조이미지" />
                                </div>
                                <em className="exercise_tit">웨이트트레이닝</em>
                                <p>웨이트트레이닝은 자기 체중을
                                    <span> 이용하여 하는 운동을 비롯하여...</span>
                                </p>
                                <Link to="/" target="_blank">상세보기 <span className="more_detail"> 종목 상세보기</span></Link>
                            </div>
                        </div>
                        <div className="owl-item">
                            <div className="slide item">
                                <div className="exercise_img" style={{width: '310px'}}>
                                    <img src="assets/images/bowling.png" alt="볼링 이미지" />
                                </div>
                                <em className="exercise_tit">볼링</em>
                                <p>13~14세기 무렵 독일의 한
                                    <span>교회에서 성행했던 의식으로 악마에...</span>
                                </p>
                                <Link to="/" target="_blank">상세보기 <span className="more_detail"> 종목 상세보기</span></Link>
                            </div>
                        </div>
                        <div className="owl-item">
                            <div className="slide item" style={{width: '310px'}}>
                                <div className="exercise_img">
                                    <img src="assets/images/hiking.png" alt="등산 이미지" />
                                </div>
                                <em className="exercise_tit">등산</em>
                                <p>등산은 일반적으로 산에
                                    <span>오르는 행위를 말하는데 트래킹...</span>
                                </p>
                                <Link to="/" target="_blank">상세보기 <span className="more_detail"> 종목 상세보기</span></Link>
                            </div>
                        </div>
                        <div className="owl-item">
                            <div className="slide item" style={{width: '310px'}}>
                                <div className="exercise_img">
                                    <img src="assets/images/parkgolf2.png" alt="파크골프 이미지" />
                                </div>
                                <em className="exercise_tit">파크골프</em>
                                <p>공원(Park)과 골프(Golf)를 합성한
                                    <span>말로 공원에서 이야기하며 즐기는...</span>
                                </p>
                                <Link to="/" target="_blank">상세보기 <span className="more_detail"> 종목 상세보기</span></Link>
                            </div>
                        </div>
                        <div className="owl-item">
                            <div className="slide item" style={{width: '310px'}}>
                                <div className="exercise_img">
                                    <img src="assets/images/swimmning.png" alt="수영 이미지" />
                                </div>
                                <em className="exercise_tit">수영</em>
                                <p>수영은 물에서 이루어지는 모든
                                    <span>움직임 및 활동으로써 누구나...</span>
                                </p>
                                <Link to="/" target="_blank">상세보기 <span className="more_detail"> 종목 상세보기</span></Link>
                            </div>
                        </div>
                        <div className="owl-item">
                            <div className="slide item" style={{width: '310px'}}>
                                <div className="exercise_img">
                                    <img src="assets/images/taekwondo.png" alt="태권도 이미지" />
                                </div>
                                <em className="exercise_tit">태권도</em>
                                <p>태권도의 일반적 목표는 여러가지
                                    <span>활동을 통해 균형적인 신체 발달과...</span>
                                </p>
                                <Link to="/" target="_blank">상세보기 <span className="more_detail"> 종목 상세보기</span></Link>
                            </div>
                        </div>
                        <div className="owl-item">
                            <div className="slide item" style={{width: '310px'}}>
                                <div className="exercise_img">
                                    <img src="assets/images/yoga.png" alt="요가 이미지" />
                                </div>
                                <em className="exercise_tit">요가</em>
                                <p>요가는 이러한 목적을 달성하기
                                    <span>위하여 인간으로서 가장 이성적인...</span>
                                </p>
                                <Link to="/" target="_blank">상세보기 <span className="more_detail"> 종목 상세보기</span></Link>
                            </div> 
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section6