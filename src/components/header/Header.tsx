import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useToken } from "../../pages/login/store";
import { useProfile } from "./store";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { useEffect } from "react";
interface CustomJwtPayload extends JwtPayload {
  id: number;
  username: string;
}

const Header = () => {
  const { logOut, token } = useToken();
  const { username, setName, setId } = useProfile();

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode<CustomJwtPayload>(token);
      setId(decoded?.id);
      setName(decoded?.username);
    }
  }, [setName, token, setId]);
  return (
    <>
      <Navbar className="bg-[#D71E1E] text-white">
        <NavbarBrand>
          <p
            style={{
              fontFamily: "Playwrite IE, cursive",
              fontOpticalSizing: "auto",
              fontWeight: "bolder",
              fontStyle: "normal",
            }}
            className="font-bold text-inherit text-2xl"
          >
            next chat
          </p>
        </NavbarBrand>

        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                size="sm"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{username}</p>
              </DropdownItem>
              <DropdownItem
                onClick={() => logOut()}
                key="logout"
                color="danger"
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Header;
