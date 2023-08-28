import React, { Component } from 'react'
import GameItems from './gameItems'
import propTypes from 'prop-types'



export default class Games extends Component {

  static defaultProps = {
    pageSize: 10
  }
  static propTypes = {
    pageSize: propTypes.number
  }

  constructor() {
    super();
    console.log("hello hi");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?q=games&apiKey=42377419c3fa48e9b28e861ee070db1c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData)
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false })

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
      page: this.state.page + 1 });
    this.updateNews();

  }






  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.state.articles?.map((article) => {

            return <div className='col-md-4' key={article.url}>

              <GameItems title={article.title ? article.title.slice(0, 35) : ""} description={article.description ? article.description.slice(0, 54) : ""}
                imageUrl={article.urlToImage} newsUrl={article.url} author={article.author} date={article.publishedAt} source={article.source.name} />
            </div>


          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previos</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>

        </div>

      </div>

    )
  }
}
