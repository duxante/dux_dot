import * as React from 'react';
import Radio from '@mui/joy/Radio';

const RadioButtonLabel = () => {
  return (
    <div className="radioButtonHolder">
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
    </div>
  );
};

export default RadioButtonLabel;
