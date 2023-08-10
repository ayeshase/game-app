import React, { Component } from 'react'
import GameItems from './gameItems'
import propTypes from 'prop-types'



export default class Games extends Component {

  static defaultProps = {
    pageSize: 6
  }
   static propTypes = {
    pageSize: propTypes.number
   }

constructor(){
  super();
  console.log("hello hi");
   this.state = {
    articles: [],
    loading: false,
    page: 1
}
}
 
  async  componentDidMount(){
    console.log('cdm')
    let url = `https://newsapi.org/v2/top-headlines?q=games&apiKey=42377419c3fa48e9b28e861ee070db1c&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData)
    this.setState({articles: parseData.articles, totalResults:  parseData.totalResults })

}
handlePrevClick  = async () =>{
console.log('prev')
let url = `https://newsapi.org/v2/top-headlines?q=games&apiKey=42377419c3fa48e9b28e861ee070db1c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
let data = await fetch(url);
let parseData = await data.json();
console.log(parseData)

this.setState({
    page: this.state.page - 1,
    articles: parseData.articles
})
}


handleNextClick = async  () =>{
    console.log('next')
   if(this.state.page + 1 > Math.ceil (this.state.totalResults/this.props.pageSize)){

   }
   else{
    let url = `https://newsapi.org/v2/top-headlines?q=games&apiKey=42377419c3fa48e9b28e861ee070db1c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData)

    this.setState({
        page: this.state.page + 1,
        articles: parseData.articles

    })


   }
}





  render() {
    return (
      <div className='container'>
            <div className='row'>
                {this.state.articles?.map((article) => {
                    
                 return <div className='col-md-4' key={article.url}>

                    <GameItems title={article.title?article.title.slice(0, 35):"" } description={article.description?article.description.slice(0, 54):"" } imageUrl={article.urlToImage} newsUrl={article.url} />
                      </div>


                })}
      </div>
<div className='container d-flex justify-content-between'>
      <button  disabled={this.state.page<=1}   type="button" class="btn btn-dark"  onClick={this.handlePrevClick}>&larr; Previos</button>
      <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>

</div>

      </div>

    )
  }
}
