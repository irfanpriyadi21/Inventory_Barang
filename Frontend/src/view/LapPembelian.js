import React from 'react';
import PropTypes from 'prop-types';
import Header from "../component/Header";
import Card from '@material-ui/core/Card';
import List from "../component/List";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Note from '@material-ui/icons/Note';
import TextField from '@material-ui/core/TextField';

 const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
      },
  card: {
    minWidth: 345,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
      },
  media: {
    width: 60,
    height: 45,
  },
});
const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  
function Dashboard(props) {
  const { classes } = props;
    return (
      <div className={classes.root} style={{ backgroundColor: "#b6b7ba", width: "100%", height: "640px"}}>
       <Header />
       <br />
       <br />
       <br />
       <br />
       <Grid container spacing={16}>
       <Grid item xs={1}>
        </Grid>
        <Grid item xs={3}>
        <Card>
        <List />
        </Card>
        </Grid>
        <Grid item xs={7}>
        <br />
        <br />
        <br />  
        <Card>
        <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
           </Paper>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={11}>
        <Typography variant="subheading" component="h2">
          Tanggal Pembelian
        </Typography>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={3}>
          <TextField
              autoFocus
              margin="dense"
              id="name"
              type="date"
              fullWidth
            />
        </Grid>
        <Grid item xs={1}>
        <Typography>
          S/D
        </Typography>
        </Grid>
        <Grid item xs={3}>
        <TextField
              margin="dense"
              id="name"
              type="date"
              fullWidth
            />
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
        <Grid item xs={2}>
        <MuiThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.button}>
        <Note />
          Cetak
        </Button>
        </MuiThemeProvider>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
      </Grid>
        </Card>
        </Grid>
        <Grid item xs={1}>
          <Paper></Paper>
        </Grid>
      </Grid>
      </div>

    );
  }
  Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Dashboard)