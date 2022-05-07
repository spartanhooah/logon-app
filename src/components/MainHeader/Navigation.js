import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
// import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  // Another way to get state from the contexxt - the hook
  const ctx = useContext(AuthContext);

  return (
    // One way to get state from the context - the Consumer
    // <AuthContext.Consumer>
    //   {(ctx) => {
    //     return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    // );
    // }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
