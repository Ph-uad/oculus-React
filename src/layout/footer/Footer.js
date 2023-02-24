import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
    return (
        <footer className={`${classes.footer} section`}>
            <div className="container">
                <div className={`${classes.flex} flex`}>
                    <div className={classes.detail}>
                        <h4 className="heading--quaternary">oculus</h4>
                        <p className="paragraph">
                            Oculus is conceptual e-commerce project based on learning design ,development
                            with React.
                        </p>
                    </div>
                    <div className="contact">
                        <h4 className="heading--quaternary">Contact</h4>
                        <a href="#no" className='link'><span className="paragraph">temidayo26@gmail.com</span> </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer