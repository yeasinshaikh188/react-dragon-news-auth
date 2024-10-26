import {createBrowserRouter} from "react-router-dom";

import Home from "../Pages/Home/Home";
import Root from "../Layout/Root/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default router; 