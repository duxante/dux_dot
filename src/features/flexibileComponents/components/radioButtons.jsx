import * as React from 'react';
import Radio from '@mui/joy/Radio';

const RadioButtonLabel = () => {
  return (
    <Radio
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '400px',
        width: '100%',
      }}
      label="Radio Button"
      defaultChecked
    />
  );
};

export default RadioButtonLabel;
