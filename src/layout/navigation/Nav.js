import React from 'react'
import classes from './nav.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import SVG from "../UI/Svg/Svg"
import { uiActions } from '../../store/ui-slice'

const Nav = () => {
    const dispatch = useDispatch()

    const showBagHandler = () => {
        dispatch(uiActions.toggleNotification())
    }

    return (
        <nav className={ ` ${classes.nav} ` }>
            <div className={ `${classes.container}  flex` }>

                <Link to="/" className={ `link ${classes.logo}` } aria-describedby='Site Logo'>oculus</Link>

                <ul className="list flex">
                    <li className="list--item">
                        <Link to='listing/sunglasses' relative='route' className='link'>sunglasses</Link>
                    </li>
                    <li className="list--item">
                        <Link to='listing/eyeglasses' relative='route' className='link'>eyeglasses</Link>
                    </li>
                </ul>

                <div className={ `flex ${classes.bag}` } onClick={ showBagHandler }>
                    <SVG Id='#icon-shopping_bag' />
                    <span className={ `${classes.notification}` }></span>
                </div>

            </div>
        </nav>

    )
}

export default Nav