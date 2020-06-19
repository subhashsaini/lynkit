import React, { useState } from "react";
import "../style.css";
import { Login } from "./Login";
import { Home } from "./Home";

function Dashboard(props) {
  let [person] = useState(JSON.parse(localStorage.getItem("person")));

  return <>{person ? <Home username={person.username} /> : <Login />}</>;
}

export { Dashboard };
