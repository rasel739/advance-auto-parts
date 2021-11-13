import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from '@mui/material/Grid';
import carSliderOne from '../../../images/car-part-1.png';
import carSliderTwo from '../../../images/car-part-2.png';
import carSliderThree from '../../../images/car-part-3.png';
import carSliderFour from '../../../images/car-part-4.png';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const images = [
  {
    title: "World Best Qulity",
    name:'Auto Parts',
    imgPath: `${carSliderOne}`,
  },
  {
    title: "World Best Qulity",
    name:'Paradise Of Auto Parts',
    imgPath: `${carSliderTwo}`,
  },
  {
    title: "World Best Qulity",
    name:'Remanufactured Engines & Parts',
    imgPath: `${carSliderThree}`,
  },
  {
    title: "World Best Qulity",
    name:'Genuine Toyota Parts',
    imgPath: `${carSliderFour}`,
  },
];

const VehicleSlider = () => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
      setActiveStep(step);
    };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 0,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((parts, index) => (
          <div key={parts.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      {parts.title}
                    </Typography>
                    <Typography variant="h1" component="div" gutterBottom>
                      New Car Parts
                    </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                      {parts.name}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                  <Box
                    component="img"
                    sx={{
                      height: "30rem",
                      display: "block",
                      maxWidth: "100%",
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={parts.imgPath}
                    alt={parts.label}
                  ></Box>
                </Grid>
              </Grid>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "ltr" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
};

export default VehicleSlider;
