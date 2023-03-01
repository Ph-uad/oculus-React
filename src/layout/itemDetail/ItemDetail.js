import classes from './itemDetail.module.css';
import { useDispatch } from "react-redux";
import { bagActions } from '../../store/bag-slice';
import { uiActions } from '../../store/ui-slice';

const ItemDetail = ({ item }) => {

  const dispatch = useDispatch()

  const addToBagHandler = (item) => {
    dispatch(bagActions.addToBag(item))
    dispatch(uiActions.showNotification({
      type: 'success',
      message: "item added succesfully",
      open: true
    }))
  }

  return (
    <section className={ `${classes.preview}` }>
      <div className={`container flex ${classes['preview--flex']}`}>
        <div className={ `details ${classes.details}` }>
          <h2 className={ `heading--secondary ${classes["text-left"]}` }>/ { item.name } /</h2>
          <p className="paragraph">lorem lorem lorem lorem lorem lorem lorem ,orem lorem lorem lorem lorem llorem lorem ,orem lorem lorem lorem lorem lorem </p>
          <ol>
            <h3 className="heading--tertiary">Composition</h3>
            <li className='paragraph'>Material 1</li>
            <li className='paragraph'>Material 2</li>
            <li className='paragraph'>Material 3</li>
          </ol>
        </div>
        <figure className={ `${classes.figure}` }>
          <img src={ item.image } alt="" className="img" />
        </figure>
        <div className={classes['preview--action']}>
        <p className="paragraph">Space to choose color, size, loaction and all required details for item picking</p>
          <button className={`btn`} onClick={ () => addToBagHandler(item) }>
            <span className="btn-text-one">${ item.price }</span>
            <span className="btn-text-two">Add to cart</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail
