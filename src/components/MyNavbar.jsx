import { useState } from "react";
import MyModal from "./MyModal";
import { Button, Input } from "antd";
import CartSection from "../pages/cartSection";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { getSearchValue } from "../store/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import MyCard from "./MyCard";

const navbarContent = [
  { label: "Home", href: "/", logo: "" },
  { label: "Menu", href: "/menu", logo: "" },
  { label: "About As", href: "/", logo: "" },
  { label: "Contact As", href: "/", logo: "" },
];

export default function MyNavbar() {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { search } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleShowMenu = () => {
    setIsMenuShow(!isMenuShow);
  };

  const handleChangeSearch = (e) => {
    dispatch(getSearchValue(e.target.value));
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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
            <li key={i} className="font-medium hover:text-primary-color active:text-primary-color">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <Button className="button-antd text-lg" onClick={showDrawer}>
            <FaShoppingCart />
          </Button>
          <CartSection open={open} onClose={onClose} />
          <Button onClick={showModal} className="button-antd text-lg">
            <FaSearch />
          </Button>
          <MyModal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            modalBody={
              <div className="input-search">
                <Input placeholder="cari produk" prefix={<FaSearch />} onChange={handleChangeSearch} />
                <div className="w-full"></div>
                <div className="grid grid-cols-2 md:grid-cols-3 mt-6 gap-2">
                  {search.map((res) => (
                    <MyCard key={res.id} cardImage={res.poster} cardTitle={res.title} id={res.id} price={res.price} rating={res.rating.rate} cardIcon={false} />
                  ))}
                </div>
              </div>
            }
          />
          <div onClick={handleShowMenu} className="w-[28px] h-[20px] flex flex-col justify-between items-center md:hidden">
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
            <li key={i} onClick={handleShowMenu}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
