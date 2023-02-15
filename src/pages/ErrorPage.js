import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Nav from '../layout/navigation/Nav'

const ErrorPage = () => {
    let title = "Error Encountered";
    let message = "The request could not be performed due to issues";

    const error = useRouteError();
    message = error.status === 200 ? error.data.message : message;

    return (
        <>
            <Nav />
            <section className="section">
                <div aria-label='container' className='text--center'>
                    <h2 className="heading--secondary">{ title }</h2>
                    <h4 className="heading--quaternary">{ message }</h4>
                    <p className='paragraph'>Please use the navigation to <Link to='' className='paragraph'> get back </Link> to safety</p>

                </div>
            </section>
        </>
    )
}

export default ErrorPage