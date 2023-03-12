import { useDispatch, useSelector } from "react-redux"
import { bagActions } from "../../store/bag-slice";
import classes from './cart.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const Cart = () => {

    const items = useSelector(item => item.bag.bagItems);
    const total = useSelector(item => item.bag.totalAmount);
    const dispatch = useDispatch()

    const addItemHandler = (item) => { dispatch(bagActions.increaseItemAmount(item)) }
    const substractItemHandler = (item) => { dispatch(bagActions.reduceItemAmount(item)) }

    const mapBagItems = items.map(item => {
        if (!item) {
            return <h2 key='0ss' className="heading-secondary text-center">Nothing here</h2>
        }
        return (
            <SwiperSlide key={ item.id }>
                <div className={ `${classes.tile}` }>
                    <figure className={ `figure ${classes.figure}` }><img src={ item.image } className="img" alt="thumbnail" /></figure>
                    <div className={ classes['list--detail'] }>
                        <div className="">
                            <div className="flex">
                                <h3 className={ `heading-senary` }>{ item.name }</h3>
                                <h4 className="heading-senary">${ item.price }(x{ item.amount })</h4>
                            </div>
                            <div className="flex">
                                <button className="btn-utility btn-circle" onClick={ () => substractItemHandler(item) }>-</button>
                                <div className="flex text--right">
                                    <button className="btn-utility btn-circle" onClick={ () => addItemHandler(item) } >+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide >
        )
    })

    return (
        <section className="section container">
            <h2 className="heading--tertiary">Bag</h2>
            <Swiper
                slidesPerView={ 1 }
                spaceBetween={ 10 }
                pagination={ {
                    clickable: true,
                } }
                breakpoints={ {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                } }
                modules={ [Pagination] }
                className={ classes["mySwiper"] }
            >
                { mapBagItems && mapBagItems }
            </Swiper>

            <h3 className={ `text--right heading--secondary` }>Bill : ${ total }</h3>
        </section>
    )
}

export default Cart

