import classes from './header.module.css'

const Header = () => {
    return (
        <header className={ `hero ${classes.hero}` }>
            <div className="container flex-center">
                <header>
                    <h1 className="heading-primary">Oculus</h1>
                    <h4 className="heading-quaternary">
                        Friends wear the same shade
                    </h4>
                </header>
            </div>
        </header>
    )
}

export default Header