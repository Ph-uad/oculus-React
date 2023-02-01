import { useEffect, useState } from "react"


const useFetchAPI = () => {

    const [item, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async() => {
            const response = await fetch("https://http-fetch-6eb9b-default-rtdb.firebaseio.com/item.json");

            const responseData = await response.json()
            const data = responseData;
            console.log(data)

           const fetchedData =[]

           for (const key in data){
             fetchedData.push({
                id: key,
                name : data[key].name,
                type : data[key].type,
                price: data[key].price,
                description : data[key].description,  
             })
           }
           setItems(fetchedData)
        }

        fetchItems();
    }, [])

    return item
}

export default useFetchAPI