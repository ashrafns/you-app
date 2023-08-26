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
  const [inputs, setInputs] = useState({});

  const submitForm = (e) => {
    e.preventDefault();
    // const sendData = {
    //   first_name: inputs.first_name,
    //   password: inputs.password,
    // };
    // console.log(sendData)

    axios.post('http://localhost/react/you-app/insert.php', inputs)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
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
          value={inputs.firstName}
          onChange={(e) => {
            setInputs({ ...inputs, firstName: e.target.value });
          }}
          label="User Name"
          variant="outlined"
        />
        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          value={inputs.password}
          onChange={(e) => {
            setInputs({ ...inputs, password: e.target.value });
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
