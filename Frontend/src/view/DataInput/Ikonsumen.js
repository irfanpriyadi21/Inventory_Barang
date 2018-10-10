import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import withStyles from "@material-ui/core/styles/withStyles";
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from "@material-ui/core/InputLabel";
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl'
import {Link} from "react-router-dom";
import { Redirect } from 'react-router'
import axios from 'axios';
import APPCONFIG from '../../component/config';


const styles = theme => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
  }
}
);

class Konsumen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      createKodePlg:'',
      createNamaPlg:'',
      createAlamatPlg:'',
      createTelpPlg:'',
      redirect: false
    }
    this.handleClick = this.handleClick.bind(this)
    }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value })
   }
  handleClick = event => {
    event.preventDefault()
    const URL = APPCONFIG.ApiUrl + 'post/konsumen'
    axios.post(URL,{
    KodePlg: this.state.createKodePlg,
    NamaPlg: this.state.createNamaPlg,
    AlamatPlg: this.state.createAlamatPlg,
    TelpPlg: this.state.createTelpPlg
    })
    .then(() => this.setState({ redirect: true }))
    .catch(() => alert('Terjadi kesalahan Silahkan Coba Lagi atau hubungi administrator !!'));
  }  
 
  render() {
    const { classes } = this.props
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/konsumen' />
  }
    return (
      <div className={classes.root}>
        <Dialog 
          open={this.setState.open=true}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" align="center">Input Konsumen</DialogTitle>
          <br />
          <DialogContent>
            <DialogContentText>
            <FormControl fullWidth className={classes}>
            <InputLabel htmlFor="KodePelanggan">Kode Konsumen</InputLabel>
            <Input
              autoFocus
              id="KodePelanggan"
              fullWidth
              type="text"
              value= {this.state.createKodePlg}
              onChange={this.handleChange('createKodePlg')}
            />
            </FormControl>
            <FormControl fullWidth className={classes}>
             <InputLabel htmlFor="NamaPelanggan">Nama Konsumen</InputLabel>
             <Input
              id="NamaPelanggan"
              fullWidth
              type="text"
              value= {this.state.createNamaPlg}
              onChange={this.handleChange('createNamaPlg')}
            />
            </FormControl>
            <FormControl fullWidth className={classes}>
             <InputLabel htmlFor="AlamatPelanggan">Alamat Konsumen</InputLabel>
             <Input
              id="AlamatPelanggan"
              fullWidth
              type="text"
              value= {this.state.createAlamatPlg}
              onChange={this.handleChange('createAlamatPlg')}
            />
            </FormControl>
            <FormControl fullWidth className={classes}>
             <InputLabel htmlFor="KontakPelanggan">Kontak Konsumen</InputLabel>
             <Input
              id="KontakPelanggan"
              fullWidth
              type="number"
              value= {this.state.createTelpPlg}
              onChange={this.handleChange('createTelpPlg')} 
            />
            </FormControl>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="secondary" component={Link} to="/konsumen">
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={this.handleClick}>
              Simpan
            </Button>
          </DialogActions >
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(Konsumen)
