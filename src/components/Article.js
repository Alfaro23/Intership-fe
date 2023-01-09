import { Link} from "react-router-dom"

const Article = ({title, imageUrl, id}) => {
    

    return(
        <article className="article">
            <Link to={`/article/${id}`}>
                <img src={imageUrl} alt="Image article" className="article__img"></img>
                <p className="article__text">
                    {title}
                </p>
            </Link>
        </article>
    )
}

export default Article;