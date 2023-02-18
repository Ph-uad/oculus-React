import { useDispatch } from 'react-redux'
// import Image1 from '../../Assets/image/image1.png'
// import Image2 from '../../Assets/image/image2.png'
// import Image3 from '../../Assets/image/image3.png'
// import Image4 from '../../Assets/image/image4.png'
import { bagActions } from '../../store/bag-slice'

const Listing = ({onclick, items, type }) => {


    // const passUpProp = (item) => {
    //     onclick(item)
    // }
    const dispatch = useDispatch()

    const addToBagHandler = (item) =>{
        dispatch(bagActions.addToBag(item));
    }
    

    const images = items[0].type === 'sunglasses' ? ["https://images.unsplash.com/photo-1522125123931-9304d91a42ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60","https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80","https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80", "https://images.unsplash.com/photo-1599838082471-71ca4aa8e0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60", "https://images.unsplash.com/photo-1542629458-eaa56d608062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80","https://images.unsplash.com/photo-1584036553516-bf83210aa16c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"] : ["https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60","https://images.unsplash.com/photo-1574065557312-b7cc977d8a89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80","https://images.unsplash.com/photo-1608906709312-fe17f7c1a5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"];

    const glassesList = items.map(item => {
        return (
            // <div className="list card" key={ item.id } onClick={ () => passUpProp(item) }>
            <div className="list card" key={ item.id }>
                <figure className="figure list__figure">
                    <img src={ item.image ? item.image : images[Math.floor(Math.random() * images.length)] } alt="glasses" className="img" />
                </figure>

                <div className="flex">
                    <div className="">
                        <h2 className="heading--tertiary">{ item.name }</h2>
                        <h6 className="heading--senary">{ item.type }</h6>
                    </div>
                        <h4 className="heading--quaternary">$450</h4>
                </div>
                <button className="button button--action" onClick={() =>addToBagHandler(item)}>Add</button>
            </div>
        )
    });

    return (
        <section className="section">
            <div className="container">
                <ul className='grid'>{ glassesList }</ul>
            </div>
        </section>
    )
}

export default Listing