import React from 'react';
import PropTypes from 'prop-types';
import Header from "../component/Header";
import Card from '@material-ui/core/Card';
import List from "../component/List";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import { Link } from "react-router-dom";

const columns = [
  {
   name: "Kode Konsumen",
    options: {
    filter: true,
    sort: true,
   }
  },      
  {
   name: "Nama Konsumen",
    options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "Alamat",
   options: {
    filter: true,
    sort: false,
   }
  },  
  {
   name: "Kontak",
   options: {
    filter: true,
    sort: false,
   }
  },
 ];
 
 const data = [
  ["K001", "MAMAN", "Ciapus", "0878787874500"],
 ];
 
 const options = {
   filterType: 'checkbox',
 };

 const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  card: {
    maxWidth: 345,
  }, 
  media: {
    width: 50,
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
        <Paper>
        <Button variant="contained" color="primary" className={classes.button} component={Link} to="/Ikonsumen">
           Tambah
        </Button>
      <MuiThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          Ubah
        </Button>
        </MuiThemeProvider>
        <Button variant="contained" color="secondary" className={classes.button}>
        Hapus
      </Button>
        <MUIDataTable 
             title={"Konsumen"} 
             data={data} 
             columns={columns} 
            options={options} 
        />
        </Paper>
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
  
  export default withStyles(styles)(Dashboard);