import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      {!user ? (
        <h1>LOGIN</h1>
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              {/*Sidebar*/}
              <Route path="/rooms/:roomId">
                {/*Chat*/}
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
