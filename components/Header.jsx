import { FaBook, FaClipboard, FaHome } from "react-icons/fa";
import { SideBar, SideBarItem } from "./header/SideBar";
import Link from "next/link";

const navItems = [
  {
    name: "home",
    path: "/",
    icon: <FaHome size={20} />,
  },
  {
    name: "terms",
    path: "/terms",
    icon: <FaClipboard size={20} />,
  },
  {
    name: "tests",
    path: "/tests",
    icon: <FaBook size={20} />,
  },
];

const Header = () => {
  return (
    <>
      <SideBar>
        {navItems.map((item, index) => {
          return (
            <Link key={index} href={item.path}>
              <SideBarItem key={index} icon={item.icon} text={item.name} />
            </Link>
          );
        })}
      </SideBar>
    </>
  );
};

export default Header;
