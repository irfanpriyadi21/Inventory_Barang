import React from 'react';
import Button from '@material-ui/core/Button';
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from '@material-ui/core/FormControl'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from "@material-ui/core/InputLabel";
import Input from '@material-ui/core/Input';
import { Redirect } from 'react-router';
import {Link} from "react-router-dom";
import axios from 'axios';
import APPCONFIG from '../../component/config';

const styles = theme => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
  }
}
);

class Supplier extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      KodeSup:'',
      NamaSup:'',
      AlamatSup:'',
      TelpSup:''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value })
   }
  handleClick = event => {
    
    event.preventDefault()
    const URL = APPCONFIG.ApiUrl + 'post/supplier'

    axios.post(URL,{
    KodeSup: this.state.createKodeSup,
    NamaSup: this.state.createNamaSup,
    AlamatSup: this.state.createAlamatSup,
    TelpSup: this.state.createTelpSup
    })
    .then(() => this.setState({ redirect: true }))
    .catch(() => alert('Terjadi kesalahan Silahkan Coba Lagi atau hubungi administrator !!'));
  }  
 
  render() {
    const { classes } = this.props
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/supplyer' />
  }
    return (
      <div className={classes.root}>
        <Dialog
          open={this.setState.open=true}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" align="center">Input Supplier</DialogTitle>
          <br />
          <DialogContent>
            <DialogContentText>
            <FormControl fullWidth className={classes}>
            <InputLabel htmlFor="KodeSup">Kode Supplier</InputLabel>
            <Input
              autoFocus
              id="KodeSup"
              type="text"
              fullWidth
              value= {this.state.createKodeSup}
              onChange={this.handleChange('createKodeSup')}
            />
            </FormControl>
            <FormControl fullWidth className={classes}>
            <InputLabel htmlFor="NamaSup">Nama Supplier</InputLabel>
             <Input
              id="NamaSup"
              type="text"
              fullWidth
              value= {this.state.createNamaSup}
              onChange={this.handleChange('createNamaSup')}
            />
            </FormControl>
            <FormControl fullWidth className={classes}>
            <InputLabel htmlFor="AlamatSup">Alamat Supplier</InputLabel>
             <Input
              id="AlamatSup"
              type="text"
              fullWidth
              value= {this.state.createAlamatSup}
              onChange={this.handleChange('createAlamatSup')}
            />
            </FormControl>
            <FormControl fullWidth className={classes}>
            <InputLabel htmlFor="KontakSup">Kontak Supplier</InputLabel>
             <Input
              id="KontakSup"
              label="Kontak"
              type="number"
              fullWidth
              value= {this.state.createTelpSup}
              onChange={this.handleChange('createTelpSup')}
            />
            </FormControl>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="secondary" component={Link} to="/Produk">
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={this.handleClick}>
              Simpan
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(Supplier)
