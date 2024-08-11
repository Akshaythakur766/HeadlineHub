import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Categories.css"
import { UserContext } from "../../Context/AppContext";
const Categories = ({ category }) => {

    const [data,setdata]=useState(null);
    const [error,seterror]=useState(null);
    const [loading,setloading]=useState(true);
    const {IsCategory,setCategory}=useContext(UserContext)
    async function fetchData() {
        setloading(true)
        try {
            const apikey=import.meta.env.VITE_APP_NEWS_API_KEY;
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${category}&sources=the-hindu,the-times-of-india,ndtv&from=2024-07-09&sortBy=publishedAt&apiKey=${apikey}`);

            const filteredArticles=response.data.articles.filter(article=>
                article.title && article. title !== "[Removed]" && article.description && article.description !== "[Removed]" && article.urlToImage && article.urlToImage !== "[Removed]"  && article.urlToImage !== null
            )
            setdata(filteredArticles)
            setloading(false)
        } catch (err) {
           seterror(err)
           setloading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [category]);

    useEffect(()=>{
        setloading(true);
        seterror(null)
    },[setCategory])

    return (
        <div>
            <h2 className="mx-5 my-4">Today Headlines:</h2>
            {loading&&IsCategory && <p>Loading..</p>}
            {error&& <p>Error fetching data:{error.message}</p>}
           {
            data&&data.length>0?(
                <>
                {data.map((ele,index)=>{
                    return(<>
                    <div key ={index} className=" d-flex justify-content-center align-items-center">
                      <div  className="  news-custom">
                        <h3>{ele.title}</h3>
                        <p>{ele.description}</p>
                        <div className="cat-image-div">
                        {ele.urlToImage&&
                        <img src={ele.urlToImage}  alt="Unable to load the image" className="image-custom"
                        />}
                        </div>
                        <p>{ele.content}<a href={ele.url} target="">View more</a></p>
                      </div>
                      </div>
                      </>
                    )
                })}
                
              
                </>
            ):(
                !loading&&<p>No data Available </p>
            )
           }
        </div>
    );
};

export default Categories;
