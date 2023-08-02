import React, { Component } from 'react'
import GameItems from './gameItems'
export default class Games extends Component {

constructor(){
  super();
  console.log("hello hi");
   this.state = {
    articles: this.articles,
    loading: false,
    page: 1
}
}
 
  async  componentDidMount(){
    console.log('cdm')
    let url = "https://newsapi.org/v2/top-headlines?q=cricket&apiKey=42377419c3fa48e9b28e861ee070db1c&page=1";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData)
    this.setState({articles: parseData.articles})



}






  render() {
    return (
      <div className='container'>
            <div className='row'>
                {this.state.articles?.map((article) => {
                    
                 return <div className='col-md-4' key={article.url}>

                    <GameItems title={article.title?article.title.slice(0, 45):"" } description={article.description?article.description.slice(0, 84):"" } imageUrl={article.urlToImage} newsUrl={article.url} />
                      </div>


                })}
      </div>




      </div>

    )
  }
}
