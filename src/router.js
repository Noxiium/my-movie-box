import { createBrowserRouter } from "react-router-dom";
import {Home} from "./pages/home/home";
import {About} from "./pages/about/about";
import {Box} from "./pages/box/box";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home/>,
            index: true
        },
        {
            path: "/About",
            element: <About/>
        },
        {
            path: "/Box",
            element: <Box/>
        },
        
        {
            path:"*",
            element:<p>404 Error</p>
        }
    ]
);

export default router