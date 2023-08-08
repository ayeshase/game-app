import React from 'react'
import Games from './Games'

export default function Home (props) {
  let myStyle = {
    color: props.mode === 'dark'?'white':'#212e54',
    backgroundColor: props.mode === 'dark'?'#212e54':'white'
  }

  return (
    <div className='container  my-3'  style={myStyle}>
        <h1  className='text-center' style={myStyle} >Top headlines</h1>
        <Games />
    </div>
  )
}
