import { useState } from "react"
import { json, useLoaderData } from "react-router-dom";
import Listing from "../layout/listing/Listing"
import Preview from "../layout/preview/Preview"

const Eyeglasses = () => {

    const data = useLoaderData();
    const [previewItem, setPreviewItem] = useState();
    const clickHandler = (data) => { setPreviewItem(data); }

    return (
        <>
            { previewItem && <Preview item={ previewItem } /> }
            <Listing items={data} onclick={ clickHandler } type="eyeglasses" />
        </>
    )
}
export default Eyeglasses

export async function loader(data) {

    const response = await fetch("https://http-fetch-6eb9b-default-rtdb.firebaseio.com/item.json");

    if (!response.ok) {
        throw json(
            { message: 'Can not connect to the server at the moment' ,
             status: 422 
            }
        )
    } else {
        const resData = await response.json()

        return data ? resData.filter(items => items.type === data) : resData
    }
}