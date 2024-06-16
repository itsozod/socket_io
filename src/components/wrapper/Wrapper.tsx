import { ReactNode } from "react";
import Header from "../header/Header";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Wrapper;
