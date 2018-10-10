import React from 'react';
import Button from '@material-ui/core/Button';
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl'
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

class Produk extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      KodeBrg:'',
      NamaBrg:'',
      SatuanBrg:'',
      HargaJual:'',
      StokBrg:''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value })
   }
  handleClick = event => {
    
    event.preventDefault()
    const URL = APPCONFIG.ApiUrl + 'post/produk'

    axios.post(URL,{
    KodeBrg: this.state.createKodeBrg,
    NamaBrg: this.state.createNamaBrg,
    SatuanBrg: this.state.createSatuanBrg,
    HargaJual: this.state.createHargaJual,
    StokBrg: this.state.createStokBrng
    })
    .then(() => this.setState({ redirect: true }))
    .catch(() => alert('Terjadi kesalahan Silahkan Coba Lagi atau hubungi administrator !!'));
  }  
 
  render() {
    const { classes } = this.props
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/Produk' />
  }
    return (
      <div className={classes.root}>
        <Dialog
          open={this.setState.open=true}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" align="center">Input Produk</DialogTitle>
          <br />
          <DialogContent>
            <DialogContentText>
            <FormControl fullWidth className={classes}>
            <InputLabel htmlFor="KodeBarang">Kode Produk</InputLabel>
            <Input
              autoFocus
              id="KodeBarang"
              type="text"
              fullWidth
              value= {this.state.createKodeBrg}
              onChange={this.handleChange('createKodeBrg')}
            />
            </FormControl>
            <FormControl fullWidth className={classes}>
            <InputLabel htmlFor="NamaBarang">Nama Produk</InputLabel>
             <Input
              id="NamaBarang"
              type="text"
              fullWidth
              value= {this.state.createNamaBrg}
              onChange={this.handleChange('createNamaBrg')}
            />
            </FormControl>
            <FormControl fullWidth className={classes}>
             <InputLabel htmlFor="SatuanBarang">Satuan Produk</InputLabel>
             <Input
              id="SatuanBarang"
              type="text"
              fullWidth
              value= {this.state.createSatuanBrg}
              onChange={this.handleChange('createSatuanBrg')}
            />
            </FormControl>
            <FormControl fullWidth className={classes}>
             <InputLabel htmlFor="HargaJual">Harga Jual</InputLabel>
             <Input
              id="HargaJual"
              type="number"
              fullWidth
              value= {this.state.createHargaJual}
              onChange={this.handleChange('createHargaJual')}
            />
            </FormControl>
            <FormControl fullWidth className={classes}>
             <InputLabel htmlFor="StokBarang">Stok Produk</InputLabel>
             <Input
              id="StokBarang"
              type="number" 
              fullWidth
              value= {this.state.createStokBrg}
              onChange={this.handleChange('createStokBrg')}
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

export default withStyles(styles)(Produk)