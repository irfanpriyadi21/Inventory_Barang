import React from 'react';
import PropTypes from 'prop-types';
import Header from "../component/Header";
import Card from '@material-ui/core/Card';
import List from "../component/List";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Redeeem from '@material-ui/icons/Redeem';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


 const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    width: 60,
    height: 45,
  },
};
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
        <Grid container spacing={24}>
        <Grid item xs>
        <Card className={classes.card}>
        <div style={{ backgroundColor: "#390f68"}}>
      <CardActionArea>
      <CardContent>
         <img alt="img" src={require('../img/images/redeem2.png')} 
         className={classes.media}
         />
          <Typography gutterBottom variant="subheading">
            Produk
          </Typography>
        </CardContent>
      </CardActionArea>
      </div>
    </Card>
        </Grid>
        <Grid item xs>
        <Card className={classes.card}>
        <div style={{ backgroundColor: "#b20606"}}>
      <CardActionArea>
      <CardContent>
      <img alt="img" src={require('../img/images/shop.png')} 
         className={classes.media}/>
          <Typography gutterBottom variant="subheading">
            Transaksi pembelian
          </Typography>
        </CardContent>
      </CardActionArea>
      </div>
   </Card>
        </Grid>
        <Grid item xs>
          <Paper> </Paper>
          </Grid>
          </Grid>
          <Grid container spacing={24}>
        <Grid item xs>
        <Card className={classes.card}>
        <div style={{ backgroundColor: "#3207b2"}}>
      <CardActionArea>
      <CardContent>
      <img alt="img" src={require('../img/images/person.png')} 
         className={classes.media}/>
          <Typography gutterBottom variant="subheading">
            Konsumen
          </Typography>
        </CardContent>
      </CardActionArea>
      </div>
</Card>
        </Grid>
        <Grid item xs>
        <Card className={classes.card}>
        <div style={{ backgroundColor: "#b20606"}}>
      <CardActionArea>
      <CardContent>
      <img alt="img" src={require('../img/images/shop.png')} 
         className={classes.media}/>
          <Typography gutterBottom variant="subheading" component="h2">
            Transaksi Penjualan
          </Typography>
        </CardContent>
      </CardActionArea>
      </div>
     </Card>
        </Grid>
        <Grid item xs>
        <Typography gutterBottom variant="subheading" component="h2">
         <Redeeem/>Produk Penjualan Terlaris
          </Typography>
          </Grid>
          </Grid>
          <Grid container spacing={24}>
        <Grid item xs>
        <Card className={classes.card}>
        <div style={{ backgroundColor: "#3207b2"}}>
      <CardActionArea>
      <CardContent>
      <img alt="img" src={require('../img/images/person.png')} 
         className={classes.media}/>
          <Typography gutterBottom variant="subheading">
            Supplyer
          </Typography>
        </CardContent>
      </CardActionArea>
      </div>
      </Card>
        </Grid>
        <Grid item xs>
        <Card className={classes.card}>
        <div style={{ backgroundColor: "#00a354"}}>
      <CardActionArea>
      <CardContent>
      <img alt="img" src={require('../img/images/note.png')} 
         className={classes.media}/>
          <Typography gutterBottom variant="subheading">
            Laporan
          </Typography>
        </CardContent>
      </CardActionArea>
      </div>
     </Card>
        </Grid>
        <Grid item xs>
          </Grid>
          </Grid>
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
  
  export default withStyles(styles)(Dashboard)