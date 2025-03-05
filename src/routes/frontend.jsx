import { FrontLayout } from "../layout/frontend";
import AboutPage from "../pages/aboutpage/aboutus";
import Contact from "../pages/contact/contact";
import Home from "../pages/Herosection/banner";
import SportsPage from "../pages/sports/sports";



export const FrontendRoute = [
    {
        element:<FrontLayout/>,
        children:[
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/about',
                element:<AboutPage/>
            },
            {
                path: '/sports',
                element:<SportsPage/>
            },
            {
                path: '/contact',
                element:<Contact/>
            },

    
        ]
    }
]