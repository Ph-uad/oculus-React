import React from 'react'
import Image from '../Assets/image/glasses.jpg'
import useFetchAPI from '../hooks/useFetchAPI'

const Eyeglasses = () => {
    const filterEyeGlasses = useFetchAPI().filter(x => x.type === 'eyeglasses');

    const glassesList = filterEyeGlasses.map(item => {
        return (
            <li className="list card" key={ item.id }>
                <figure className="figure list__figure">
                    <img src={ item.image ? item.image : Image } alt="glasses" className="img" />
                </figure>

                <div className="">
                    <h2 className="heading--tertiary">{ item.name }</h2>
                    <h4 className="heading--quaternary">{ item.type }</h4>
                    <p className="paragraph">{ item.description }</p>
                </div>
            </li>
        )
    });

    return (
        <section className="section">
            <div className="container">
                <ul className='grid'>
                    { glassesList }
                </ul>
            </div>
        </section>

    )
}

export default Eyeglasses