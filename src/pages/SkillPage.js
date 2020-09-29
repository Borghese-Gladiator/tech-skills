import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SkillTree from '../components/SkillTree'
import SkillComponent from '../components/SkillComponent'
import treeData from '../constants/treeSkills'
import skillDisplayData from '../constants/displayData'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  gridContainer: {
    overflow: "auto",
    height: 800
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paddingTop: {
    paddingTop: 25,
    paddingLeft: '1vw'
  }
}));

export default function SkillPage() {
  const classes = useStyles();
  const firstSkill = skillDisplayData[Object.keys(skillDisplayData)[0]]
  const [skillDisplay, setSkillDisplay] = useState(firstSkill)

  function handleTreeClick(skillTitle) {
    setSkillDisplay(skillDisplayData[skillTitle])
  }

  // Spacing 0 necessary to prevent horizontal scroll bar
  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid item xs={5} sm={4} md={3} className={classes.paddingTop}>
          <SkillTree data={treeData} parentClickHandler={handleTreeClick} />
        </Grid>
        <Grid item xs={7} sm={8} md={9}>
          <SkillComponent skillObj={skillDisplay} />
        </Grid>
      </Grid>
    </div>
  );
}
