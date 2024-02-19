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

export const getDataUser = createAsyncThunk("data/getDataUser", async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    await new Promise((resolve) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          unsubscribe();
          resolve();
        }
      });
    });

    const user = auth.currentUser;
    if (!user) {
      throw new Error("anda belum login");
    }
    const userDocRef = doc(db, "users", user.uid);
    const userDocSnapshot = await getDoc(userDocRef);
    if (!userDocSnapshot.exists()) {
      throw new Error("data tidak di temukan");
    }
    return [{ id: userDocSnapshot.id, ...userDocSnapshot.data() }];
  } catch (err) {
    throw err;
  }
});

export const getCartProducts = createAsyncThunk("cartData/getCartProducts", async () => {
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
    return cartProducts;
  } catch (err) {
    console.log(err);
    throw err;
  }
});
