import React, { useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
    const [articles, setarticales] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalArticles, settotalArticles] = useState(0)
    // document.title = `${this.capitalizeFirstLetter(props.category)} - Speedy News`

    const capitalizeFirstLetter = (string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    
    const updateNews= async()=>{
      setpage(page+1)
      // this.setState({page : this.state.page + 1}) // must add to increase the page number
      props.setprogress(0);
      let url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.PageSize}`;
      props.setprogress(30);
      let data = await fetch(url);
      let parsedData = await data.json();
      props.setprogress(50);
      setarticales(parsedData.articles);
      settotalArticles(parsedData.totalResults);
      setloading(false);
      props.setprogress(100);
      // console.log("-> Componentdimount Page : ", page,"\n");
    }
    
    useEffect(()=>{
      updateNews();
    },[])

    const fetchMoreData = async() => {
      setpage(page+1);
      let url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.PageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setarticales(articles.concat(parsedData.articles));
      settotalArticles(parsedData.totalResults);
      // console.log(this.state.articles.length, this.state.totalArticles,",value :",this.state.articles.length !== this.totalArticles,"\n");
      // console.log("-> Page : ", page,"\n");
    };
    
      // console.log("render");
      return (
        <>
          <h1 className='text-center' style = {{margin : '35px 0px'}}>Speedy News - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
          {loading && <Spinner/>} 
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalArticles} // last scroll to 
          loader={<Spinner/>}
          >
            <div className= "container">
              <div className="row">
                {articles.map((element)=>{
                  return <div className="col-md-4" key = {element.url}>  
                      <NewsItem title = {element.title?element.title:""} description = {element.description?element.description:""} imageUrl = {element.urlToImage?element.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kYvneZq22IX1CbTcbFSiK0IaWsd_kGhiZw&usqp=CAU"} newsUrl={element.url}  author= {element.author?element.author:"unknown"} date= {element.publishedAt} Source={element.author}/>
                  </div>
                })}
              </div>
            </div>
            
          </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
  country : 'in',
  PageSize: 6,
  category: 'general'
}
News.propTypes = {
  country : PropTypes.string,
  PageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
