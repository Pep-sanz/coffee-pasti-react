import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MyModal from "./MyModal";
import { useDisclosure, Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import MyDrawer from "./MyDrawer";

const navbarContent = [
  { label: "Home", href: "/", logo: "" },
  { label: "Menu", href: "/", logo: "" },
  { label: "About As", href: "/", logo: "" },
  { label: "Contact As", href: "/", logo: "" },
];

export default function MyNavbar() {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const { isOpen: isCartOpen, onOpen: onCartOpen, onClose: onCartClose } = useDisclosure();
  const { isOpen: isSearchOpen, onOpen: onSearchOpen, onClose: onSearchClose } = useDisclosure();

  const handleclick = () => {
    setIsMenuShow(!isMenuShow);
  };

  return (
    <>
      <nav className="my-navbar">
        <div className="logo text-2xl sm:text-3xl">
          <a href="#">
            <span>Coffee</span> Pasti
          </a>
        </div>
        <ul className=" hidden md:flex justify-between items-center w-1/2 transition-all duration-300 ease-in-out ">
          {navbarContent.map((item, i) => (
            <li key={i} onClick={handleclick} className="font-medium hover:text-primary-color active:text-primary-color">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center text-xl">
          <Button className="button-chakra" onClick={onCartOpen}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Button>
          <MyDrawer isOpen={isCartOpen} onClose={onCartClose} drawerBody={<div>cart section</div>} />
          <Button onClick={onSearchOpen} className="button-chakra">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
          <MyModal
            isOpen={isSearchOpen}
            onClose={onSearchClose}
            modalBody={
              <InputGroup className="input-search">
                <InputLeftElement>
                  <FontAwesomeIcon icon={faSearch} />
                </InputLeftElement>
                <Input placeholder="cari produk" />
              </InputGroup>
            }
          />
          <div onClick={handleclick} className="w-[28px] h-[20px] flex flex-col justify-between items-center md:hidden">
            <span className={`block w-full h-1 bg-white rounded transition-all duration-300 ease-in-out ${isMenuShow ? "origin-top-left bg-black rotate-45 translate-x-[1px] -translate-y-[1px]" : ""}`} />
            <span className={`block w-full h-1 bg-white rounded transition-all duration-300 ease-in-out ${isMenuShow ? "opacity-0" : ""}`} />
            <span className={`block w-full h-1 bg-white rounded transition-all duration-300 ease-in-out ${isMenuShow ? "origin-top-left bg-black -rotate-45 -translate-x-[1px] translate-y-[2px] " : ""}`} />
          </div>
        </div>
        <ul
          className=" nav-responsive transition-all duration-300 ease-in-out "
          style={{
            left: isMenuShow ? 0 : "100%",
          }}
        >
          {navbarContent.map((item, i) => (
            <li key={i} onClick={handleclick}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
