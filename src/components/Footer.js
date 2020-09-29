import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

function Footer() {
  const classes = useStyles();
  
  return (
    <footer id="footer">
      <div className={classes.flexCenter}>
        <List style={{display:"flex", flexAlign: "row"}}>
          {[
            { text: 'tim.shee0791@gmail.com', link: '"mailto:tim.shee0791@gmail.com', avatarColorClass: classes.green, iconFunc: () => { return <MailIcon style={{fill: "black"}} /> } },
            { text: 'GitHub', link: 'https://github.com/Borghese-Gladiator', avatarColorClass: classes.green, iconFunc: () => { return <GitHubIcon style={{fill: "black"}} /> } },
            { text: 'LinkedIn', link: 'https://www.linkedin.com/in/timothy-shee-aa46a5170/', avatarColorClass: classes.lightBlue, iconFunc: () => { return <LinkedInIcon style={{fill: "black"}} /> } }
          ].map((obj, idx) => {
            return (
              <Link target="_blank" rel="noopener noreferrer"
                href={obj.link}
                style={{
                  color: 'inherit',
                  fontSize: "15px"
                }}
                key={"SidebarContact" + idx}
              >
                <ListItem button key={obj.text + idx} className={classes.linkHover}>
                  <ListItemAvatar>
                    <Avatar>
                      {obj.iconFunc()}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={obj.text} />
                </ListItem>
              </Link>
            )
          })}
        </List>
      </div>
    </footer>
  )
}

export default Footer