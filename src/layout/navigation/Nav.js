import React from 'react'
import classes from './nav.module.css'
import { Link } from 'react-router-dom'
import SVG from '../../components/UI/Svg/Svg'

const Nav = () => {
    return (
        <nav className={ ` ${classes.nav} ` }>
            <div className={`${classes.container}  flex`}>

                <Link to="/" className='link logo' aria-describedby='Site Logo'>oculus</Link>

                <ul className="list flex">
                    <li className="list--item">
                        <Link to="listing/sunglasses" className="link">sunglasses</Link>
                    </li>
                    <li className="list--item">
                        <Link to="listing/eyeglasses" className="link">eyeglasses</Link>
                    </li>
                </ul>
                    <SVG Id="#icon-shopping_bag" />
            </div>


            {/* <div className="icon--container flex">
                <svg className="icon--image">
                    <use href="../assets/icons/sprite.svg#icon-shopping_bag" />
                </svg>
            </div> */}
        </nav>
    )
}

export default Nav