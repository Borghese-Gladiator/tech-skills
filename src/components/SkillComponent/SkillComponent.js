import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import LinkIcon from '@material-ui/icons/Link';
import './SkillComponent.css'

const CustomLinkButton = (props) => {
  const { link, text } = props
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
        <ListItemText primary={text} />
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
    console.log(this.state)
    const { name, tag, desc, docLink, features, relatedLinks } = this.state.skillObj
    
    return (
      <Card className="root" variant="outlined">
        <CardHeader
          title={name}
          titleTypographyProps={{align:"center", variant:'h3'}}
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
          <br />
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
          <IconButton aria-label="settings">
            <CustomLinkButton link={docLink} text={"Official Docs"} />
          </IconButton>
          {
            // if undefined, will not map anything
            relatedLinks ?
            <div>
              {relatedLinks.map((val, idx) => {
                return (
                  <IconButton aria-label="icon-button">
                    <CustomLinkButton link={val["link"]} text={val["text"]} />
                  </IconButton>
                )
              })}
            </div> : <></>
          }
        </CardActions>
      </Card>
    );
  }  
}