import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Shoping from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import PowerIcon from '@material-ui/icons/PowerSettingsNew';
import Account from '@material-ui/icons/AccountBox';
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20 ,
  },
};
function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
          <Button color="inherit" size="large"><Shoping/>SIPERANG</Button> 
          <Button color="inherit" size="large">Bantuan</Button> 
          <Button color="inherit" size="large">Panduan</Button>
          <Button color="inherit" size="large">Pengaturan</Button>  
          </Typography>
          
         
          <Button color="inherit" size="small"><Account/>User</Button> 
          <Button color="inherit" size="small" component={Link} to="/"><PowerIcon/>Logout</Button> 
        </Toolbar>
      </AppBar>
    </div>
  );
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};  
export default withStyles(styles)(Header);
