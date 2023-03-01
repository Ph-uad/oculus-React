import { useDispatch, useSelector } from 'react-redux'
import { bagActions } from '../../store/bag-slice';
import classes from './notification.module.css'


const Notification = () => {

  const visible = useSelector(bagShow => bagShow.bag.bagIsVisible);
  const data = useSelector(data => data.bag.bagItems);

  const mapBagItems = data.map(item => {
    return (
      <dd key={ item.id } className={ `flex ${classes.list}` }>
        <figure className={ classes.figure }><img src={ item.image } className="img" alt="thumbnail" /></figure>
        <div className={ classes['list--detail'] }>
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
    <div className={ `${classes.modal} ${!visible ? classes.hide : null}` }>
      <div className={ classes.sidebar }>
        <div className="flex">
          <h3 className='heading--tertiary'>Added Items </h3>
          <div className={ classes.hamburger } onClick={ closeBagHandler }>
            <h2 className="heading--tertiary">&#10005;</h2>
          </div>
        </div>

        <dl className={ classes['cart--list'] }>
          { mapBagItems ? mapBagItems : <h2 className="heading--secondary">No Items here yet</h2> }
        </dl>
        { <button> See shopping basket </button> }
      </div>
    </div>

  )
}
export default Notification