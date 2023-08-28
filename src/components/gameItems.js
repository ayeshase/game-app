import React, { Component } from 'react'


export default class gameItems extends Component {


  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props


    return (
      <div className='contaianer my-3'>
        <div className="card">
          <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{ left: '90%', zIndex: '1' }}>{source}
            <span className='visually-hidden'>Unread messages</span>
          </span>
          <img src={!imageUrl ? "https://t3n.de/news/wp-content/uploads/2022/12/Immersion_Death_Trash.jpeg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body" >
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div></div>
    )
  }
}
