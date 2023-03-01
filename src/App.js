import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Eyeglasses, {loader as glassesLoader} from "./pages/Eyeglasses";
import Home from "./pages/HomePage";
import Sunglasses from "./pages/Sunglasses";
import ItemDetailPage, {loader as detailLoader} from './pages/ItemDetailPage'
import Root from "./root/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Root />,errorElement: <ErrorPage/> , children: [
        { index: true, element: <Home /> },
        {
          path: 'listing', children: [
            { path: 'eyeglasses', element: <Eyeglasses />, loader :()=>glassesLoader('eyeglasses')},
            { path: 'sunglasses', element: <Sunglasses />, loader :()=>glassesLoader('sunglasses') },
            {path : ':itemID',id:'listing-detail',  element : <ItemDetailPage/>, loader: detailLoader}
          ]
        }
      ]
    }
  ])

  return (<RouterProvider router={ router } />);
}

export default App;
