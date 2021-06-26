import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

const FolderElement = () => {
    const classes = useStyles();
  return ( 
    <Grid container className={classes.root} spacing={10}>
      <Grid item xs={12}>
      <Grid container justify="center" spacing={10}>
        <Paper className={classes.paper}/>
      </Grid>
      </Grid>
    </Grid>
  );
};

export default FolderElement;
