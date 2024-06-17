import { Button, Input } from "@nextui-org/react";
import EmailIcon from "../../assets/icons/EmailIcon";
import PasswordIcon from "../../assets/icons/PasswordIcon";
import UserIcon from "../../assets/icons/UserIcon";
import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signUp = async () => {
    try {
      const res = await fetch("https://d00f63aca8474f91.mokky.dev/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signUp();
  };
  return (
    <>
      <div className="bg-[#202020] h-[100vh]">
        <div className="flex justify-center items-center flex-col h-[100vh] g-10">
          <div className="w-[100%] max-w-[300px] p-5 rounded-md border border-red-500">
            <div className="flex items-center flex-col gap-2">
              <h1 className="text-[#f4f4f4] text-3xl">ChitChat</h1>
              <p className="text-[#7B7B7B]">Please Sign In to your account</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-10 m-3">
                <Input
                  startContent={<UserIcon />}
                  isClearable={true}
                  name="username"
                  value={formData.username}
                  type="text"
                  classNames={{
                    inputWrapper: ["bg-[#292929]"],
                  }}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                />
                <Input
                  startContent={<EmailIcon />}
                  isClearable={true}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
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
                  name="password"
                  value={formData.password}
                  placeholder="Enter Your password"
                  type="password"
                  onChange={handleChange}
                />
                <Button type="submit" className="bg-[red] text-[white]">
                  Create Account
                </Button>
              </div>
            </form>
            <div className="flex items-center justify-center gap-1">
              <div className="text-white">Already have an account?</div>
              <Link to={"/signin"} className="text-[#D71E1E]">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
