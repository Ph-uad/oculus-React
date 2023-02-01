import React from 'react'
import Image from '../Assets/image/glasses.jpg'
import useFetchAPI from '../hooks/useFetchAPI'

const Eyeglasses = () => {
    const filterEyeGlasses = useFetchAPI().filter(x => x.type === 'eyeglasses');

    const glassesList = filterEyeGlasses.map(item => {
        return (
            <li className="container" key={ item.id }>
                <div className="preview flex">

                    <figure className="picture preview__figure">
                        <img src={item.image ? item.image : Image  } alt="glasses" className="img" />
                    </figure>

                    <div className="flex container">
                        <div className="">
                            <h2 className="heading--tertiary">{ item.name }</h2>
                            <h4 className="heading--quaternary">{ item.type }</h4>

                            <p className="paragraph">{ item.description }</p>
                        </div>

                    </div>
                </div>
            </li>
        )
    });

    return (
        <ul>
            { glassesList }
        </ul>

    )
}

export default Eyeglasses