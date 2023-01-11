import { useEffect, useState } from 'react';

import Header from '../components/Header.js';
import InfoArticle from '../components/InfoArticle.js';

import { db } from "../firebase";
import {query, collection, onSnapshot} from "firebase/firestore" 

const DetailsArticle = () => {

    let url = document.location.pathname.slice(-20);

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const queryList = query(collection(db, "articlesDataApp"));

        const unSubScribe = onSnapshot(queryList, (querySnapshot) => {
            let articlesArr = []
            querySnapshot.forEach((doc) => articlesArr.push({...doc.data(), id: doc.id}));
      
            setArticles(articlesArr)
        });
      
        return () => unSubScribe()
    }, [])

    console.log(url)
    
    return(
        <div className='container'>
            <Header></Header>
            
            <div className='article-info'>
                {
                    articles.filter(item => item.id === url).map(({title, description, imageUrl, expertComment}) => <InfoArticle title={title} description={description} imageUrl={imageUrl} expertComment={expertComment}/>)
                }
                
            </div>
        </div>
    )
}

export default DetailsArticle;