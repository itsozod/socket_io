import { Link } from "react-router-dom";
import EmailIcon from "../../assets/icons/EmailIcon";
import PasswordIcon from "../../assets/icons/PasswordIcon";

import { Button, Input } from "@nextui-org/react";
const Login = () => {
  return (
    <>
      <div className="bg-[#202020] h-[100vh]">
        <div className="flex justify-center items-center flex-col h-[100vh] g-10">
          <div className="w-[100%] max-w-[300px] p-5 rounded-md border border-red-500">
            <div className="flex items-center flex-col gap-2">
              <h1 className="text-[#f4f4f4] text-3xl">ChitChat</h1>
              <p className="text-[#7B7B7B]">Please Sign In to your account</p>
            </div>

            <form>
              <div className="flex flex-col gap-10 m-3">
                <Input
                  startContent={<EmailIcon />}
                  isClearable={true}
                  type="email"
                  classNames={{
                    inputWrapper: ["bg-[#292929]"],
                  }}
                  placeholder="Enter Your Email"
                />

                <Input
                  startContent={<PasswordIcon />}
                  classNames={{
                    inputWrapper: ["bg-[#292929]"],
                  }}
                  placeholder="Enter Your password"
                  type="password"
                />
                <Button className="bg-[red] text-[white]">Login</Button>
              </div>
            </form>
            <div className="flex items-center justify-center gap-1">
              <div className="text-white">Don't have an account?</div>
              <Link to={"/signup"} className="text-[#D71E1E]">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
