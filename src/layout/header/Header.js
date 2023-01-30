import { Link } from "react-router-dom"
import classes from './header.module.css'

const Header = () => {
    return (
        <header className={ `hero ${classes.hero}` }>
            <div className="container flex--center">
                <div className="width--min text--center">
                    <h1 className="heading--primary">Oculus</h1>
                    <h4 className="heading--quaternary">
                        Transform your look, filter the shade with style.
                    </h4>
                    <Link className="link" to=''>
                        <button className="button button--cta ">
                        See Listing
                        </button>
 
                        </Link>
                </div>
            </div>
        </header>
    )
}

export default Header