import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import { FaTimes } from "react-icons/fa";


const Task = ({ task, onDelete, onToggle }) => {
  return (
    <Card
      className={`task classes.root ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
      variant="outlined"
    >
      <CardContent>
        <Typography>
          <h3
            className="title"
            color="textPrimary"
            gutterBottom
          >
            {task.text}
            <FaTimes
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => onDelete(task.id)}
            />
          </h3>
        </Typography>
        <Typography>
          <h6>{task.datetime}</h6>
        </Typography>
      </CardContent>

        {/* <Typography className={classes.pos} color="textSecondary"></Typography> */}
        {/* <Typography variant="body2" component="p">
          Notes:
          <br />
          Hello World!!!
        </Typography> */}
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}

    </Card>
  );
}

export default Task;
