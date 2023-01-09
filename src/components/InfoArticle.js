

const InfoArticle = ({title, description, imageUrl, expertComment}) => {
    
    let newStr = description.split("\n");
    let newStrExpert = expertComment.split("\n")

    return(
        <>
            <h1 className="article-info__title">{title}</h1>
            <img src={imageUrl} alt="Article image" className="article-info__img"></img>
            <div className="article-info__description">
                {newStr.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            <div className="article-info__experts">
                <h4 className="article-info__name">Experts Comment</h4>
                <p>
                    {newStrExpert.map((item, index) => <p key={index}>{item}</p>)}
                </p>
            </div>
        </>
    )
}

export default InfoArticle;