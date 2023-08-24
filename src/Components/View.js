// import { style } from "@mui/system";
import axios from "axios";
import React from "react";

class View extends React.Component {
  state = {
    contacts: [],
  };
  componentDidMount() {
    const url = "http://localhost/react/you-app/view.php";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ contacts: data });
        console.log(this.state.contacts);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <h1>Welcome To Data Base from React Component</h1>
        <hr style={{width:"100%"}}/>
        <table>
          <thead>
            <tr>
            <th>Register Date</th>
              <th>ID</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => (
              <tr key={index}>
                <td style={{width:"250px"}}>{contact.registerDate}</td>
                <td style={{width:"50px"}}>{contact.userID}</td>
                <td style={{width:"150px"}}>{contact.firstName}</td>
                <td style={{width:"150px"}}>{contact.lastName}</td>
                <td style={{width:"300px"}}>{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default View;
