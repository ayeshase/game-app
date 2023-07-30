import React, { Component } from 'react'
import GameItems from './gameItems'
export default class Games extends Component {
 constructor(){
  super();
  console.log("hello hi");
   this.setState ={
    articles: this.articles
}


}


  render() {
    return (
      <div className='container'>
            <div className='row'>
            <div className='col-md-4'>
    <GameItems title="Games" description="my descrpition" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/14CC5/production/_130298158_charisma.ai2.png "/>
      </div>
      </div>
      </div>

    )
  }
}
