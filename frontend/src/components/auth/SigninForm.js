import React from "react";
import { Form } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { loginUser } from "../../services/apiAuth";

import classes from "./SigninForm.module.css";
import Button from "../ui/Button";

const SigninForm = () => {
  return (
    <div
      id={classes.form}
      className="grid grid-cols-2 grid-rows-6 w-[100vw] h-screen"
    >
      <div className="flex items-center space-x-4 h-fit mt-5 ml-20 row-span-1">
        <img src={logo} alt="Coursefinity" className="w-12 h-12" />
        <span className="font-black capitalize text-xl">coursefinity</span>
      </div>
      <div className="bg-black relative flex items-center row-span-6">
        <h1
          className="absolute capitalize font-extrabold text-[5rem] px-20"
          id={classes["main-heading"]}
        >
          The Best
          <br />
          digital
          <br />
          platform
          <br />
          learning
          <br />
          experience
        </h1>
      </div>
      <div className="flex flex-col m-auto w-[24rem] row-span-5">
        <h2 className="font-bold text-[1.5rem] leading-[1.8rem]">
          Welcome back
        </h2>
        <Form method="post">
          <input
            type="email"
            name="email"
            className="w-full bg-[#f7f7f7] rounded-[0.4rem] p-[0.8rem] mt-[1.2rem]"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            className="w-full bg-[#f7f7f7] rounded-[0.4rem] p-[0.8rem] mt-[1.2rem]"
            placeholder="Password"
            required
          />
          <Button type="submit" className="mt-[2rem]">
            Log-in
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SigninForm;

export async function action({ request }) {
  const data = await request.formData();
  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await loginUser(loginData);

  return response;
}
