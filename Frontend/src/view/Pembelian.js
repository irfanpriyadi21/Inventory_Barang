import React from 'react';
import PropTypes from 'prop-types';
import Header from "../component/Header";
import Card from '@material-ui/core/Card';
import List from "../component/List";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import Button from '@material-ui/core/Button';

const columns = [
  {
   name: "Nama Supplyer",
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
    name: "Jumlah",
    options: {
    filter: true,
    sort: false,
   }
  },  
  {
   name: "Harga",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
    name: "Tanggal Transaksi",
    options: {
     filter: true,
     sort: false,
    }
   },
 ]; 
 const data = [
  ["Toko Bersama", "SmartWatch", "8","Rp 8000000","21-08-2018"],
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
        <Button variant="contained" color="primary" className={classes.button}>
        Tambah
      </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
        Hapus
      </Button>
        <MUIDataTable 
             title={"Pembelian"} 
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