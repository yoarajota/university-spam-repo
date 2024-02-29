import React, { useState } from 'react';
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import Layout from "./components/Layout";
import Navigation from './components/Navigation';

const usersArr = [
  { id: "1", fullName: "Robin Wieruch" },
  { id: "2", fullName: "Sarah Finnley" },
];

const NoMatch = () => {
  return <p>Não há nada aqui: 404!</p>;
};

const App = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(usersArr);

  const handleRemoveUser = (userId) => {
    setUsers((state) => state.filter((user) => user.id !== userId));
    //Navega para a rota /users
    navigate("/users");
  };

  return <>
    <Navigation />
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users users={users} />}>
            <Route
              path=":userId"
              element={<User onRemoveUser={handleRemoveUser} />}
            />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </nav>
    <main style={{ padding: "1rem 0" }}>
      <Outlet />
    </main>
  </>
}

export default App