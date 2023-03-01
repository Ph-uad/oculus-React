import { Link } from "react-router-dom";

const Listing = ({ items }) => {

 

    const glassesList = items.map(item => {
        return (
            <Link className="list link" key={ item.id } to={`/listing/${item.id}`}>
                <figure className="figure list__figure">
                    <img src={ item.image } alt="glasses" className="img" />
                </figure>

                <span className="flex pad--min">
                    <h3 className="heading--tertiary">{ item.name }</h3>
                    <h6 className="heading--senary">${ item.price }</h6>
                </span>
            </Link>
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