import { json, useLoaderData } from "react-router-dom";
import Listing from "../components/listing/Listing"

const Eyeglasses = () => {

    const data = useLoaderData();
    return (
        <Listing items={ data } type="eyeglasses" />
        )
}

export default Eyeglasses


export async function loader(data) {

    const response = await fetch("https://http-fetch-6eb9b-default-rtdb.firebaseio.com/item.json");

    if (!response.ok) {
        throw json(
            {
                message: 'Can not connect to the server at the moment',
                status: '422'
            }
        )
    } else {
        const resData = await response.json()

        return data ? resData.filter(items => items.type === data) : resData
    }
}