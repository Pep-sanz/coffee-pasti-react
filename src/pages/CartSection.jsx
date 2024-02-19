import { useDispatch, useSelector } from "react-redux";
import { Drawer, Button, Card } from "antd";
import { FaTrash, FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getCartProducts } from "../store/fetchApi";
import { auth, db } from "../auth/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

// eslint-disable-next-line react/prop-types
export default function CartSection({ open, onClose }) {
  const { products } = useSelector((state) => state.products);
  // const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   dispatch(getCartProducts());
  // }, [dispatch]);
  const handleIncrement = (id) => {
    // products.filter((res) => {
    //   if (res.id === id) {
    //     dispatch(addToCart(res));
    //   }
    // });
  };

  const getDataCart = async () => {
    try {
      await new Promise((resolve) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            unsubscribe();
            resolve(user);
          }
        });
      });

      const user = auth.currentUser;
      if (!user) {
        throw new Error("anda belum login");
      }
      const userCartRef = collection(db, "users", user.uid, "cart");
      const querySnapshot = await getDocs(userCartRef);
      const cartProducts = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      if (!querySnapshot.docs.length === 0) {
        throw new Error("gagal memuat data");
      }
      return setCart(cartProducts);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  useEffect(() => {
    getDataCart();
  }, []);

  return (
    <>
      <Drawer title="Cart" onClose={onClose} open={open}>
        {cart?.map((item, i) => (
          <Card key={i} cover={<img src={item.poster} alt="products" className="!w-44 !h-full !rounded-l-[5px] !rounded-r-none" />} className="!flex">
            <div className="flex text-base flex-col gap-3 md:gap-6 mb-3 w-full ">
              <div className="flex justify-between">
                <p>{item.title}</p>
                <FaTrash />
              </div>
              <div className="w-full flex flex-col gap-3 text-base ">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(item.price)}
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
        ))}
      </Drawer>
    </>
  );
}
