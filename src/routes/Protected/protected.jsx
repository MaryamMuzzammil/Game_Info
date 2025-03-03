import {useAuthState} from 'react-firebase-hooks/auth';
import { Navigate , Outlet } from 'react-router-dom';
import {auth} from '../../Firebase/config';

const Protected = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <div>loading........</div>
    }
    return user ? <Outlet/> : <Navigate to = "/signup" replace/>
}
export default Protected;