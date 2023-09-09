import React from 'react'

 const About  = (props) => {

   // const [myStyle, setMyStyle] = useState({ 
       // color: 'black',
       // backgroundColor: 'white'
  //  })
  const myStyle = {
    color: props.mode === 'dark'?'white':'#212e54',
    backgroundColor: props.mode === 'dark'?'#212e54':'white'
  }

   


  return (
  
  <div className='container my-3' style={myStyle} >
   <h1 className='text-center my-3'>About Us</h1> 
 <p className='text-center my-3 fs-4 font-monospace'>This is a game news app here you can see and learn all news about games, you can learn about <br /> all new and old games and know all type of informaition about games. so explore here all<br /> type of news about games. </p>
</div>
  )
}
export default About;