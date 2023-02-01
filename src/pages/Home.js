import React from 'react'
import useFetchAPI from '../hooks/useFetchAPI';
import Categories from '../layout/categories/Categories';
import Gallery from '../layout/gallery/Gallery';
import Header from '../layout/header/Header';

const Home = () => {
  // let seconds = 30;
  
  // const interavalID = setInterval(()=>{
  //   seconds >= 1 ? console.log(seconds--) : endCountdown();
  // },200)

  // const endCountdown = () =>{
  //     clearInterval(interavalID)
  // }

  const data = useFetchAPI();
  console.log(data)

  return (
    <>
    {false && <p>Modal</p>}
         <Header/>
         <Categories/>
         <Gallery/>
    </>
 
  )
}

export default Home