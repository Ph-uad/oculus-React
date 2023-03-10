import React from 'react'
import classes from './categories.module.css'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <section className="section">
      <div className="container">
        <header>
          <h2 className="heading-secondary">categories</h2>
        </header>

        <div className={ `flex ${classes["flex"]}` }>
          <Link to="listing/sunglasses" className={ `link ${classes["category_block"]}` }>
            <div className="">
              <h3 className="text-center  heading-secondary">sunglasses</h3>
            </div>
          </Link>

          <Link to="listing/eyeglasses" className={ `link ${classes["category_block"]}` }>
            <div className="">
              <h3 className="text-center heading-secondary">eyeglasses</h3>
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Categories