import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import LinkIcon from '@material-ui/icons/Link';
import './SkillComponent.css'

const CustomLinkButton = (link) => {
  return (
    <Link target="_blank" rel="noopener noreferrer"
      href={link}
      style={{
        color: 'inherit',
        fontSize: "12px"
      }}
    >
      <ListItem button>
        <ListItemAvatar>
          <LinkIcon />
        </ListItemAvatar>
        <ListItemText primary={"More Info"} />
      </ListItem>
    </Link>
  )
}

export default class SkillComponent extends React.Component {
  constructor(props) {
    super(props)
    const { skillObj } = props
    this.state = {
      skillObj: skillObj
    }
  }
  componentWillReceiveProps({skillObj}) {
    this.setState({...this.state, skillObj})
  }
  render() {
    const bull = <span className="bullet">•</span>;
    console.log(this.state)
    const { name, tag, desc, docLink, features } = this.state.skillObj
    
    return (
      <Card className="root" variant="outlined">
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <CustomLinkButton link={docLink} />
            </IconButton>
          }
          title={name}
          titleTypographyProps={{align:"center", fontSize: 500}}
          disableTypography={false}
        />
        <CardContent>
          <div className="flex-row pos">
            {tag.map((val, idx) => {
              return (
                <Typography color="textSecondary" className="row-flex-item">
                  {val}
                </Typography>
              )
            })}
          </div>
          <Typography variant="body2" component="p">
            {desc}
          </Typography>
          <Typography>
            {
              // if undefined, will not map anything
              features ?
              <ul>
                {features.map((val, idx) => {
                  return <li>{val}</li>
                })}
              </ul> : <></>
            }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }  
}
