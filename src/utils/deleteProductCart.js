import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../auth/firebaseConfig";

export const deleteProductCart = async (userId, productId) => {
  try {
    const userCartRef = doc(db, "users", userId, "cart", productId);
    await deleteDoc(userCartRef);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
