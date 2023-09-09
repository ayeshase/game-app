import React from 'react'

const gameItems = (props) => {
  




  let { title, description, imageUrl, newsUrl, author, date, source } = props





  return (
    <div className='contaianer my-3' >
      <div className="card"   >
        <div style={{
          dispaly: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        
        }}>
          <span className='badge rounded-pill bg-danger'>{source}</span>
        </div>

        <img src={!imageUrl ? "https://cdn.mos.cms.futurecdn.net/YFXPFmdUmmozc4C4s8VzNe-1200-80.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body" >
          <h5 className="card-title" >{!title ? "new game": title}...</h5>
          <p className="card-text" >{description}...</p>
          <p className='card-text' ><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn btn-sm btn-dark" >Read More</a>
        </div>
      </div>
      </div>
  )
}
export default gameItems;
