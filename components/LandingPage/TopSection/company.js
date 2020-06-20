import React from "react";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
  mainMenu: {
    color: "white",
    margin: "20px",
    fontWeight: "300",
    fontSize: "20px",
  },
  root: {
    width: "100%",
    maxWidth: "60ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function Company() {
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
          aria-owns={open ? "products" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <span style={{ color: "white" }}>Company</span>
        </span>
        <Popover
          id="company"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <React.Fragment>
            <div>
              {" "}
              <List className={classes.root}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img src="/career.svg" width="80px" height="80px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Careers"
                    secondary={
                      <React.Fragment>
                        {"An updated list of opportunities to join our team "}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img src="/leadeship.svg" width="80px" height="80px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Leadership"
                    secondary={
                      <React.Fragment>
                        {
                          "We've been in this game  since 2001. here's a glimpse  into our seasoned  C-suite and bored "
                        }
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img src="/customers.svg" width="80px" height="80px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Customers"
                    secondary={
                      <React.Fragment>
                        {
                          "From the blue chip enterprises you know to the high-growth startups yo soon will"
                        }
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img src="/partners.svg" width="80px" height="80px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Partners"
                    secondary={
                      <React.Fragment>
                        {
                          "Pivotal, Dell Boomi, SAP and many others. We believe innovation takes collabrations"
                        }
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img src="/events.png" width="80px" height="80px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Events"
                    secondary={
                      <React.Fragment>
                        {
                          "From roadshowes to industries conferences, here's where we'll be in 2020"
                        }
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img src="/press.svg" width="80px" height="80px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Press Center"
                    secondary={
                      <React.Fragment>
                        {
                          "Your home for Solace press releases, media and analyst mentions, logos and more."
                        }
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img src="/legal.svg" width="80px" height="80px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Legal"
                    secondary={
                      <React.Fragment>
                        {"Your one-stop shop for Solace legal policies."}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </div>
          </React.Fragment>
        </Popover>
      </span>
      <span className={classes.mainMenu}>
        <span style={{ color: "white" }}>Developer</span>
      </span>
      <span className={classes.mainMenu}>
        <span className="clear-button">Get PubSub+ for free</span>
      </span>
    </div>
  );
}
