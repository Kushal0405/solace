import React, { Component } from 'react'
import { Container , Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


export default function Footer () {


  const useStyles = makeStyles((theme) => ({
    list:{
      listStyleType:'none',
      color:'white',
      margin:'40px'
    },
    bottom:{
      
      color:'white',
      
    }
  }));
  const classes = useStyles();
     
    return (
      <React.Fragment>
        <div style={{background:'black'}}>
              <Container>
                <Grid  container
                       direction="row"
                       justify="space-evenly"
                       alignItems="center">
                  <Grid item md={4}>
                      <ul className={classes.list}>
                            <li>Products</li>
                            <li>PubSub+ Platform</li>
                            <li>PrPubSub+ Event Brokeroducts</li>
                            <li>PubSub+ Event Broker: Software</li>
                            <li>PubSub+ Event Broker: Appliance</li>
                            <li>PubSub+ Event Broker: Cloud</li>
                            <li>PubSub+ Event Portal</li>
                      </ul>
                  </Grid>
                  <Grid item md={2}>
                       <ul className={classes.list}>
                            <li>Compay</li>
                            <li>Careers</li>
                            <li>Leadership</li>
                            <li> Customers</li>
                            <li>Partners</li>
                            <li>Events</li>
                            <li>Legal</li>
                      </ul>
                  </Grid>
                  <Grid item md={2}>
                        <ul className={classes.list}>
                            <li>Developers</li>
                            <li>Docs</li>
                            <li>Blog</li>
                            <li> Community</li>
                            <li>Support</li>
                            <li>Contract</li>
                            <li>Log In</li>
                      </ul>
                  </Grid>
                  <Grid item md={4}>
                      
                            <img src="https://cdn.solace.com/wp-content/themes/orbit-media/resources/images/solace-logo-white.png" width="150" height="50"/><br></br>
                            <span className={classes.bottom}>Newsletter Signup</span><br></br>
                            <span className={classes.bottom}>Join 3,000 others receiving product updates + insights into the event-driven future.</span>
                            <span className={classes.bottom}> <TextField id="outlined-basic" size="small" borderRadius={20} variant="outlined" /></span>
                          Support
                          Contract
                            Log Ingit
                      
                  </Grid>
                </Grid>
              </Container>
        </div>
      </React.Fragment>
    )
  
}
