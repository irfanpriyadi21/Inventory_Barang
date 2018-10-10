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
   name: "Kode Produk",
   options: {
    filter: true,
    sort: true,
   }
  },      
  {
   name: "Nama Produk",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "Satuan",
   options: {
    filter: true,
    sort: false,
   }
  },  
  {
   name: "Harga Jual",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
    name: "Stok Produk  ",
    options: {
     filter: true,
     sort: false,
    }
   },
 ];
 
 const data = [
  ["P0001", "Laptop", "pcs", "Rp 4000000","10"],
  ["P0002", "Notebook", "pcs", "Rp 2000000","9"],
  ["P0003", "Handphone", "pcs", "Rp 1500000","20"],
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
        <Button variant="contained" color="primary" className={classes.button} component={Link} to="/Iproduk">
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
             title={"Produk"} 
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