import {createBrowserRouter} from "react-router-dom";

import Home from "../Pages/Home/Home";
import Root from "../Layout/Root/Root";
import Login from "../Pages/Home/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRout from "./PrivateRout";
import About from "../Pages/About";
import Career from "../Pages/Home/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
          path:"/",
          element:<Home></Home>,
          loader: () => fetch('/news.json')
      },
      {
        path:'/news/:id',
        element:<PrivateRout><NewsDetails></NewsDetails></PrivateRout>,
        loader: ({ params }) => fetch(`/news.json`)
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/career',
        element:<Career></Career>
      }
    ]
  },
]);


export default router