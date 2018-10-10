  import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Home from '@material-ui/icons/Home';
import Redeeem from '@material-ui/icons/Redeem';
import Perm from '@material-ui/icons/PermIdentity';
import ShopCart from '@material-ui/icons/ShoppingCart';
import Note from '@material-ui/icons/Note';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class SelectedListItem extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem>
          <Typography variant="headline" component="h2">Menu Utama</Typography>
          </ListItem>
          </List>
        <List component="nav">
        <Divider />
          <ListItem
            button component={Link} to="/Dashboard"
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <Divider />
          <ListItem
            button component={Link} to="/Produk"
          >
               <ListItemIcon>
              <Redeeem />
            </ListItemIcon>
            <ListItemText primary="Produk" />
          </ListItem>
        <Divider />
          <ListItem
            button component={Link} to="/konsumen"
          >
            <ListItemIcon>
              <Perm />
            </ListItemIcon>
            <ListItemText primary="Konsumen" />
          </ListItem>
          <Divider />
          <ListItem
            button component={Link} to="/suplyer"
          >
            <ListItemIcon>
              <Perm />
            </ListItemIcon>
            <ListItemText primary="Supplier" />
          </ListItem>
          <Divider />
          <ListItem
            button component={Link} to="/Pembelian"
          >
            <ListItemIcon>
              <ShopCart />
            </ListItemIcon>
            <ListItemText primary="Transaksi Pembelian" />
          </ListItem>
          <Divider />
          <ListItem
            button component={Link} to="/Penjualan"
          >
            <ListItemIcon>
              <ShopCart />
            </ListItemIcon>
            <ListItemText primary="Transaksi Penjualan" />
          </ListItem>
        <Divider />
          <ListItem
            button component={Link} to="/LapPembelian"
          >
            <ListItemIcon>
              <Note />
            </ListItemIcon>
            <ListItemText primary="Lap.Transaksi Pembelian" />
          </ListItem>
          <Divider />
          <ListItem
            button component={Link} to="/LapPenjualan"
          >
            <ListItemIcon>
              <Note />
            </ListItemIcon>
            <ListItemText primary="Lap.Transaksi Penjualan" />
          </ListItem>
        </List>
      </div>
    );
  }
}

SelectedListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedListItem);