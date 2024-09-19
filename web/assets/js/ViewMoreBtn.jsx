function ViewMoreBtn({ url = "#", moreBtnIconContent = "→", text = "view more" }) {
    return <>
        <a href={url} className="view-more-btn">
            <p className="text">{text}</p>
            <div className="icon">{moreBtnIconContent}</div>
        </a>
    </>
}