import { useEffect, useState } from "react";
import { useParams } from "react-router";
const useCarSingleDetails = () => {

    const { detailsId } = useParams();
    const [carDetails, setCarDetails] = useState([]);

    //Car Parts Single Details

    useEffect(() => {
        fetch(`https://advance-auto-part.herokuapp.com/carPartsSingle/${detailsId}`)
            .then((res) => res.json())
            .then((data) => setCarDetails(data[0]));
    }, [detailsId]);

    return [carDetails];
};

export default useCarSingleDetails;