import React, { useEffect, useState } from 'react'
import GameItems from './gameItems'
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';



const Games = (props) => {

  let myStyle = {
    color: props.mode === 'dark'?'white':'#212e54',
    backgroundColor: props.mode === 'dark'?'#212e54':'white'
  }



  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)



  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/everything?q=games&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults)
    setLoading(false);

    props.setProgress(100)

  }
  useEffect(() => {
    updateNews();
 // eslint-disable-next-line
  }, [])



  /////const handlePrevClick = async () => {

  ///setPage(page-1)
  //updateNews();
  //}


  //const handleNextClick = async () => {
  //setPage(page+1)
  //updateNews();

  //}

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?q=games&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parseData = await data.json()
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)

  };




  return (
    <>
    <h1 className='text-center my-3 0px  mt-5' style={myStyle} >Games- Top Games Headlines</h1>
    {loading&& <Spinner/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<spinner/>}
      >
        <div className='container'>

          <div className='row'>

            {articles?.map((article) => {

              return <div className='col-md-4' key={article.url}>

                <GameItems title={article.title ? article.title.slice(0, 35) : ""} description={article.description ? article.description.slice(0, 54) : ""}
                  imageUrl={article.urlToImage} newsUrl={article.url} author={article.author} date={article.publishedAt} source={article.source.name} />
              </div>


            })}
          </div>
        </div>
      </InfiniteScroll>



    </>
  )
}
Games.defaultProps = {
  pageSize: 12
}
Games.propTypes = {
  pageSize: propTypes.number
}

export default Games
