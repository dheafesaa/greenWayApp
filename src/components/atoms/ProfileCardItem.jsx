import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, useTheme, useMediaQuery, Card, CardContent, Avatar,
} from '@mui/material';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { VscGithub } from 'react-icons/vsc';
import { MdOutlineMail } from 'react-icons/md';
import ResponsiveFontSizes from './Typography';
import IconButton from './IconButton';

function ProfileCardItem({
  photo, name, role1, role2, linkedin, github, email,
}) {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('lg'));

  let flexBasis;
  if (isMobile) {
    flexBasis = '100%';
  } else if (isTablet) {
    flexBasis = 'calc(50% - 16px)';
  } else {
    flexBasis = 'calc(33.33% - 16px)';
  }

  return (
    <Box flexBasis={flexBasis} mb={isMobile ? 0 : 4}>
      <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar src={photo} alt={`photo ${name}`} sx={{ width: 150, height: 150, marginBottom: 2 }} />
          <ResponsiveFontSizes variant="body1" fontWeight="600">{name}</ResponsiveFontSizes>
          <ResponsiveFontSizes variant="body1">{role1}</ResponsiveFontSizes>
          <ResponsiveFontSizes variant="body1">{role2}</ResponsiveFontSizes>
          <Box display="flex" gap={2} mt={2}>
            <IconButton to={linkedin} icon={AiOutlineLinkedin} />
            <IconButton to={github} icon={VscGithub} />
            <IconButton to={`mailto:${email}`} icon={MdOutlineMail} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

const profileCardItemShape = {
  id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role1: PropTypes.string.isRequired,
  role2: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

ProfileCardItem.propTypes = {
  ...profileCardItemShape,
};

export { profileCardItemShape };

export default ProfileCardItem;
