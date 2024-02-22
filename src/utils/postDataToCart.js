import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../auth/firebaseConfig";

export const postDataToCart = async (userId, itemId, itemCart, price) => {
  try {
    const dataUserRef = doc(db, "users", userId);
    const cartRef = collection(dataUserRef, "cart");
    const querySnapshot = await getDocs(cartRef);
    const cart = querySnapshot.docs.find((doc) => doc.id === itemCart.id);
    if (cart) {
      const { quantity, total } = cart.data();
      await updateDoc(doc(cartRef, itemId), { ...itemCart, quantity: quantity + 1, total: total + price });
    } else {
      await setDoc(doc(cartRef, itemId), { ...itemCart, quantity: 1, total: price });
    }
  } catch (err) {
    console.log(err.message);
  }
};
