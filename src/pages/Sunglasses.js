// import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Listing from '../components/listing/Listing'
// import Preview from '../layout/preview/Preview'

const Sunglasses = () => {
    const data = useLoaderData();
    // const [previewItem, setPreviewItem] = useState()
    // const clickHandler = (data) => {setPreviewItem(data);}

    return (
        <>
            {/* { previewItem && <Preview item={previewItem}/> } */}
            {/* <Listing items={data} onclick={ clickHandler } type="sunglasses" /> */}
            <Listing items={data}  type="sunglasses" />
        </>
    )
}

export default Sunglasses