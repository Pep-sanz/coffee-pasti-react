import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../auth/firebaseConfig";
import { updateCart } from "../store/slice/cartSlice";

export const getDataCarts = async (userId, dispatch) => {
  try {
    const userCartRef = collection(db, "users", userId, "cart");
    onSnapshot(userCartRef, (snapshot) => {
      const cartProducts = snapshot.docs.map((doc) => doc.data());
      dispatch(updateCart(cartProducts));
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
