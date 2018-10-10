import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Background from '../img/images/sky2.jpg';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  card: {
    minWidth: 275,
    marginTop: 80,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginLeft: 60,
    marginBottom: 10,
    fontSize: 17,
  },
  pos: { 
    marginBottom: 12,
  },
});
function SimpleCard(props) {
  const { classes } = props;
  return (
    <div style={{ backgroundImage: `url(${Background})`,width: "100%", height: "650px" }}>
    <Grid container spacing={24}>
        <Grid item xs>
        </Grid>
        <Grid item xs justify="center">
          <Card className={classes.card}>
        <CardContent align="center">
          <Typography variant="headline" component="h2">
            Form Login
          </Typography>
           <Typography className={classes.pos} color="textSecondary">
            Silahkan Login Terlebihdahulu !
          </Typography>
          <br />
          <br />
          <Grid container spacing={8} align="flex-end" justify="center">
          <Grid item>
            <TextField 
            autoFocus
            name='username'
            id="input-with-icon-grid" 
            label="Username" 
             />
          </Grid>
        </Grid>
         <br />
        <Grid container spacing={8} alignItems="flex-end" justify="center">
          <Grid item>
            <TextField 
            name='password'
            id="input-with-icon-grid" 
            type="password" 
            label="Password"
            />
          </Grid> 
        </Grid>
        <br />
        <br />
          <Grid container spacing={8} alignItems="flex-end" justify="center">
          <Grid item>
          <Button size="large" variant="contained" color="primary" justify="center" component={Link} to="/Dashboard" className={classes.button}>
        Login
         </Button>
          </Grid>
        </Grid>
        <br />
         <Grid container spacing={8} alignItems="flex-end" justify="center">
          <Grid item>
         <Typography className={classes.pos} color="textSecondary">
            Belum Punya akun?
           <Button color="primary" component={Link} to="/Register">
        Registrasi
      </Button>
          </Typography>
       </Grid>
        </Grid>
        </CardContent>
        <br />
      </Card>
        </Grid>
        <Grid item xs>3
        </Grid>
      </Grid>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleCard);