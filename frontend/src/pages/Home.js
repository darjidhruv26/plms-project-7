import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Link to="auth/signup?mode=instructor">Register</Link>
      <Link to="auth/signin">Log</Link>
    </>
  );
};

export default HomePage;
