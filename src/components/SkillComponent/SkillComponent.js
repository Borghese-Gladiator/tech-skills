import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './SkillComponent.css'

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
    const { skillObj } = this.state
    console.log(skillObj)
    return (
      <Card className="root" variant="outlined">
        <CardContent>
          <Typography className="title" color="textSecondary" gutterBottom>
            Buzz Word
          </Typography>
          <Typography variant="h4" component="h2">
            {skillObj.name}
          </Typography>
          <div className="flex-row">
            {skillObj.tag.map((val, idx) => {
              return (
                <Typography className="pos" color="textSecondary" className="row-flex-item">
                  {val}
                </Typography>
              )
            })}
          </div>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
          <Typography>
            {
              Object.keys(skillObj).includes("features") ?
              <ul>
                {skillObj.features.map((val, idx) => {
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
