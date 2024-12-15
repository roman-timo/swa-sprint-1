import React from "react";
import Register from "./Register";
import Login from "./Login";
import * as auth from "../utils/auth.js";

function App() {
  return (
    <div className="page__content">
      <Register onRegister={onRegister} />
      <Login onLogin={onLogin} />
    </div>
  );
}

export default App;
