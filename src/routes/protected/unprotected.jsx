import {useAuthState} from "react-firebase-hooks/auth"
import { Navigate, Outlet } from "react-router-dom";
import {auth} from '../../layout/auth/firebase/config'
const Unprotected =()=>{
    const[user, loading]=useAuthState(auth);
    if (loading) {
        return <div>loading.......</div>
    }
    return !user ? <Outlet /> : <Navigate to ='/admin'/>

}
export default Unprotected;