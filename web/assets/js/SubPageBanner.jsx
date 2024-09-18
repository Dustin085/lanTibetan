function SubPageBanner(props) {
    const {
        imgUrl = "./assets/images/picture/lan5.jpg",
        titleTc = "關於荏芊堪卓",
        titleTibetan = "རྩོམ་ཡིག",
        onConstruction = false
    } = props;
    return <>
        <section id="sub-page-banner">
            <div className="wrap">
                <picture className="banner-pic"><img src={imgUrl} alt="" /></picture>
                <h1 className="title-box">
                    <div className="title-tc">{titleTc}</div>
                    <div className="title-tibetan">{titleTibetan}</div>
                </h1>
                <OnConstructionWarning onConstruction={onConstruction} />
            </div>
        </section>
    </>
}

function OnConstructionWarning({ onConstruction = false }) {
    if (onConstruction) {
        return <>
            <h2 className="construction-text">施工中</h2>
            <picture className="construction-icon"><img src="./assets/images/illustration/construction-icon.png" alt="" /></picture>
        </>
    }
}