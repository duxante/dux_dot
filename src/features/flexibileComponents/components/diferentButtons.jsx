import * as React from 'react';
import { PlaylistPlay, CloudUpload } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import '../style/differentButtons.style.css';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const ContainedButtons = () => {
  return (
    <div className="containedButtons">
      <Button
        sx={{ backgroundColor: '#fa541c', padding: '10px 16px' }}
        variant="contained"
      >
        + Add To Cart
      </Button>
      <Button
        sx={{
          borderRadius: '20px',
          backgroundColor: '#212b36',
          padding: '10px 16px',
        }}
        component="label"
        variant="contained"
        startIcon={<CloudUpload />}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
      <Fab color="primary" aria-label="add">
        <PlaylistPlay />
      </Fab>
      <Button
        sx={{
          backgroundColor: 'white',
          border: '2px solid orange',
          borderRadius: '50%',
          width: '25px!important',
          height: '60px',
        }}
        variant="outlined"
      ></Button>
    </div>
  );
};

export default ContainedButtons;
