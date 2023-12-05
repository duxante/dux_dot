import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckBox = () => {
  return (
    <FormGroup>
      <FormControlLabel
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '400px',
          width: '100%',
        }}
        control={
          <Checkbox
            sx={{
              color: '#fa541c',
              '&.Mui-checked': {
                color: '#fa541c',
              },
            }}
            defaultChecked
          />
        }
        label="Check Box"
      />
    </FormGroup>
  );
};

export default CheckBox;
