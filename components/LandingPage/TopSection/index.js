import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Popover } from '@material-ui/core';
import {TiDownload} from 'react-icons/ti'
import {FiSearch} from 'react-icons/fi'
import Popmenu from './popover'

export default function TopSection () {
      const textH1 = {
          fontFamily :'open-sans',
          color:'#00C895',
          fontSize:'55px',
          fontWeight:'700',
          marginBottom:'40px'
      }
      const textH3 = {
        fontFamily :'open-sans',
        color:'white',
        fontSize:'32px',
        fontWeight:'600',
        marginBottom:'40px'
    }
    const link={
        background:'#00C895', 
        textAlign:'center', 
        fontWeight:'500',
        fontSize:'18px',
        color:'white',
        padding:'10px', 
        margin:'30px',
        marginLeft:'130px'
    }
    const covid = {
        background:'white',
        text:'disabled',
        padding:'20px',
        marginBottom:'50px'
    }
    const image ={
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWo-X5pXxLSNqOGtPpngJz6tjKuIu0YlhRSq3t2mnsGgPr6PaM&usqp=CAU")',
        backgroundRepeat:'noRepeat',
        backgroundSize:'cover',
        paddingBottom:'250px'
    }

    
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        marginRight:'40px'
      },
      subMenu:{
        color:'white',
        margin:'20px'
      },
      mainMenu:{
        color:'white',
        fontWeight:'300',
        fontSize:'20px'
      }
    }));
    const classes = useStyles();
    
    return (
      <React.Fragment>
          <div style={image}>
            
              <Container>
          <Grid direction="row"
                justify="space-around"
                alignItems="baseline"
            >
            <div className={classes.root}>
                  <AppBar position="static" color='transparent'>
                    <Toolbar>
              
                          <Typography  className={classes.title}>
                           </Typography>
                       <span className={classes.subMenu} color="inherit">Docs</span>
                       <span className={classes.subMenu} color="inherit">Resources</span>
                       <span className={classes.subMenu} color="inherit">Blog</span>
                       <span className={classes.subMenu} color="inherit">Learn</span>
                       <span className={classes.subMenu} color="inherit">Downloads</span>
                       <span className={classes.subMenu} color="inherit">Support</span>
                       <span className={classes.subMenu} color="inherit">Contact</span>
                       <span className={classes.subMenu} color="inherit">Login</span>
                       <span className={classes.subMenu} color="inherit"><FiSearch/></span>
                    </Toolbar>
                   </AppBar>
              </div>
              <div className={classes.root}>
                  <AppBar position="static" color='transparent'>
                    <Toolbar>
                      
                          <Typography  className={classes.title}>
                              <img style={{marginLeft:'-30px'}} src="https://cdn.solace.com/wp-content/uploads/2019/10/solace_logo_green.svg" width="200" height="70"/>
                           </Typography>
                       <span className={classes.mainMenu} color="inherit"><Popmenu/></span>
        
                    </Toolbar>
                   </AppBar>
              </div>
             </Grid>
             </Container>
              <Container>
                        <div style={covid}>
                        Regarding COVID-19: Here’s what we’re doing to ensure the support and welfare of our employees, customers and partners.   Learn More
                        </div>
              </Container>
                <Container maxwidth="md">
                <Grid container spacing={10} >
                        <Grid item  md={6}>
                            <h1 style={textH1}>Building the digital backbone for real-time enterprises.</h1>
                            <h3 style={textH3}>Everything you need to get your business events streaming on an event mesh, plus what you need to discover, manage and govern them.</h3>
                            <p style={{fontSize:'18px', color:'white'}}> <TiDownload  style={{color:'00C895'}}/>Download <u>FREE</u> production-ready software</p>
                        </Grid>
                        <Grid item md={6}>
                            <img src="https://play.vidyard.com/gJ2pSxSS9Ad3jpxaT2Q7Ly.jpg" width="550" height="300"/>
                            <Box width={2/4} borderRadius={25} variant='contained' style={link}>Request a event mesh demo</Box>                      
                        </Grid>
                </Grid>
                </Container>
        </div>
      </React.Fragment>
    )
  
}
