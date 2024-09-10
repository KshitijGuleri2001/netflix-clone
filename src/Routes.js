 import App from "./App"
 import { createBrowserRouter } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Detail from "./Components/Detail";
 const routes = createBrowserRouter ([
{
    path:"/",
    element:<App/>,
},

{
    path:"/SignUp",
    element:<SignUp/>,
},

{
    path:"/SignIn",
    element:<SignIn/>,
},
{
    path:"/Detail/:id",
    element:<Detail/>,
},



 ])
 export default routes;