import React from 'react'

const Aside = () => {
  return (
    <aside>
        <div className="side_menu">
            <div className="scroll_menu">
                <ol>
                    <li className="on">
                        <button>
                            생활체육소식
                            <span className="scroll_circle"><span></span></span>
                        </button>
                    </li>
                    <li>
                        <button>
                            생활체육서비스
                            <span className="scroll_circle"><span></span></span>
                        </button>
                    </li>
                    <li>
                        <button>
                            생활체육프로그램
                            <span className="scroll_circle"><span></span></span>
                        </button>
                    </li>
                    <li>
                        <button>
                            스포츠용품
                            <span className="scroll_circle"><span></span></span>
                        </button>
                    </li>
                    <li>
                        <button>
                            생활체육영상
                            <span className="scroll_circle"><span></span></span>
                        </button>
                    </li>
                </ol>
            </div>
            <p className="scroll_img">Scroll</p>
        </div>
        <button className="scroll_top">TOP</button>
    </aside>
  )
}

export default Aside