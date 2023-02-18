import React from 'react'
import classes from './nav.module.css'
import { Link } from 'react-router-dom'
import Bag from './bag/Bag'

const Nav = () => {
    return (
        <nav className={ ` ${classes.nav} ` }>
            <div className={ `${classes.container}  flex` }>

                <Link to="/" className='link logo' aria-describedby='Site Logo'>oculus</Link>

                <ul className="list flex">
                    <li className="list--item">
                        <Link to='listing/sunglasses' relative='route' className='link'>sunglasses</Link>
                    </li>
                    <li className="list--item">
                        <Link to='listing/eyeglasses' relative='route' className='link'>eyeglasses</Link>
                    </li>
                </ul>
                <Bag>6</Bag>
            </div>
        </nav>
    )
}

export default Nav