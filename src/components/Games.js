import React, { useEffect, useState } from 'react'
import GameItems from './gameItems'
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const Games = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)



  const updateNews = async (props) => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/everything?q=games&apiKey=42377419c3fa48e9b28e861ee070db1c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parseData = await data.json();
    props.setProgress(70)
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults)
    setLoading(false);

    props.setProgress(100)

  }
  useEffect(() => {
    updateNews()

  }, [])



  /////const handlePrevClick = async () => {

  ///setPage(page-1)
  //updateNews();
  //}


  //const handleNextClick = async () => {
  //setPage(page+1)
  //updateNews();

  //}

  const fetchMoreData = async (props) => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?q=games&apiKey=42377419c3fa48e9b28e861ee070db1c&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json()
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)

  };




  return (
    <>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>Loading...</h4>}
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
