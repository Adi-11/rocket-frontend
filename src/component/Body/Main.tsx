import {
  makeStyles,
  Theme,
  createStyles,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Paper,
  Divider,
  InputBase,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Main.css";
import IconButton from "@material-ui/core/IconButton";

import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      color: "white",
    },
    formControl: {
      margin: theme.spacing(3),
    },

    PaperRoot: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
      background: theme.palette.grey[900],
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color: "white",
    },
    iconButton: {
      padding: 10,
      color: "white",
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

interface MainProps {}

export const languages = ["C", "C++", "Java", "Python", "Javascript"];

export const Main: React.FC<MainProps> = ({}) => {
  const classes = useStyles();
  const [checkedState, setCheckedState] = useState(
    new Array(languages.length).fill(false)
  );

  const handleOnChange = (position: any) => {
    const newArray = new Array(languages.length).fill(false);
    const updatedCheckedState = newArray.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  function browseResult(e: any) {
    const fileselector = e.target;
    console.log(fileselector.value);
  }
  return (
    <div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel
            component="legend"
            color={"secondary"}
            style={{ color: "white" }}
          >
            Select Default Language
          </FormLabel>
          <FormGroup>
            {languages.map((name: string, idx: number) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedState[idx]}
                      onChange={() => handleOnChange(idx)}
                      name={name}
                    />
                  }
                  label={name}
                  key={idx}
                />
              );
            })}
          </FormGroup>
        </FormControl>
      </div>
      <div style={{ width: "40%", margin: 20 }}>
        <Paper component="form" className={classes.PaperRoot}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <FolderIcon color="inherit" />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Enter directory path"
            inputProps={{ "aria-label": "Enter directory path" }}
          />
        </Paper>
      </div>
    </div>
  );
};
