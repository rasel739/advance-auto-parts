import { useEffect, useState} from 'react';

const useReview = () => {

    const [review, setReview] = useState([])
    

    useEffect(() => {
        fetch("https://advance-auto-part.herokuapp.com/getReview")
          .then((res) => res.json())
          .then((data) => setReview(data));

    },[review])

    return [review]
};

export default useReview;