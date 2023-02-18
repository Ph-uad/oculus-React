import SVG from "../../UI/Svg/Svg"
import classes from  './bag.module.css'

const Bag = (props) => {
  return (
    <div className="flex">
        <SVG Id='#icon-shopping_bag'/>
        <span className={`${classes.notification}`}></span>
    </div>
  )
}

export default Bag