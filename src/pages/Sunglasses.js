import { useState } from 'react'
import Listing from '../layout/listing/Listing'
import Preview from '../layout/preview/Preview'

const Sunglasses = () => {

    const [previewItem, setPreviewItem] = useState()
    const clickHandler = (data) => {setPreviewItem(data);}

    return (
        <>
            { previewItem && <Preview item={previewItem}/> }
            <Listing onclick={ clickHandler } type="sunglasses" />
        </>
    )
}

export default Sunglasses