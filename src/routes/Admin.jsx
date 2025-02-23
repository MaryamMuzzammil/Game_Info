
import Dashboard from '../pages/Admin/Dashboard'
import {AdminLayout} from '../layout/Admin'
export const AdminRoute = [
    {
       element:<AdminLayout/>,
       children:[    
        {
            path: '/dashboard',
            element: <Dashboard/>,
        },        
      
       ]
   }
]