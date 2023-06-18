import * as React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

import axios from "axios";


export default function BasicTextFields() {
  const [data, setData] = useState({
    first_name: "",
    password: "",
  });

    // console.log(data);
  const submitForm = (e) => {
    // alert("hi")
    e.preventDefault();

    const sendData = {
      first_name: data.first_name,
      password: data.password,
    };
    console.log(sendData);
    axios.get("http://localhost:3000/config.php").then((resalt) => {
      console.log(resalt.data);
      if (resalt.data.Status === "Invalid") {
        alert(" Invalid User");
      } else {
      }
    });
  };

  return (
    <Box
      component="form"
      onSubmit={submitForm}
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "grid",
        marginTop: "50px",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        style={{ width: "100%" }}
        id="outlined-basic"
        value={data.first_name}
        onChange={(e) => {
          setData({ ...data, first_name: e.target.value });
        }}
        label="User Name"
        variant="outlined"
      />
      <TextField
        style={{ width: "100%" }}
        id="outlined-basic"
        value={data.password}
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
        label="Password"
        variant="outlined"
      />
      <Button style={{ width: "100%" }} type="Submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}
