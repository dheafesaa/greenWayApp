import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box, CardActionArea, useTheme, useMediaQuery,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ResponsiveFontSizes from './Typography';

function ArticleCardItem({ picture, title, link }) {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('lg'));

  let flexBasis;
  if (isMobile) {
    flexBasis = '100%';
  } else if (isTablet) {
    flexBasis = 'calc(50% - 16px)';
  } else {
    flexBasis = 'calc(25% - 16px)';
  }

  return (
    <Box flexBasis={flexBasis} mb={isMobile ? 0 : 4} component={Link} to={link}>
      <Card sx={{ borderRadius: '16px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={picture}
            alt={title}
          />
          <CardContent>
            <ResponsiveFontSizes
              variant="body1"
              fontWeight="600"
              sx={{
                display: '-webkit-box',
                '-webkit-box-orient': 'vertical',
                WebkitLineClamp: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'normal',
                mb: 0,
              }}
            >
              {title}
            </ResponsiveFontSizes>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

const articleCardItemShape = {
  id: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

ArticleCardItem.propTypes = {
  ...articleCardItemShape,
};

export { articleCardItemShape };

export default ArticleCardItem;
