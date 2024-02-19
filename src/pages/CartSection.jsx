import { useDispatch, useSelector } from "react-redux";
import { Drawer} from "antd";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function CartSection({ open, onClose }) {
  const { products } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  // const handleIncrement = (id) => {
  //   products.filter((res) => {
  //     if (res.id === id) {
  //       dispatch(addToCart(res));
  //     }
  //   });
  // };

  return (
    <>
      <Drawer title="Cart" onClose={onClose} open={open}>
        {/* {cart?.map((item, i) => (
          <Card key={i} cover={<img src={item.poster} alt="products" className="!w-44 !h-full !rounded-l-[5px] !rounded-r-none" />} className="!flex">
            <div className="flex text-lg flex-col gap-3 md:gap-6 mb-3 w-full ">
              <div className="flex justify-between">
                <p>{item.title}</p>
                <FaTrash />
              </div>
              <div className="w-full flex flex-col gap-3 text-base ">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(item.total)}
              </div>
            </div>
            <div className="text-xl flex justify-between items-center w-full">
              <div className="flex text-xs sm:text-sm">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className={index < item.rating.rate ? "text-yellow-400" : "text-gray-400"} />
                ))}
                <span>/{item.rating.count}</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <Button className="!static !p-1 button-antd !text-slate-900">
                  <FaMinus />
                </Button>
                <span>{item.quantity}</span>
                <Button className="!static !p-1 button-antd !text-slate-900" onClick={() => handleIncrement(item.id)}>
                  <FaPlus />
                </Button>
              </div>
            </div>
          </Card>
        ))} */}
      </Drawer>
    </>
  );
}
