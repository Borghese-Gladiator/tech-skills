import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paddingTop: {
    paddingTop: 500,
  },
}))

function Footer() {
  const classes = useStyles();
  
  return (
    <footer id="footer">
      <div className={classes.paddingTop}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
    </footer>
  )
}

export default Footer