function Topbar() {
    const { useEffect, useRef } = React;
    const overlayEle = useRef(null);
    const menuSwitchHandler = () => {
        console.log(overlayEle.current);
    };
    return <>
        <header id="topbar">
            <div className="start-box">
                <a href="./index.html" className="logo"></a>
            </div>
            <div className="end-box">
                <button type="button" className="menu-btn" onClick={menuSwitchHandler}></button>
            </div>
            <MenuOverlay overlayRef={overlayEle} />
        </header>
    </>
}

function MenuOverlay({ overlayRef }) {
    return <>
        <div className="menu-overlay" ref={overlayRef}>

        </div>
    </>
}