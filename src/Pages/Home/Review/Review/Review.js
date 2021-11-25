import React from 'react';
import './Review';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from '@mui/material';
import Typography from "@mui/material/Typography";
import ReviewContent from '../ReviewContent/ReviewContent';
import useReview from '../../../../hooks/useReview';

const Review = () => {

    const [review] = useReview();

    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
        autoplay: true,
    };

    return (
      <Container sx={{pb:10}}>
        <Typography variant="h4" component="div" gutterBottom>
          User Review
        </Typography>
        <Slider {...settings}>
                {review.map((review) => (<ReviewContent
                    key={review._id}
                    review={review}
                ></ReviewContent>
          ))}
        </Slider>
      </Container>
    );
};

export default Review;          