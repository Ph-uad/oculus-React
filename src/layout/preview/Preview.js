import classes from './preview.module.css';
import Image1 from '../../Assets/image/image1.png'

const Preview = (props) => {

    const {item} = props;

  return (
    <section className={`preview ${classes.preview}`}>
        <div className="card container flex">
                <div className={`details ${classes.details}`}>
                    <h1 className={`heading--secondary ${classes["text-left"]}`}>{item.name}</h1>
                    <p className="paragraph">{item.description}</p>
                    <button className='button'>$Price</button>
                </div>
                <figure className={`figure ${classes.figure}`}>
                    <img src={Image1} alt="" className="img" />
                </figure>
        </div>
    </section>
  )
}

export default Preview