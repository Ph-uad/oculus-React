import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./root/Root";

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Root/>,children :[
      {path : '/', element:<Home/>}
    ] }
  ])

  return (<RouterProvider router={router} />);
}

export default App;
