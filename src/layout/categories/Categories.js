import React from 'react'
import classes from './categories.module.css'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <section className="category section">
      <div className="container">
        <header>
          <h2 className="heading--secondary">categories</h2>
        </header>

        <div className={ `flex ${classes["flex"]}` }>
          <Link to="/listing/sunglassess" className={ `link ${classes["category__block"]}` }>
            <div className="">
              <h3 className="category__label heading--secondary">sunglasses</h3>
            </div>
          </Link>

          <Link to="/listing/eyeglasses" className={ `link ${classes["category__block"]}` }>
            <div className="">
              <h3 className="category__label heading--secondary">eyeglasses</h3>
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Categories