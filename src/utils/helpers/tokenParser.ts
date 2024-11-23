import { jwtDecode, JwtPayload } from "jwt-decode";
import { useToken } from "../../pages/login/store";
interface CustomJwtPayload extends JwtPayload {
  id: number;
  username: string;
}

export const tokenParser = () => {
  const token = useToken.getState().token;
  const decoded = jwtDecode<CustomJwtPayload>(token!);
  return {
    id: decoded.id,
    username: decoded?.username,
  };
};
