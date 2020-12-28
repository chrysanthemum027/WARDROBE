import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 250,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    
    <Grid item justify='center'  xs={0}>
    <div className=' tc' >
    <Card className={classes.root}>
      
      <CardActionArea>
        <div className='grow'>
      <CardMedia
          component="img"
          alt="Collection"
          height="500"
          width="600"
          image="https://images.unsplash.com/photo-1543095834-7445b8af8c2b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1002&q=80"
          title="Tshirt"
        />
        </div>
        <div className='grow'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
        </div>
      </CardActionArea>
      
      
    </Card>
    </div>
   </Grid>
   
  );
}
