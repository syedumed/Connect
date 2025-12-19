import React from "react";
import { assets } from "../assets/assets";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="px-40 pt-10">
      <img
        src={assets.bgImage}
        alt=""
        className="absolute left-0 top-0 h-full w-full -z-1 object-cover "
      />
      {/* Logo */}
      <div className="flex items-center gap-1 h-10 text-3xl">
        <img src={assets.logo} alt="" className="h-10 invert sepia" />
        <p className="text-blue-800">Connect.</p>
      </div>
      <div className="grid grid-cols-[50%_50%] grid-rows-[500px] mt-5">
        <div className="mt-25">
          <h1 className="text-5xl text-blue-950 font-bold">
            Share Your Journey, One Project at a Time
          </h1>
          <h1 className="text-3xl text-blue-950">Upload. Inspire. Grow.</h1>
        </div>
        <div className="flex justify-center">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Login;
