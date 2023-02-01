import { useEffect, useState } from "react"


const useFetchAPI = () => {

    const [item, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async() => {
            const response = await fetch("https://http-fetch-6eb9b-default-rtdb.firebaseio.com/cart.json");

            const responseData = await response.json()
            const data = responseData.items;

           const fetchedData =[]

           for (const key in data){
             fetchedData.push({
                id: key,
                price: data[key].price
             })
           }
           setItems(fetchedData)
        }

        fetchItems();
    }, [])

    return item
}

export default useFetchAPI