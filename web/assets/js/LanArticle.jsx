function LanArticle(props) {
    
    const { title = "關於荏芊堪卓",
        subtitle = "理念闡述或標語理念闡述標語理念闡述或標語",
        content = "文字簡介文字簡介文字簡介<br/>文字簡介文字簡介文字<br/>簡介文字簡介文字簡介文字<br/>簡介文字簡介文字簡介<br/>文字簡介文字簡介文字簡介文字簡介",
        link = "#",
        noMoreBtn = false,
        moreBtnIconContent = "→"
    } = props;
    return <>
        <article className="lan-article">
            <h3 className="title">{title}</h3>
            <div className="end-box">
                <h4 className="subtitle">{subtitle}</h4>
                <p className="content">
                    {
                        content.split("<br/>").map((item, index, arr) => {
                            if (index != (arr.length - 1)) {
                                return <span key={index}>
                                    {item}
                                    <br />
                                </span>
                            } else {
                                return <span key={index}>{item}</span>
                            }
                        })
                    }
                </p>
                {
                    noMoreBtn ? <></> : <ViewMoreBtn url={link} moreBtnIconContent={moreBtnIconContent} />
                }

            </div>
        </article>
    </>
}

function ViewMoreBtn({ url = "#", moreBtnIconContent = "→" }) {
    return <>
        <a href={url} className="view-more-btn">
            <p className="text">view more</p>
            <div className="icon">{moreBtnIconContent}</div>
        </a>
    </>
}