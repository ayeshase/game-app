import React from 'react'

export default function Home (props) {


  return (
    <div className='container' style={myStyle}>
        <h1>my Games</h1>
        <form class="d-flex" role="search" style={myStyle}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  )
}
