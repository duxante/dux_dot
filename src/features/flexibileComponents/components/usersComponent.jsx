import '../style/usersComponent.style.css';
import AvatarGroup from '@mui/material/AvatarGroup';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const ImageAvatars = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{ width: 56, height: 56 }}
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
        />
      </Stack>
      <AvatarGroup total={24}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
    </>
  );
};

export default ImageAvatars;
