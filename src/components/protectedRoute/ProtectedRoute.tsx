import { Navigate, Outlet } from "react-router-dom";
import Wrapper from "../wrapper/Wrapper";

const ProtectedRoute = ({ onlyFor }: { onlyFor: boolean | string | null }) => {
  return onlyFor ? (
    <Wrapper>
      <Outlet />
    </Wrapper>
  ) : (
    <Navigate to={"/signin"} replace={true} />
  );
};

export default ProtectedRoute;
