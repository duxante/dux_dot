import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
} from '@mui/icons-material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Chip from '@mui/material/Chip';
import '../style/tabs.style.css';

const ColorTabs = () => {
  const [value, setValue] = React.useState('one');
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <div className="tabsHolder">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Angular" />
        <Tab value="two" label="React" />
        <Tab value="three" label="Vue" />
      </Tabs>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeft />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenter />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRight />
        </ToggleButton>
      </ToggleButtonGroup>
      <Chip
        sx={{
          backgroundColor: '#ffe3da',
          color: '#b3200e',
          fontWeight: 'bold',
        }}
        label="Pamela"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ColorTabs;
