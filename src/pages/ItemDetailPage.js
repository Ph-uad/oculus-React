import { Suspense } from "react";
import { Await, defer, json, useRouteLoaderData } from "react-router-dom";
import ItemDetail from "../layout/itemDetail/ItemDetail";
import Listing from "../layout/listing/Listing";

const ItemDetailPage = () => {
  const { item, items } = useRouteLoaderData('listing-detail');

  return (
    <>
      <Suspense fallback={ <p className="text--center">Loading</p> }>
        <Await resolve={ item }>
          { (loadItem) => <ItemDetail item={ loadItem } /> }
        </Await>
      </Suspense>
      <Suspense fallback={ <p className="text--center">Loading</p> }>
        <Await resolve={ items }>
          { (loadRandomItem) => (<><h2 className="heading--secondary">More</h2> <Listing items={ loadRandomItem } /> </>) }
        </Await>
      </Suspense>
    </>
  )
}

export default ItemDetailPage;


async function loadItem(id) {

  const response = await fetch("https://http-fetch-6eb9b-default-rtdb.firebaseio.com/item.json");

  if (!response.ok) {
    throw json(
      { message: "Unexpected error encountered" },
      { status: '500' }
    )
  } else {
    const resData = await response.json();
    const data = resData.filter(item => item.id === + id);
    return data.pop();
  }
}

async function loadRandomItems() {

  const response = await fetch("https://http-fetch-6eb9b-default-rtdb.firebaseio.com/item.json");

  if (!response.ok) {
    throw json(
      { message: "Unexpected error encountered" },
      { status: '500' }
    )
  } else {
    const resData = await response.json();
    const data = resData.slice(0, 4);
    return data;
  }
}

export async function loader({ params }) {
  const id = params.itemID;

  return defer({
    item: await loadItem(id),
    items: loadRandomItems(),
  })
} 