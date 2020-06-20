import React from 'react';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
  mainMenu: {
    color: 'white',
    margin: '20px',
    fontWeight: '300',
    fontSize: '20px'
  },
  root: {
    width: '100%',
    maxWidth: '60ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Products() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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

        <span style={{ color: 'white' }}>Products</span>
      </span>
      <Popover
        id="products"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <React.Fragment><div> <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img style={{margin:'10px'}}  src="/products-s1.svg" width="80px" height="80px" />
        </ListItemAvatar>
        <ListItemText
          primary="PubSub+ Platform"
          secondary={
            <React.Fragment>
              
              {"The complete event straming and management platform for the real-time enterprise "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img style={{margin:'10px'}}  src="/products-s2.svg" width="80px" height="80px" />
        </ListItemAvatar>
        <ListItemText
          primary="PubSub+ Event Broker"
          secondary={
            <React.Fragment>
              <span>
                <p>Build an event mesh to stream events and information across cloud, on-premises and IoT environments.</p>
                <span style={{color:'#20c997'}}>PubSub+ Event Broker: Software <br></br>PubSub+ Event Broker: Appliance <br></br>PubSub+ Event Broker: Cloud</span>
              </span>
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <img style={{margin:'10px'}}  src="/products-s3.svg" width="80px" height="80px" />
        </ListItemAvatar>
        <ListItemText
          primary="PubSub+ Event Portal"
          secondary={
            <React.Fragment>
            <span>Discover the benefits of having a single place to design, create, discover, share, secure and manage all events within your ecosystem.</span>
              
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
  );
}
