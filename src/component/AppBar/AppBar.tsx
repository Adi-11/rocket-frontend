import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  createStyles,
  alpha,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import React from "react";
import "./AppBar.css";
import { AppBar } from "@material-ui/core";
import gif from "../../assets/logoGif.gif";

interface AppBarProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
      padding: theme.spacing(1.5),
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
  })
);

const getBrowser = (): string => {
  let windowType = window as any;
  const isChrome: boolean =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  return isChrome
    ? "https://chrome.google.com/webstore/detail/competitive-companion/cjnmckjndlpiamhfimnnjmnckgghkjbl"
    : "(https://addons.mozilla.org/en-US/firefox/addon/competitive-companion/";
};

export const AppBarHeader: React.FC<AppBarProps> = ({}) => {
  const classes = useStyles();
  const props = {
    position: "static",
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar {...props}>
          <img src={gif} style={{ backgroundSize: "cover" }} height={70} />
          <Typography className={classes.title} variant="h5" noWrap>
            ROCKETCP
          </Typography>
          <div className={classes.search}>
            <a className={classes.title} href={getBrowser()} target="_blank">
              Get the Chrome Extension
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
