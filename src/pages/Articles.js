import data from "../data/data.json";
import Article from "../components/Article";
import Header from "../components/Header";

export const Articles = () => {

    //const getArticles = async () => {
        //return await fetch("https://remotemode.com/files/intership/front-end/financial-market-news-blog-project.json").then(data => console.log(data)).catch(err => console.log(err))//.then(item => setArticle(item))
        //return await fetch("../data/data.json").then(data => console.log(data)).catch(err => console.log(err))
    //}

    //useEffect(() => {
        // const data = await fetch("https://remotemode.com/files/intership/front-end/financial-market-news-blog-project.json");
        // getArticles("../data/data.json").then(item => console.log(item.json())).catch(error => console.log(error))
        // getArticles("https://remotemode.com/files/intership/front-end/financial-market-news-blog-project.json").then(item => console.log(item)).catch(error => console.log(error))
    //}, [])

    // console.log(data)
    return(
        <div className="container">
            <Header/>
            <main className="main">
                <div className="content">
                    {
                        data.map((item, index) => <Article key={index} id={item.id} title={item.title} imageUrl={item.imageUrl}/>)
                    }
                </div>
            </main>
        </div>
    )
}