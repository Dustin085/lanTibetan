function Topbar({ logoRef, fadeInOutLogo = false }) {
    const { useEffect, useRef } = React;
    const overlayRef = useRef(null);
    const menuBtnRef = useRef(null);
    const menuSwitchHandler = (ev) => {

        if (fadeInOutLogo) {
            // 按下當下是display:none代表正要啟動
            if ($(overlayRef.current).css("display") === "none") {
                // overlay啟動，logo顯示
                $(logoRef.current).stop().fadeIn();
            } else {
                // overlay消失，logo重新判斷是否消失
                $(window).scrollTop() < $("#banner").outerHeight() ? $(logoRef.current).stop().fadeOut() : $(logoRef.current).stop().fadeIn();
            }
        }
        $(overlayRef.current).stop().fadeToggle();
        $("body").toggleClass("overlay-is-active");
        $(menuBtnRef.current).toggleClass("is-active");

    };
    return <>
        <header id="topbar">
            <MenuOverlay overlayRef={overlayRef} />
            <div className="start-box">
                <a href="./index.html" className="logo" ref={logoRef}></a>
            </div>
            <div className="end-box">
                <button type="button" className="menu-btn" onClick={menuSwitchHandler} ref={menuBtnRef}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </header>
    </>
}

function MenuOverlay({ overlayRef }) {
    return <>
        <nav className="menu-overlay" ref={overlayRef}>
            <div className="menu-overlay-wrap">
                <div className="start-box">
                    <ul className="menu-list">
                        <li><a className="menu-item home-page-link" href="./index.html">首頁</a></li>
                        <li><a className="menu-item" href="./about.html">關於我</a></li>
                        <li><a className="menu-item" href="./lesson.html">藏文教學</a></li>
                        <li><a className="menu-item" href="./my-article.html">我的文章</a></li>
                    </ul>
                </div>
                <div className="mid-box">
                    <div className="pic-box">
                        <picture className="picture"><img src="./assets/images/picture/lan4.jpg" alt="荏芊堪卓在湖邊" /></picture>
                    </div>
                    <picture className="illustration-teacher"><img src="./assets/images/illustration/teacher1.png" alt="" /></picture>
                </div>
                <div className="end-box">
                    <div className="wrap">
                        <h3 className="title">藏地文化介紹</h3>
                        <div className="menu-list">
                            <div className="row">
                                <a className="menu-item" href="./culture-language.html">語文</a>
                                <a className="menu-item" href="./culture-religion.html">宗教</a>
                            </div>
                            <div className="row">
                                <a className="menu-item" href="./culture-vernacular.html">風俗</a>
                                <a className="menu-item" href="./culture-art.html">藝術</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <picture className="illustration-yak"><img src="./assets/images/illustration/Yak.png" alt="" /></picture> */}
            </div>
        </nav>
    </>
}