import { useEffect, useState} from 'react';
import useAuth from '../hooks/useAuth'

const useMyOrder = () => {

    const {user} = useAuth()

     const [myOrder, setMyOrder] = useState([]);

     useEffect(() => {
       fetch(`https://advance-auto-part.herokuapp.com/myOrder/${user?.email}`)
         .then((res) => res.json())
         .then((data) => setMyOrder(data));
     }, [myOrder,user]);
    
    
    return [myOrder]
};

export default useMyOrder;