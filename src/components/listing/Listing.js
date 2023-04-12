import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { bagActions } from "../../store/bag-slice";
import { useState } from "react";
import Notification from "../../layout/UI/notiification/Notification";

const Listing = ({ items, type }) => {

    const [show, doShow] = useState(false);

    const dispatch = useDispatch();
    const addToBagHandler = (item) => {
        dispatch(bagActions.addToBag(item))
        doShow(true)

        setTimeout(()=>{
            doShow(false)
        }, 2000)
    }

    const glassesList = items.map(item => {
        return (
            <div className="link item" key={ item.id }>
                <Link className="link" to={ `/listing/${item.id}` }>
                    <figure className="figure item-figure">
                        <img src={ item.image } alt="glasses" className="img" />
                    </figure>
                </Link>
                <div className="">
                    <h3 className="heading-tertiary">{ item.name }</h3>
                    <h6 className="heading-senary">'{ item.type }'</h6>
                    <button onClick={ () => addToBagHandler(item) } className='width-full btn-utility'>+ ${ item.price }</button>
                </div>
            </div>
        )
    });

    return (

        <section className="container section  item-container">
            { show && <Notification title="Item added" message="successfully" /> }
            <h2 className="heading--secondaty">{ type }</h2>
            <div className='grid'>
                { glassesList }
            </div>
        </section>

    )
}

export default Listing