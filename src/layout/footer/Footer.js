import React from 'react'

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="container">
                <div className="flex">
                    <div className="footer--details">
                        <h3 className="heading--tertiary">oculus</h3>
                        <p className="paragraph">
                            Oculus is conceptual project based on learning design ,development
                            with React (Reac--Router typescript). It is a simple e-commerce project to
                            display minimalistic design to for a better user experience
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