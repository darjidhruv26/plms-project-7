import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Link to="auth/signup?mode=instructor">Register</Link>
      <Link to="auth/signin">Login</Link>
    </>
  );
};

export default HomePage;
