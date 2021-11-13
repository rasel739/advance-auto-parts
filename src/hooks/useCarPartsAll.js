import { useEffect, useState } from 'react';

const useCarPartsAll = () => {
   
    const [carParts, setCarParts] = useState([]);
   

    useEffect(() => {

        fetch("https://advance-auto-part.herokuapp.com/carPartsAll")
          .then((res) => res.json())
          .then((data) => setCarParts(data));

    }, [])
    



    return [carParts];
};

export default useCarPartsAll;