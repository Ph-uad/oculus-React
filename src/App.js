import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Eyeglasses, {loader as eyeglassesLoader} from "./pages/Eyeglasses";
import Home from "./pages/HomePage";
import Sunglasses from "./pages/Sunglasses";
import Root from "./root/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Root />,errorElement: <ErrorPage/> , children: [
        { index: true, element: <Home /> },
        {
          path: 'listing', children: [
            { path: 'eyeglasses', element: <Eyeglasses />, loader :()=>eyeglassesLoader('eyeglasses')},
            { path: 'sunglasses', element: <Sunglasses />, loader :()=>eyeglassesLoader('sunglasses') }
          ]
        }
      ]
    }
  ])

  return (<RouterProvider router={ router } />);
}

export default App;
