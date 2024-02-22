import { useDispatch, useSelector } from "react-redux";
import { Drawer, Button, Card, Flex } from "antd";
import { FaTrash, FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { deleteProductCart } from "../utils/deleteProductCart";
import MyCard from "../components/MyCard";
import { getDataCarts } from "../utils/getDataCarts";

// eslint-disable-next-line react/prop-types
export default function CartSection({ open, onClose }) {
  const dispatch = useDispatch();
  // const { currentUser } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);

  // const handleDeleteProduct = (id) => {
  //   // deleteProductCart(currentUser.id, id);
  // };

  // useEffect(() => {
  //   dispatch(getDataCarts(currentUser.id));
  // }, [dispatch]);

  return (
    <>
      <Drawer title="Cart" onClose={onClose} open={open}>
        {cart?.map((item) => (
          <MyCard
            key={item.id}
            cardImage={item.poster}
            cardTitle={item.title}
            cardIcon={false}
            price={item.total}
            rating={item.rating.rate}
            count={
              <div className="flex justify-end items-center gap-2">
                <Button className="!static !p-1 button-antd !text-slate-900">
                  <FaMinus />
                </Button>
                <span>{item.quantity}</span>
                <Button className="!static !p-1 button-antd !text-slate-900">
                  <FaPlus />
                </Button>
              </div>
            }
            imageStyle="!w-60 !h-full !rounded-l-[5px] !rounded-r-none !flex"
            className="!flex !w-full !h-[150px]"
          />
        ))}
      </Drawer>
    </>
  );
}
