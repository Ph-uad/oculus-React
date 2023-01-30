import React from 'react'
import classes from './categories.module.css'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <section class="category section">
      <div class="container">
        <header>
          <h2 class="heading--secondary">categories</h2>
        </header>

        <div class={ `flex ${classes["flex"]}` }>
          <Link to="/sunglasses" class={ `link ${classes["category__block"]}` }>
            <div class="">
              <h3 class="category__label heading--secondary">sunlasses</h3>
            </div>
          </Link>

          <Link to="/eyeglasses" class={ `link ${classes["category__block"]}` }>
            <div class="">
              <h3 class="category__label heading--secondary">eyeglasses</h3>
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Categories