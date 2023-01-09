import Header from '../components/Header.js';
import data from "../data/data.json";
import InfoArticle from '../components/InfoArticle.js';

const DetailsArticle = () => {

    let url = document.location.pathname.slice(-1);
    
    return(
        <div className='container'>
            <Header></Header>
            
            <div className='article-info'>
                {
                    data.filter(item => item.id === url).map(({title, description, imageUrl, expertComment}) => <InfoArticle title={title} description={description} imageUrl={imageUrl} expertComment={expertComment}/>)
                }
                
            </div>
        </div>
    )
}

export default DetailsArticle;