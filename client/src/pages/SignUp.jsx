import React from "react";
import { Link } from "react-router-dom";
import { Button, Label } from "flowbite-react";
import { TextInput } from "flowbite-react";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      {/* left */}
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:item-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            {/*when page minizum logo become small*/}
            <span className="px-1 py-2 bg-gradient-to-r from-indigo-500 via-blue-900 to-red-500 rounded-lg text-white">
              Wolf
            </span>
            Coder
          </Link>
          <p className="text-sm mt-5">
            Welcome to WolfCode, your gateway to mastering coding and honing
            your skills. Dive into the world of programming with us and unlock
            your full potential.
          </p>
        </div>

        {/* right */}

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="text" placeholder="batman@company.com" id="email" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
              </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Already have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
