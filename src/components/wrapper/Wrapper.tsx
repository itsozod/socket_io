import { ReactNode } from "react";
import Header from "../header/Header";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="bg-[#202020] h-[100vh]">
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Wrapper;
