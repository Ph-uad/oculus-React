import { useDispatch, useSelector } from 'react-redux'
import { bagActions } from '../../store/bag-slice';
import classes from './sidebar.module.css'
import SVG from '../UI/Svg/Svg';
const Sidebar = () => {

  const visible = useSelector(bagShow => bagShow.bag.bagIsVisible);
  const data = useSelector(data => data.bag.bagItems);
  const total = useSelector(data => data.bag.totalAmount);
  console.log(data)

  const mapBagItems = data.map(item => {
    return (
      <dd key={ item.id } className={ `${classes.list}` }>
        <figure className={ classes.figure }><img src={ item.image } className="img" alt="thumbnail" /></figure>
        <div className="flex">
          <h3 className={ `heading--tertiary` }>{ item.name }</h3>
          <h4 className="heading--quaternary">${ item.price }</h4>
        </div>
      </dd>
    )
  })

  const dispatch = useDispatch()
  const closeBagHandler = () => {
    dispatch(bagActions.showBag(!visible))
  }

  return (
    <div onClick={ closeBagHandler } className={ `${classes.modal} ${!visible ? classes.hide : null}` }>
      <div className={ classes.sidebar }>
        <div className="flex">
          <h3 className='heading--tertiary'> Your Bag </h3><SVG Id='#icon-shopping_bag' />
        </div>
          <dl className={classes['cart--list']}>
            { mapBagItems && mapBagItems }
          </dl>
            <div className="total flex">
              <h3 className="heading--tertiary">Total</h3>
              <h2 className='heading--secondary'>{total}</h2>
            </div>
      </div>
    </div>

  )
}
export default Sidebar