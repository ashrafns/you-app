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
      });
  }
  render() {
    return (
      <>
        <h1>Welcome To View Component!!</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index)=>(
              <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.mail}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default View;
