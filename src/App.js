import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Eyeglasses from "./pages/Eyeglasses";
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
            { path: 'eyeglasses', element: <Eyeglasses /> },
            { path: 'sunglasses', element: <Sunglasses /> }
          ]
        }
      ]
    }
  ])

  return (<RouterProvider router={ router } />);
}

export default App;
