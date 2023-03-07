import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { bagActions } from "../../store/bag-slice";

const Listing = ({ items }) => {
    const dispatch = useDispatch();
    const addToBagHandler = (item) => {
        dispatch(bagActions.addToBag(item))
    }

    const glassesList = items.map(item => {
        return (
            <div className="link item" key={ item.id }>
                <Link className="link"  to={ `/listing/${item.id}`}>
                    <figure className="figure list__figure">
                        <img src={ item.image } alt="glasses" className="img" />
                    </figure>
                </Link>
                <span className="">
                    <h3 className="heading--tertiary">{ item.name }</h3>
                    <h6 className="heading--senary">${ item.price }</h6>
                </span>
                <button onClick={ () => addToBagHandler(item) } className='btn--utility btn--utility__center'>+</button>
            </div>
        )
    });

    return (
        <section className="section">
            <div className="container item--container">
                <div className='grid'>
                    { glassesList }
                </div>
            </div>
        </section>
    )
}

export default Listing