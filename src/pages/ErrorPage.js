import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Nav from '../layout/navigation/Nav'

const ErrorPage = () => {
    let title = "Error Encountered";
    let message = "The request could not be performed due to issues";

    const error = useRouteError();
    message = error.status ? error.data.message : message;

    return (
        <>
            <Nav />
            <section className="section">
                <div className="container card">
                    <div aria-label='container' className='text--center'>
                        <h2 className="heading-secondary">{ title }</h2>
                        <h4 className="heading-quaternary">{ message }</h4>
                        <p className="paragraph">Please know that any progress you have made might be lost. <br/>
                        Bear with the developer, lets navigate  <Link to='' style={{color: 'inherit'}} className='paragraph'> back to safety</Link>  </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ErrorPage