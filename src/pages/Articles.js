import { useState, useEffect } from "react";

import Article from "../components/Article";
import Header from "../components/Header";

import { db } from "../firebase";
import {query, collection, onSnapshot} from "firebase/firestore" 

export const Articles = () => {

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

    console.log(articles)
    return(
        <div className="container">
            <Header/>
            <main className="main">
                <div className="content">
                    {
                        articles.map((item, index) => <Article key={index} id={item.id} title={item.title} imageUrl={item.imageUrl}/>)
                    }
                </div>
            </main>
        </div>
    )
}