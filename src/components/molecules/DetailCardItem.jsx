import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Colors from '../atoms/Colors';

function DetailCardItem({
  title, content, isLink, link,
}) {
  return (
    <Card
      sx={{
        borderBottom: `1px solid ${Colors.secondary.hard}`,
        background: 'transparent',
        boxShadow: 'none',
        py: 4,
      }}
    >
      <Typography variant="h6">{title}</Typography>
      {isLink ? (
        <Typography component={Link} to={link} variant="body1">
          {content}
        </Typography>
      ) : (
        <Typography variant="body1">{content}</Typography>
      )}
    </Card>
  );
}

DetailCardItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isLink: PropTypes.bool,
  link: PropTypes.string,
};

DetailCardItem.defaultProps = {
  isLink: false,
  link: '',
};

export default DetailCardItem;
