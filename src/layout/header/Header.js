import classes from './header.module.css'

const Header = () => {
    return (
        <div className={ `hero ${classes.hero}` }>
            <div className="container flex--center">
                <div className="width--min text--center">
                    <h1 className="heading--primary">Oculus</h1>
                    <h4 className="heading--quaternary">
                        Friends wear the same shade
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Header