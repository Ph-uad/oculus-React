import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
    return (
        <footer className={ `${classes.footer} border-top` }>
            <div className={ `${classes.flex} container flex` }>
                <div className={ classes.detail }>
                    <h6 className="heading-senary bold">Oculus</h6>
                    <p className="paragraph">
                        Oculus is conceptual e-commerce project based on learning design ,development
                        with React.
                    </p>
                </div>
                <div className="contact">
                    <h6 className="heading-senary bold">Fancy Note</h6>
                    <p className="paragraph">we know what tomorrow is <br /> cause we saw yesterday</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer