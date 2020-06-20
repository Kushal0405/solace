import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Popover } from '@material-ui/core';
import { TiDownload } from 'react-icons/ti'
import { FiSearch } from 'react-icons/fi'
import Popmenu from './popover'
import { Tooltip } from '@material-ui/core'
import dynamic from 'next/dynamic'
const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), { ssr: false })

const TopSection = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginRight: '40px'
    }
  }));
  const classes = useStyles();

  return (
    <div className="main-wrapper">
      <ParticlesBackground />
      <div className="container">
        <Grid container spacing={2} justify="center">
          <Grid item md={12}>
            <div className="navbar-1">
              <span className="sub-menu">Docs</span>
              <span className="sub-menu">Resources</span>
              <span className="sub-menu">Blog</span>
              <span className="sub-menu">Learn</span>
              <span className="sub-menu">Downloads</span>
              <span className="sub-menu">Support</span>
              <span className="sub-menu">Contact</span>
              <span className="sub-menu">Login</span>
              <span className="sub-menu"><FiSearch /></span>
            </div>
            <div className="navbar-2">
              <Toolbar>
                <Typography className={classes.title}>
                  <img style={{ marginLeft: '-30px' }} src="https://cdn.solace.com/wp-content/uploads/2019/10/solace_logo_green.svg" width="200" height="70" />
                </Typography>
                <span className="navbar-2-links" color="inherit"><Popmenu /></span>
                <span className="menu-icon">
                  <MenuIcon />
                </span>
              </Toolbar>
            </div>
            <div className="covid-banner">
              <p>Regarding COVID-19: Here’s what we’re doing to ensure the support and welfare of our employees, customers and partners. <span>Learn More</span></p>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="left-side">
              <h1 className="text-1">Building the digital backbone for real-time enterprises.</h1>
              <h3 className="text-2">Everything you need to get your business events streaming on an <Tooltip placement="top" arrow={true} title="Think of it as mordern messaging middleware"><span className="tooltip">event mesh</span></Tooltip>, plus what you need to discover, manage and govern them.</h3>
              <p style={{ fontSize: '18px', color: 'white' }}> <TiDownload style={{ color: '00C895' }} /> Download <u>FREE</u> production-ready software</p>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="right-side">
              <img src="https://play.vidyard.com/gJ2pSxSS9Ad3jpxaT2Q7Ly.jpg" className="intro-image" />
              <div className="button btn-intro">Request an event mesh demo</div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default TopSection
