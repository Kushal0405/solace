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
    maxWidth: "100ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function Solacewith() {
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
          <span style={{ color: "white" }}>Solace With</span>
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
                    <img src="/sw-1.svg" width="80px" height="80px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Public clouds"
                    secondary={
                      <React.Fragment>
                        <span
                          style={{
                            color: "#20c997",
                            width: "50%",
                            margin: "10px",
                          }}
                        >
                          Microsoft Azure
                        </span>
                        <br></br>
                        <span style={{ color: "#20c997", margin: "10px" }}>
                          Google cloud{" "}
                        </span>
                      </React.Fragment>
                    }
                  />
                  <ListItem style={{ width: "50%" }} alignItems="flex-start">
                    <ListItemAvatar>
                      <img src="/sw-4.png" width="80px" height="80px" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Partners"
                      secondary={
                        <React.Fragment>
                          <span
                            style={{
                              color: "#20c997",
                              margin: "10px",
                              float: "right",
                            }}
                          >
                            SAP
                          </span>
                          <br></br>
                          <span
                            style={{
                              color: "#20c997",
                              margin: "10px",
                              float: "right",
                            }}
                          >
                            ASAPIO
                          </span>
                          <br></br>
                          <span
                            style={{
                              color: "#20c997",
                              margin: "10px",
                              float: "right",
                            }}
                          >
                            Dell Boomi
                          </span>
                          <br></br>
                          <span
                            style={{
                              color: "#20c997",
                              margin: "10px",
                              float: "right",
                            }}
                          >
                            F5 Networks
                          </span>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img src="/sw-2.png" width="80px" height="80px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Platform-As-a-service"
                    secondary={
                      <React.Fragment>
                        <span
                          style={{
                            color: "#20c997",
                            width: "40px",
                            margin: "10px",
                          }}
                        >
                          Vmware
                        </span>
                        <br></br>
                        <span
                          style={{
                            color: "#20c997",
                            width: "40px",
                            margin: "10px",
                          }}
                        >
                          Pivotal
                        </span>
                        <br></br>
                        <span
                          style={{
                            color: "#20c997",
                            width: "40px",
                            margin: "10px",
                          }}
                        >
                          OpenShift
                        </span>
                      </React.Fragment>
                    }
                  />{" "}
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <img src="/sw-5.png" width="80px" height="80px" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Other Technologies"
                      secondary={
                        <React.Fragment>
                          <span
                            style={{
                              color: "#20c997",
                              margin: "10px",
                              float: "right",
                            }}
                          >
                            Apigee
                          </span>
                          <br></br>
                          <span
                            style={{
                              color: "#20c997",
                              margin: "10px",
                              float: "right",
                            }}
                          >
                            Openfin
                          </span>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img src="/sw-3.png" width="80px" height="80px" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Open SOurce"
                    secondary={
                      <React.Fragment>
                        <span
                          style={{
                            color: "#20c997",
                            width: "40px",
                            margin: "10px",
                          }}
                        >
                          Kafka
                        </span>
                        <br></br>
                        <span
                          style={{
                            color: "#20c997",
                            width: "40px",
                            margin: "10px",
                          }}
                        >
                          Spring Framework
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
  );
}
