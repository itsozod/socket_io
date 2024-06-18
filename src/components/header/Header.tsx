import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useToken } from "../../pages/login/store";
import { Link } from "react-router-dom";
import { useProfile } from "./store";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { useEffect } from "react";
interface CustomJwtPayload extends JwtPayload {
  username: string;
}

const Header = () => {
  const { logOut, token } = useToken();
  const { username, setName } = useProfile();

  useEffect(() => {
    const decoded = jwtDecode<CustomJwtPayload>(token as string);
    setName(decoded?.username as string);
  }, []);
  return (
    <>
      <Navbar className="bg-[#D71E1E] text-white">
        <NavbarBrand>
          <p className="font-bold text-inherit">ChatChat</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link to={"/chat"}>Chat</Link>
          </NavbarItem>
        </NavbarContent>

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
