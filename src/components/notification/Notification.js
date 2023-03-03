import { useDispatch, useSelector } from 'react-redux'
import classes from './notification.module.css'
import { Link } from 'react-router-dom';
import { uiActions } from '../../store/ui-slice';


const Notification = () => {

  const visible = useSelector(show => show.ui);
  const items = useSelector(item => item.bag.bagItems);


  const mapBagItems = items.map(item => {
    if(!item){
      return(
        <p className='paragraph'>
          Nothing here
        </p>
      )
    }
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
    dispatch(uiActions.toggleNotification())
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
        { <Link to="/cart" onClick={ closeBagHandler } relative='route' className='btn link text--right'> See shopping basket </Link> }
      </div>
    </div>

  )
}
export default Notification