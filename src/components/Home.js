import React from 'react'

export default function Home (props) {


  return (
    <div className='container'>
        <h1>my Games</h1>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  )
}
