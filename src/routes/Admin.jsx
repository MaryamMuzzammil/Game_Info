
import Dashboard from '../pages/Admin/Dashboard'
import {AdminLayout} from '../layout/Admin'
import OfferList from '../pages/Admin/manage_offer/viewoffer'
import CreateOffer from '../pages/Admin/manage_offer/create_offer'
import TestimonialList from '../pages/Admin/manage_testimonials/viewtestimonial'
import CreateTestimonials from '../pages/Admin/manage_testimonials/create_testimonial'
import TeamList from '../pages/Admin/manage_ourTeam/viewteam'
import CreateTeam from '../pages/Admin/manage_ourTeam/create_team'
import NewsList from '../pages/Admin/manage_news/view_news'
import CreateNews from '../pages/Admin/manage_news/create_news'

export const AdminRoute = [
    {
       element:<AdminLayout/>,
       children:[    
        {
            path: '/dashboard',
            element: <Dashboard/>,
        },        
        {
            path: '/offer',
            element: <OfferList/>,
        },  
        {
            path: '/createoffer',
            element: <CreateOffer/>,
           
        },
        {
            path: '/createoffer/:id', 
            element: <CreateOffer />,
        },
        {
            path: '/testimonials',
            element: <TestimonialList/>,
        },  
        {
            path: '/createtestimonial',
            element: <CreateTestimonials/>,
           
        },
        {
            path: '/createtestimonial/:id', 
            element: <CreateTestimonials />,
        },
        {
            path: '/team',
            element: <TeamList/>,
        },  
        {
            path: '/createteam',
            element: <CreateTeam/>,
           
        },
        {
            path: '/createteam/:id', 
            element: <CreateTeam/>,
        },
        {
            path: '/news',
            element: <NewsList/>,
        },  
        {
            path: '/createnews',
            element: <CreateNews/>,
           
        },
        {
            path: '/createnews/:id', 
            element: <CreateNews/>,
        },
      
       ]
   }
]