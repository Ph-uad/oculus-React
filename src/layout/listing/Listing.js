
import Image1 from '../../Assets/image/image1.png'
import Image2 from '../../Assets/image/image2.png'
import Image3 from '../../Assets/image/image3.png'
import Image4 from '../../Assets/image/image4.png'

const Listing = ({onclick, items, type }) => {


    const passUpProp = (item) => {
        onclick(item)
    }

    const images = items[0].type === 'sunglasses' ? [Image1, Image2, Image3] : [Image4];

    const glassesList = items.map(item => {
        return (
            <div className="list card" key={ item.id } onClick={ () => passUpProp(item) }>
                <figure className="figure list__figure">
                    <img src={ item.image ? item.image : images[Math.floor(Math.random() * images.length)] } alt="glasses" className="img" />
                </figure>

                <div className="flex">
                    <div className="">
                        <h2 className="heading--tertiary">{ item.name }</h2>
                        <h6 className="heading--senary">{ item.type }</h6>
                    </div>
                        <h4 className="heading--quaternary">$450</h4>
                </div>
                <button className="button button--action">Add</button>
            </div>
        )
    });

    return (
        <section className="section">
            <div className="container">
                <ul className='grid'>{ glassesList }</ul>
            </div>
        </section>
    )
}

export default Listing