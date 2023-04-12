import { useDispatch, useSelector } from 'react-redux'
import classes from './CartBar.module.css'
import { Link } from 'react-router-dom';
import { uiActions } from '../../store/ui-slice';
import Modal from '../../layout/UI/overlayModal/Modal';
import { bagActions } from '../../store/bag-slice';


const CartBar = () => {

  const visible = useSelector(show => show.ui);
  const items = useSelector(item => item.bag.bagItems);
  const dispatch = useDispatch();
  const closeBagHandler = () => dispatch(uiActions.toggleNotification());
  const removeItemFromListHandler = (item) => dispatch(bagActions.removeFromBag(item));

  const mapBagItems = items.map(item => {
    return (
      <dd key={ item.id } className={ `flex ${classes.list}` }>
        <figure className={ classes.figure }><img src={ item.image } className="img" alt="thumbnail" /></figure>
        <div className={ classes['list--detail'] }>
          <h3 className={ `heading--tertiary` }>{ item.name }</h3>
          <h4 className="heading--quaternary">${ item.price }</h4>
        </div>
        <button onClick={ () => removeItemFromListHandler(item) } className={`btn ${classes['button-remove']}`}>remove</button>
      </dd>
    )
  })

  if (visible) return (
    <Modal onClick={ closeBagHandler }>
      <div className={ classes.sidebar }>
        <div className="flex">
          <h3 className='heading-tertiary'>Added Items </h3>
          <div className={ classes.hamburger } onClick={ closeBagHandler }><h2 className="heading--tertiary link">&#10005;</h2></div>
        </div>

        <dl className={ classes['cart-list'] }>
          { mapBagItems ? mapBagItems : <h2 className="heading--secondary">No Items here yet</h2> }
        </dl>
        { <Link to="/cart" onClick={ closeBagHandler } relative='route' className={ `btn link ${classes['right']}` }> See Bag </Link> }
      </div>
    </Modal>
  )
}
export default CartBar;