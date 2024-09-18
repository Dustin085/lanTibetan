function SimpleCardList(props) {
    const { listData = [] } = props;


    return <>
        <ul className="simple-card-list">
            {
                listData.map((item, index) => {
                    const {
                        link,
                        imgUrl,
                        title,
                    } = item;
                    return (
                        <li className="simple-card-item" key={index}>
                            <SimpleCardListItem
                                link={link}
                                imgUrl={imgUrl}
                                title={title}
                            />
                        </li>
                    )
                })
            }
        </ul>
    </>

    function SimpleCardListItem(props) {
        const {
            link = "#",
            imgUrl = "./assets/images/picture/buddhist-text3.jpg",
            title = "藏地語文",
        } = props;
        return <>
            <a href={link} className="simple-card">
                <picture className="picture-masked"><img src={imgUrl} alt="" /></picture>
                <h3 className="title">{title}</h3>
                <div className="split-line-row"></div>
            </a>
        </>
    }
}