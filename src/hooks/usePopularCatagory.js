import { useEffect, useState } from 'react';

const usePopularCatagory = () => {
     const [popularCatagory, setPopularCatagory] = useState([]);

    useEffect(() => {
        
        fetch("https://advance-auto-part.herokuapp.com/populerCatagory")
          .then((res) => res.json())
          .then((data) => setPopularCatagory(data));
    },[])
    
    return [popularCatagory]
};

export default usePopularCatagory;


