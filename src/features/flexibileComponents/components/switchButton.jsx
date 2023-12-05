import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const BasicSwitch = () => {
  return (
    <FormGroup>
      <FormControlLabel
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '400px',
          width: '100%',
        }}
        control={<Switch defaultChecked color="warning" />}
        label="Switch"
      />
    </FormGroup>
  );
};

export default BasicSwitch;
