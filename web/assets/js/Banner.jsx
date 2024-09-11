function Banner() {
    const { useState, useEffect } = React;
    const [slideUrlList, setSlideUrlList] = useState([]);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    useEffect(() => {
        // 初渲染完畢後開始接收資料
        axios.get("./assets/json/homePageBannerImgUrls.json")
            .then((response) => setSlideUrlList(response.data))
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        // 每次更新slide來源時就從第0張開始播放
        $(".slide").each((index, slide) => {
            let switchTime = 5000;
            let zoomoutTransitionTime = 8;
            if (index === activeSlideIndex) {
                $(slide).stop().show();

                slideImgZoomOutEffect(slide, zoomoutTransitionTime, switchTime);
            } else {
                $(slide).stop().hide();
            }
        });
        setActiveSlideIndex(0);
    }, [slideUrlList]);

    useEffect(() => {
        // 當activeSlideIndex改變的時候，切換slide
        let fadeDuration = 500;
        let switchTime = 5000;
        let zoomoutTransitionTime = 8;
        $(".slide").each((index, slide) => {
            if (index === activeSlideIndex) {
                $(slide).stop().fadeIn(fadeDuration);
                slideImgZoomOutEffect(slide, zoomoutTransitionTime, switchTime);
            } else {
                $(slide).stop().fadeOut(fadeDuration);
            }
        });
        // 每?秒切換activeSlideIndex
        setTimeout(() => {
            setActiveSlideIndex(cyclingNum(activeSlideIndex, 1, 4));
        }, switchTime);

        // 循環botNum-topNum，用來循環輪播次頁前頁按鈕
        // 參數名稱 => fromNum: 開始數字，diff: 要移動的步數，topNum, botNum: 循環區間最大(小)值
        function cyclingNum(fromNum, diff, topNum, botNum = 0) {
            // 循環數字的區間長度，大減小後+1才會是正確的長度
            let numLength = topNum - botNum + 1;
            let result = 0;
            // 當result超過範圍的時候應該要立刻回到另一端並算做一次計數，然而在我們的計算過程中這個計數被忽略了，所以要校正
            // 例如，假設現在區間範圍是-1~4，當從4再往上加1的時候應該要直接變成-1，但我們的計算會將他算成4+1=5，所以要-1做校正
            const ordinalCorrect = 1;
            // 往前或後移動的步數
            let move = diff % numLength;
            result = fromNum + move;
            // 超出移動範圍就循環
            if (result > topNum) {
                result = botNum + (result - topNum) - ordinalCorrect;
            } else if (result < botNum) {
                result = topNum - (botNum - result) + ordinalCorrect;
            }
            return result;
        }
    }, [activeSlideIndex]);

    // 讓slide裡面的img有zoomout動畫效果
    function slideImgZoomOutEffect(slideEle, transitionTime, switchTime) {
        // 先改變transition讓zoomout時有動畫效果
        $(slideEle).find("img").css({ transition: `transform ${transitionTime}s` });
        $(slideEle).find("img").css({ transform: "scale(100%)" });
        // zoomout結束後把img設定回110%
        setTimeout(() => {
            $(slideEle).find("img").css({ transform: "scale(110%)" });
        }, switchTime);
    }

    return <>
        <section id="banner">
            {/* 之後在此加入自動輪播 */}
            <div className="slide-box">
                {/* <div className="slide"><img src="./assets/images/banner/banner1.jpg" alt="首頁輪播圖1" /></div> */}
                {
                    slideUrlList.map((url, index) => {
                        return <div key={index} className="slide"><img src={url} alt={`首頁輪播圖${index + 1}`} /></div>
                    })
                }
            </div>
            <h1 className="title-box">
                <div className="title-tc">荏芊堪卓</div>
                <div className="title-tibetan">རིན་ཆེན་མཁའ་འགྲོ།</div>
            </h1>
        </section>
    </>
}