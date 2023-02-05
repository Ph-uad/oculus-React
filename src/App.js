import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Eyeglasses from "./pages/Eyeglasses";
import Home from "./pages/Home";
import Sunglasses from "./pages/Sunglasses";
import Root from "./root/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Root />, children: [
        { index: true, element: <Home /> },
        {
          path: 'listing', children: [
            { path: 'listing/eyeglasses', element: <Eyeglasses /> },
            { path: 'listing/sunglasses', element: <Sunglasses /> }
          ]
        }
      ]
    }
  ])

  return (<RouterProvider router={ router } />);
}

export default App;
