import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import '../style/successAlert.style.css';

const ActionAlerts = () => {
  return (
    <Stack className="actionAlertsHolder" sx={{ width: '100%' }} spacing={2}>
      <Alert sx={{ backgroundColor: '#b8e7b8' }} onClose={() => {}}>
        This is a success alert !
      </Alert>
    </Stack>
  );
};

export default ActionAlerts;
