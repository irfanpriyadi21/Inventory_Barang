import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from "react-router-dom";

export default class FormDialog extends React.Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
       > 
          <DialogTitle id="form-dialog-title">Registrasi</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Silahkan Masukan Data yang Sesuai !
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Username"
              type="text"
              fullWidth
            />
               <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
             <TextField
              margin="dense"
              id="password"
              label="Re-Password"
              type="password"
              fullWidth
            />
             <TextField
              margin="dense"
              id="fullname"
              label="Full Name"
              type="text" 
              fullWidth
            />    
            <TextField
              margin="dense"
              id="photo"
              type="file"
              fullWidth
            />
          </DialogContentText>
           </DialogContent>
          <DialogActions>
          <Button color="primary" component={Link} to="/">
              Cancel 
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Simpan
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
   }
  }
                                                                                                                                                                                          