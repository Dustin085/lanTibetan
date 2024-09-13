function ArticleCardCol(props) {
    const {
        link = "#",
        imgUrl = "./assets/images/picture/buddhist-text3.jpg",
        title = "文章標題文章標題文章標題文章標題文章標題",
        time = "2024 08/04-10/06"
    } = props;
    return <>
        <a href={link} className="article-card-col">
            <picture className="picture"><img src={imgUrl} alt="" /></picture>
            <h3 className="title">{title}</h3>
            <p className="time">{time}</p>
        </a>
    </>
}