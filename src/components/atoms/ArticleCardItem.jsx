import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Box, CardActionArea, useTheme, useMediaQuery,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ResponsiveFontSizes from './Typography';

function ArticleCardItem({ imageUrl, title }) {
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
    <Box flexBasis={flexBasis} mb={isMobile ? 0 : 4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={imageUrl}
          />
          <CardContent>
            <ResponsiveFontSizes variant="body1" fontWeight="600">
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
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

ArticleCardItem.propTypes = {
  ...articleCardItemShape,
};

export { articleCardItemShape };

export default ArticleCardItem;
