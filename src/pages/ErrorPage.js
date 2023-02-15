import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../layout/navigation/Nav'

const ErrorPage = ({ title = "something went wrong", message = "Please Use the navigation to get back to safety" }) => {
    return (
        <>
            <Nav />
            <section className="section">
                <div aria-label='container' className='text--center'>
                    <h2 className="heading--secondary">{ title }</h2>
                    <p className="paragraph">{ message }</p>
                    <Link to='' className='paragraph'> Go to HomePage </Link>
                </div>
            </section>
        </>
    )
}

export default ErrorPage