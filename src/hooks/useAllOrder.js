import { useEffect, useState} from 'react';

const useAllOrder = () => {

    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        
        fetch("https://advance-auto-part.herokuapp.com/allOrder")
          .then((res) => res.json())
          .then((data) => setAllOrder(data));

    },[allOrder])
    return [allOrder];
};

export default useAllOrder;