import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../auth/firebaseConfig";

const baseUrl = "https://coffee-pasti-default-rtdb.firebaseio.com";

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

export const postDataToCart = createAsyncThunk("data/postDataToCart", async (product) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`${baseUrl}/cart.json`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error("Gagal menambahkan produk ke cart");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});
