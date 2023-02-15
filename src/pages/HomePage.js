import React from 'react'
import Categories from '../layout/categories/Categories';
import Gallery from '../layout/gallery/Gallery';
import Header from '../layout/header/Header';

const HomePage = () => {

  return (
    <>
    {false && <p>Modal</p>}
         <Header/>
         <Categories/>
         <Gallery/>
    </>
 
  )
}

export default HomePage