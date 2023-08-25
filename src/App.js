import React from "react";
import "./App.css";
import UnderlineLink from "./nav";
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
// import CreateUser from './Components/CreateUser';
// import EditUser from './Components/EditUser';
// import ListUser from './Components/ListUser';


function App() {
  return (
    <div className="App">
      <UnderlineLink className="header" />
      {/* <header className="App-header">
      </header> */}
      {/* <h5>React CRUD operations using PHP API and MySQL</h5>

<BrowserRouter>
  <nav>
    <ul>
      <li>
        <Link to="/">List Users</Link>
      </li>
      <li>
        <Link to="user/create">Create User</Link>
      </li>
    </ul>
  </nav>
  <Routes>
    <Route index element={<ListUser />} />
    <Route path="user/create" element={<CreateUser />} />
    <Route path="user/:id/edit" element={<EditUser />} />
  </Routes>
</BrowserRouter> */}
    </div>
  );
}

export default App;
