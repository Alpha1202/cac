import React from 'react';


import { makeStyles,styled } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';




const MySlider = styled(Slider)({
  background: 'white',
  color: "rgb(162, 251, 32)",
  height:"20px"
});

function HeaderSlider() {
    const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
      <MySlider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={(value)=>value}
      />
    )
}

export default HeaderSlider;

