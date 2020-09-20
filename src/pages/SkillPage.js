import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SkillTree from '../components/SkillTree'
import SkillComponent from '../components/SkillComponent'
import treeData from '../constants/skills'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paddingTop: {
    paddingTop: 25
  }
}));

export default function SkillPage() {
  const classes = useStyles();

  // Spacing 0 necessary to prevent horizontal scroll bar
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={5} sm={4} md={3} className={classes.paddingTop}>
          <SkillTree data={treeData} />
        </Grid>
        <Grid item xs={7} sm={8} md={9}>
          <SkillComponent />
        </Grid>
      </Grid>
    </div>
  );
}
