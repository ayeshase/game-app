import React, { Component } from 'react'
import GameItems from './gameItems'
export default class Games extends Component {
  render() {
    return (
      <div className='container'>
            <div className='row'>
            <div className='col-md-4'>
    <GameItems title="Games" description="my descrpition" />
      </div>
      </div>
      </div>

    )
  }
}
