// import EmailIcon from "../../assets/icons/EmailIcon";
// import PasswordIcon from "../../assets/icons/PasswordIcon";
import EmailIcon from "../../assets/icons/EmailIcon";
import PasswordIcon from "../../assets/icons/PasswordIcon";
import styles from "./Login.module.css";
import { Button, Input } from "@nextui-org/react";
const Login = () => {
  return (
    <>
      <div className={styles["login_page"]}>
        <div className={styles["login_container"]}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h1
              style={{
                color: "#f4f4f4",
                fontSize: "35px",
              }}
            >
              ChitChat
            </h1>
            <p
              style={{
                color: "#7B7B7B",
              }}
            >
              Please Sign In to your account
            </p>
          </div>

          <div
            style={{
              width: "100%",
              maxWidth: "300px",
            }}
          >
            <form>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  margin: "10px",
                }}
              >
                <Input
                  startContent={<EmailIcon />}
                  isClearable={true}
                  type="email"
                  classNames={{
                    input: "bg-[#292929]",
                    innerWrapper: "bg-[#292929]",
                    inputWrapper: [
                      "shadow-xl",
                      "bg-[#292929]",
                      "dark:bg-[#292929]",
                      "backdrop-blur-xl",
                      "backdrop-saturate-200",
                      "hover:bg-[#292929]",
                      "dark:hover:bg-[#292929]",
                      "group-data-[focus=true]:bg-[#292929]",
                      "dark:group-data-[focus=true]:bg-[#292929]",
                      "!cursor-text",
                    ],
                  }}
                  placeholder="Enter Your Email"
                />

                <Input
                  startContent={<PasswordIcon />}
                  classNames={{
                    input: ["bg-[#292929]"],
                    innerWrapper: "bg-[#292929]",
                    inputWrapper: [
                      "shadow-xl",
                      "bg-[#292929]",
                      "dark:bg-[#292929]",
                      "backdrop-blur-xl",
                      "backdrop-saturate-200",
                      "hover:bg-[#292929]",
                      "dark:hover:bg-[#292929]",
                      "group-data-[focus=true]:bg-[#292929]",
                      "dark:group-data-[focus=true]:bg-[#292929]",
                      "!cursor-text",
                    ],
                  }}
                  placeholder="Enter Your password"
                  type="password"
                />
                <Button className="bg-[red] text-[white]">Login</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
