import React, { Component } from 'react'


export default class gameItems extends Component {


  render() {
    let { title, description, imageUrl, newsUrl, auther, date, source } = this.props


    return (
      <div className='contaianer my-3' >
        <div className="card">
        <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left: '90%', zIndex: '1'}}>{source}
             <span className='visually-hidden'>Unread messages</span>
              </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body" >
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {!auther ? "Unknown" : auther} on {new date(date).toGMTstring()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div></div>
    )
  }
}
