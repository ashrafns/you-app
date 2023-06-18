import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

export default function Insert() {
  // constructor(props){
  //     super(props);
  //     this.onChangeFirstname = this.onChangeFirstname.bind(this);
  //     this.onChangePassword = this.onChangePassword.bind(this);
  //     this.onSubmit = this.onSubmit.bind(this);

  //   this.state = {
  //     first_name:'',
  //     password:''
  //   }}

  //   onChangeFirstname(e){
  //       this.setState({
  //           first_name:e.target.value
  //       })
  //   }
  //   onChangePassword(e) {
  //       this.setState({
  //           password:e.target.value
  //       })
  //   }
  //   this.onSubmit(e){
  //     e.preventDefault();

  //     const obj = {
  //         first_name:this.state.first_name,
  //         password:this.state.password
  //       };
  //       console.log(obj)
  //   }
  const [insData, setInsData] = useState({
    first_name: "",
    password: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      first_name: insData.first_name,
      password: insData.password,
    };
    axios
      .post("http://localhost/react/you-app/insert.php", sendData)
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <h1>Welcome To Insert Component!!</h1>
      <hr style={{ width: "100%" }} />

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
          value={insData.first_name}
          onChange={(e) => {
            setInsData({ ...insData, first_name: e.target.value });
          }}
          label="User Name"
          variant="outlined"
        />
        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          value={insData.password}
          onChange={(e) => {
            setInsData({ ...insData, password: e.target.value });
          }}
          label="Password"
          variant="outlined"
        />
        <Button
          style={{ width: "100%" }}
          onClick={submitForm}
          type="Submit"
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </>
  );
}
