import { createBrowserRouter } from "react-router-dom";
import {Home} from "./pages/home/home";
import {About} from "./pages/about/about";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
            index: true
        },
        {
            path: "/About",
            element: <About/>
        },
        
        {
            path:"*",
            element:<p>404 Error</p>
        }
    ]
);

export default router