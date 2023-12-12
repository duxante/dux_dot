import '../style/usersComponent.style.css';
import AvatarGroup from '@mui/material/AvatarGroup';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import avatar1 from '../../../assets/avatar1.png';
import avatar2 from '../../../assets/avatar2.png';
import avatar3 from '../../../assets/avatar3.png';
import avatar4 from '../../../assets/avatar4.png';
import avatar5 from '../../../assets/avatar5.png';

const ImageAvatars = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{ width: 56, height: 56 }}
          alt="Cindy Baker"
          src={avatar5}
        />
      </Stack>
      <AvatarGroup total={24}>
        <Avatar alt="Remy Sharp" src={avatar1} />
        <Avatar alt="Travis Howard" src={avatar2} />
        <Avatar alt="Agnes Walker" src={avatar3} />
        <Avatar alt="Trevor Henderson" src={avatar4} />
      </AvatarGroup>
    </>
  );
};

export default ImageAvatars;
