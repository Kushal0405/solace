import React from 'react'
import Popover from '@material-ui/core/Popover'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: theme.spacing(1)
  },
  mainMenu: {
    color: 'white',
    margin: '20px',
    fontWeight: '300',
    fontSize: '20px'
  },
  root: {
    width: '100%',
    maxWidth: '70ch',
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  }
}))

export default function Usecases () {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <div>
      <span>
        <span
          className={classes.mainMenu}
          aria-owns={open ? 'products' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >

          <span style={{ color: 'white' }}>Use Cases </span>
        </span>
        <Popover
          id="usecases"
          className={classes.popover}
          classes={{
            paper: classes.paper
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <React.Fragment><div> <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <img style={{ margin: '10px' }} src="/uc-1.png" width="80px" height="80px" />
              </ListItemAvatar>
              <ListItemText
                primary="Industries"
                secondary={
                  <React.Fragment>
                    <span>A few areas where we're changing the game</span>
                    <span>
                      <ul style={{ float: 'left', color: '#20c997', listStyleType: 'none', width: '200px' }}>
                        <li>Aviation</li>
                        <li>FInancial services</li>
                        <li>Governament</li>
                        <li>Retail</li>
                        <li>Connected Car</li>
                      </ul>
                    </span>
                    <span>
                      <ul style={{ float: 'right', color: '#20c997', listStyleType: 'none' }}>
                        <li>Energy</li>
                        <li>Gaming</li>
                        <li>Manufacturing</li>
                        <li>Telecom</li>
                        <li>Transportation/Logistics</li>
                      </ul>
                    </span>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <img style={{ margin: '10px' }} src="/uc-2.png" width="80px" height="80px" />
              </ListItemAvatar>
              <ListItemText
                primary="Environments"
                secondary={
                  <React.Fragment>
                    <span style={{ float: 'left' }}> where and how we're deployed</span>
                    <br></br>
                    <span>
                      <ul style={{ float: 'left', color: '#20c997', listStyleType: 'none', width: '150px' }}>
                        <li>Hybrid Cloud</li>
                        <li>Internet of Things</li>
                        <li>Event Mesh</li>
                        <li>Big Data</li>
                      </ul>
                    </span>
                    <span>
                      <ul style={{ float: 'right', color: '#20c997', listStyleType: 'none' }}>
                        <li>MIcro Services</li>
                        <li>ipaaS</li>
                        <li>PaaS</li>
                        <li>MIddleware</li>
                      </ul>
                    </span>
                  </React.Fragment>
                }
              />
            </ListItem>

          </List>
          </div>
          </React.Fragment>
        </Popover>
      </span>

    </div>
  )
}
