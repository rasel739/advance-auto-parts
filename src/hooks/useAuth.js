import  { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';


const useAuth = () => {

    const AuthUse = useContext(AuthContext);

    return AuthUse;
};

export default useAuth;