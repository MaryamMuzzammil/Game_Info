import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate, Outlet } from "react-router-dom";
import {auth} from '../../layout/auth/firebase/config'

const Protected =()=>{

    const[user, loading]= useAuthState(auth);
    if (loading) {
        return <div>loading.......</div>
    }
    return user ? <Outlet /> : <Navigate to ='/signup'/>

}
export default Protected;