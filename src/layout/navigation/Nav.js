import React from 'react'
import classes from './nav.module.css'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import SVG from "../UI/Svg/Svg"
import { uiActions } from '../../store/ui-slice'

const Nav = () => {

    const inCart = useSelector(item => item.bag.bagItems.length)
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
                        <NavLink to='listing/sunglasses' relative='route' className={({ isActive }) => (isActive ? 'active' : '') + ' link'}>sunglasses</NavLink>
                    </li>
                    <li className="list--item">
                        <NavLink to='listing/eyeglasses' relative='route' className={({isActive}) =>  (isActive ? 'active' : '') +' link'}>eyeglasses</NavLink>
                    </li>
                </ul>

                <div className={ `flex ${classes.bag}` } onClick={ showBagHandler }>
                    <SVG Id='#icon-shopping_bag' />
                    { inCart && <span className={ `${classes.notification}` }>{inCart}</span> }
                </div>

            </div>
        </nav>

    )
}

export default Nav