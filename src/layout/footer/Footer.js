import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
    return (
        <footer className={ `${classes.footer} section` }>
            <div className={ `${classes.flex} container flex` }>
                <div className={ classes.detail }>
                    <h4 className="heading--quaternary">oculus</h4>
                    <p className="paragraph">
                        Oculus is conceptual e-commerce project based on learning design ,development
                        with React.
                    </p>
                </div>
                <div className="contact">
                    <h4 className="heading--quaternary">Fancy Note</h4>
                    <span className="paragraph">we know what tomorrow is <br /> cause we saw yesterday</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer