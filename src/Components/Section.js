import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography } from '@material-ui/core';

const Section = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom component="h2">{props.title}</Typography>
      <Grid container spacing={16} style={{ marginBottom: 10 }}>
        <Grid item xs={12}>
          <Paper style={{ padding: 10 }}>
            <Typography>{props.children}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Section.propTypes = {
  title: PropTypes.string,
}

export default Section;
