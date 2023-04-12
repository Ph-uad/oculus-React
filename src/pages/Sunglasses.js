import { useLoaderData } from 'react-router-dom'
import Listing from '../components/listing/Listing'

const Sunglasses = () => {
    const data = useLoaderData();
    return <Listing items={ data } type="sunglasses" />
}

export default Sunglasses