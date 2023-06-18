/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/material/Box";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Insert from "./Components/Insert";
import Edit from "./Components/Edit";
import View from "./Components/View";

const preventDefault = (event) => event.preventDefault();

export default function UnderlineLink() {
  return (
    <Box
      sx={{
        backgroundColor: "#4ed9ec",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        typography: "body1",
        "& > :not(style) + :not(style)": {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Router>
        <Link to="/" underline="hover">
          Home
        </Link>
        <Link to="/view" underline="hover">
          View
        </Link>
        <Link to="/insert" underline="hover">
          insert
        </Link>
        <Link to="/edit" underline="hover">
          Edit
        </Link>
        <hr style={{width:"100%"}}/>
        <Routes>
          <Route exact path="/insert" Component={Insert} />
          <Route path="/edit" Component={Edit} />
          <Route path="/view" Component={View} />
        </Routes>
      </Router>
    </Box>
  );
}
