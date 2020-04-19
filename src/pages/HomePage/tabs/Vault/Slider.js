import React from 'react'
import { makeStyles,styled } from '@material-ui/core/styles';
import Slider  from '@material-ui/core/Slider';

const MySlider = styled(Slider)({
    background: 'white',
    color: "#29c89d",
});

function mSlider() {
    return (
        <MySlider
            aria-label="custom thumb label"
            defaultValue={20}
      />       
    )
}

export default mSlider




// function HeaderSlider() {
//     const [value, setValue] = React.useState([20, 37]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//     return (
//       <MySlider
//           value={20}
//           onChange={handleChange}
//           valueLabelDisplay="auto"
//           getAriaValueText={(value)=>value}
//       />
//     )
// }

// export default HeaderSlider;

