import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../Firebase/config";

const Unprotected = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <div>loading....</div>
    }
    return !user ? <Outlet/> : <Navigate to = '/dashboard' />
}
export default Unprotected;