import React from 'react'

const Home = () => {
  let seconds = 30;
  
  const interavalID = setInterval(()=>{
    seconds >= 1 ? console.log(seconds--) : endCountdown();
  },200)

  const endCountdown = () =>{
      clearInterval(interavalID)
  }



  return (
    <>
    {true && <p onClick={endCountdown}>Modal</p>}
         <h1>Home</h1>
    </>
 
  )
}

export default Home