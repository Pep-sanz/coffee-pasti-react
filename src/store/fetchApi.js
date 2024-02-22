import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../auth/firebaseConfig";

export const productsApi = createAsyncThunk("products/productsApi", async (_, dataRejected) => {
  try {
    const response = await getDocs(collection(db, "menu"));
    const products = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return products;
  } catch (err) {
    return dataRejected(err);
  }
});

export const getDataUser = createAsyncThunk("data/getDataUser", async (userId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const userDocRef = doc(db, "users", userId);
    const userDocSnapshot = await getDoc(userDocRef);
    if (!userDocSnapshot.exists()) {
      throw new Error("data tidak di temukan");
    }
    return { id: userDocSnapshot.id, ...userDocSnapshot.data() };
  } catch (err) {
    throw err;
  }
});

// await new Promise((resolve) => {
//   const unsubscribe = auth.onAuthStateChanged((user) => {
//     if (user) {
//       unsubscribe();
//       resolve(user);
//     }
//   });
// });

// const user = auth.currentUser;
// if (!user) {
//   throw new Error("anda belum login");
// }
// const querySnapshot = await getDocs(userCartRef);
// const cartProducts = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
