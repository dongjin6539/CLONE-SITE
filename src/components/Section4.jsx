import React from 'react'
import { Link } from 'react-router-dom';

const Section4 = () => {
  return (
    <section id="section4" className="section4 section">
        <div className="inner clear">
            <div className="section4_left">
                <h2 className="m_tit">지역별 <span>생활체육정보</span></h2>
                <p className="txt_map">지도에서 지역을 선택하시면 정보를 확인하실 수 있습니다.</p>
                <p className="txt_select">지역을 선택하시면 정보를 확인하실 수 있습니다.</p>
                <span className="chk_box_v3">
                    <input type="checkbox" name="map_all_choice" id="map_all_choice" className="map_all_choice" checked={true} />
                    <label htmlFor="map_all_choice" className="label">
                        <span></span>
                        전체지역 선택
                    </label>
                </span>
                <div className="select_sido">
                    <label htmlFor="serhSidoCd" className="r_only">시/도</label>
                    <select id="serhSidoCd" name="serhSidoCd" title="시/도 선택">
                        <option value="">전체</option>
                            <option value="01">서울</option>
                            <option value="02">부산</option>
                            <option value="04">대구</option>
                            <option value="03">인천</option>
                            <option value="05">광주</option>
                            <option value="06">대전</option>
                            <option value="07">울산</option>
                            <option value="17">세종</option>
                            <option value="08">경기</option>
                            <option value="09">강원</option>
                            <option value="10">충북</option>
                            <option value="11">충남</option>
                            <option value="12">전북</option>
                            <option value="13">전남</option>
                            <option value="14">경북</option>
                            <option value="15">경남</option>
                            <option value="16">제주</option>
                    </select>
                </div>
                <ol className="map_info mg_t20">
                    <li>
                        <div className="map_tit">
                            <p>장애인전용 <span>체육시설</span></p>
                            <Link to="/">상세보기<span className="more_detail">상세보기 아이콘</span></Link>
                        </div>
                        <strong className="map_num">
                            <span id="sportsTotCnt">73</span> 개
                        </strong>
                    </li>
                    <li>
                        <div className="map_tit">
                            <p>생활체육 <span>동호인 클럽</span></p>
                            <Link to="/">상세보기<span className="more_detail">상세보기 아이콘</span></Link>
                        </div>
                        <strong className="map_num">
                            <span id="sportsTotCnt">935</span> 개
                        </strong>
                    </li>
                    <li>
                        <div className="map_tit">
                            <p>생활체육<span>교실</span></p>
                            <Link to="/">상세보기<span className="more_detail">상세보기 아이콘</span></Link>
                        </div>
                        <strong className="map_num">
                            <span id="sportsTotCnt">1581</span> 개
                        </strong>
                    </li>
                </ol>
            </div>
            <div className="section4_right pos_r">
                <div className="s4_center">
                    <div className="s4_map_align">
                        <div>
                            <img src="assets/images/map_before.png" alt="우리나라 지도" />
                        </div>
                        <ul className="map_all">
                            <li className="map_region1 on">
                                <input type="hidden" name="sdCd" value="01" />
                                <button className="map_tit">서울</button>
                                <div className="map_img">
                                    <img src="assets/images/map1.png" alt="서울지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark1">
                                    <span>서울</span>
                                </em>
                            </li>
                            <li className="map_region2 on">
                                <input type="hidden" name="sdCd" value="03" />
                                <button className="map_tit">인천</button>
                                <div className="map_img">
                                    <img src="assets/images/map2.png" alt="인천지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark2">
                                    <span>인천</span>
                                </em>
                            </li>
                            <li className="map_region3 on">
                                <input type="hidden" name="sdCd" value="08" />
                                <button className="map_tit">경기</button>
                                <div className="map_img">
                                    <img src="assets/images/map3.png" alt="경기도지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark3">
                                    <span>경기</span>
                                </em>
                            </li>
                            <li className="map_region4 on">
                                <input type="hidden" name="sdCd" value="09" />
                                <button className="map_tit">강원</button>
                                <div className="map_img">
                                    <img src="assets/images/map4.png" alt="강원도지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark4">
                                    <span>강원</span>
                                </em>
                            </li>
                            <li className="map_region5 on">
                                <input type="hidden" name="sdCd" value="10" />
                                <button className="map_tit">충북</button>
                                <div className="map_img">
                                    <img src="assets/images/map5.png" alt="충청북도지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark5">
                                    <span>충북</span>
                                </em>
                            </li>
                            <li className="map_region6 on">
                                <input type="hidden" name="sdCd" value="11" />
                                <button className="map_tit">충남</button>
                                <div className="map_img">
                                    <img src="assets/images/map6.png" alt="충청남도지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark6">
                                    <span>충남</span>
                                </em>
                            </li>
                            <li className="map_region7 on">
                                <input type="hidden" name="sdCd" value="17" />
                                <button className="map_tit">세종</button>
                                <div className="map_img">
                                    <img src="assets/images/map7.png" alt="세종시지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark7">
                                    <span>세종</span>
                                </em>
                            </li>
                            <li className="map_region8 on">
                                <input type="hidden" name="sdCd" value="06" />
                                <button className="map_tit">대전</button>
                                <div className="map_img">
                                    <img src="assets/images/map8.png" alt="대전지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark8">
                                    <span>대전</span>
                                </em>
                            </li>
                            <li className="map_region9 on">
                                <input type="hidden" name="sdCd" value="14" />
                                <button className="map_tit">경북</button>
                                <div className="map_img">
                                    <img src="assets/images/map9.png" alt="경상북도지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark9">
                                    <span>경북</span>
                                </em>
                            </li>
                            <li className="map_region10 on">
                                <input type="hidden" name="sdCd" value="15" />
                                <button className="map_tit">경남</button>
                                <div className="map_img">
                                    <img src="assets/images/map10.png" alt="경상남도지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark10">
                                    <span>경남</span>
                                </em>
                            </li>
                            <li className="map_region11 on">
                                <input type="hidden" name="sdCd" value="04" />
                                <button className="map_tit">대구</button>
                                <div className="map_img">
                                    <img src="assets/images/map11.png" alt="대구지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark11">
                                    <span>대구</span>
                                </em>
                            </li>
                            <li className="map_region12 on">
                                <input type="hidden" name="sdCd" value="07" />
                                <button className="map_tit">울산</button>
                                <div className="map_img">
                                    <img src="assets/images/map12.png" alt="울산지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark12">
                                    <span>울산</span>
                                </em>
                            </li>
                            <li className="map_region13 on">
                                <input type="hidden" name="sdCd" value="02" />
                                <button className="map_tit">부산</button>
                                <div className="map_img">
                                    <img src="assets/images/map13.png" alt="부산지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark13">
                                    <span>부산</span>
                                </em>
                            </li>
                            <li className="map_region14 on">
                                <input type="hidden" name="sdCd" value="13" />
                                <button className="map_tit">전남</button>
                                <div className="map_img">
                                    <img src="assets/images/map14.png" alt="전라남도지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark14">
                                    <span>전남</span>
                                </em>
                            </li>
                            <li className="map_region15 on">
                                <input type="hidden" name="sdCd" value="12" />
                                <button className="map_tit">전북</button>
                                <div className="map_img">
                                    <img src="assets/images/map15.png" alt="전라북도지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark15">
                                    <span>전북</span>
                                </em>
                            </li>
                            <li className="map_region16 on">
                                <input type="hidden" name="sdCd" value="05" />
                                <button className="map_tit">광주</button>
                                <div className="map_img">
                                    <img src="assets/images/map16.png" alt="광주지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark16">
                                    <span>광주</span>
                                </em>
                            </li>
                            <li className="map_region17 on">
                                <input type="hidden" name="sdCd" value="16" />
                                <button className="map_tit">제주</button>
                                <div className="map_img">
                                    <img src="assets/images/map17.png" alt="제주도지역 지도 이미지" />
                                </div>
                                <em className="map_mark map_mark17">
                                    <span>제주</span>
                                </em>
                            </li>
                        </ul><ul className="map_all">
                            <li className="map_region1"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section4