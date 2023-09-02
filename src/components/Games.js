import React, { Component } from 'react'
import GameItems from './gameItems'
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export default class Games extends Component {

  static defaultProps = {
    pageSize: 12
  }
  static propTypes = {
    pageSize: propTypes.number
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/everything?q=games&apiKey=42377419c3fa48e9b28e861ee070db1c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })

  }

  async componentDidMount() {
    this.updateNews()
  }
  handlePrevClick = async () => {

    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }


  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1
    });
    this.updateNews();

  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?q=games&apiKey=42377419c3fa48e9b28e861ee070db1c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false
    })
  };




  render() {
    return (
      <>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
        <div className='container'>

          <div className='row'>

            {this.state.articles?.map((article) => {

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
}
