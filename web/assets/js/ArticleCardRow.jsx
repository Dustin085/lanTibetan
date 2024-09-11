function ArticleCardRow(props) {
    const { category = "最新課程",
        title = "課程標題課程標題課程標題課程標題課程標題",
        date = "2024 08/04-10/06",
        imgUrl = "./assets/images/picture/yak1.jpg" } = props;
    return <>
        <article className="article-card-row">
            <a href="#" className="card-wrap">
                <div className="content-box">
                    <p className="category">{category}</p>
                    <h3 className="title">{title}</h3>
                    <p className="date">{date}</p>
                </div>
                <figure className="pic"><img src={imgUrl} alt="" /></figure>
            </a>
        </article>
    </>
}