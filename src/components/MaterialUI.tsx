import React from 'react';
// 1. import
import { Button, makeStyles, Typography, Grid, Paper } from '@material-ui/core';

// 2. useStylesを定義
const useStyles = makeStyles({
  btnStyle: {
    backgroundColor: 'green',
    padding: '3px 50px',
  },
  typoStyle: {
    color: 'blue',
  },
  paperStyle: {
    background: 'orange',
    height: '50px',
  },
});

const MaterialUI: React.FC = () => {
  // 3. componentの中でclassesを定義
  const classes = useStyles();

  return (
    <div>
      <Typography
        className={classes.typoStyle}
        color="secondary"
        variant="h1"
        align="right"
        gutterBottom
        noWrap
      >
        Hello, UIHello, UIHello, UIHello, UIHello, UIHello, UIHello, UIHello, UI
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
      </Grid>

      {/* 4. class付与 */}
      <Button className={classes.btnStyle} variant="contained" color="primary">
        Hello World
      </Button>

      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="flex-end"
      >
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MaterialUI;
