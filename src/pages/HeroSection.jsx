import { useEffect, useState } from "react";
import MyNavbar from "../components/MyNavbar";
import { Button } from "antd";
import { auth } from "../auth/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <section className="w-full h-screen hero-section px-6">
        <MyNavbar />
        <div className="flex flex-col justify-center gap-6 w-full max-w-[500px] h-full text-[1.5rem] lg:text-[2.5rem] lg:ms-20">
          <div className="">
            <p>Kopi yang Pasti, Kehangatan yang Pasti. Selamat Datang di</p>
            <p className="text-[2rem] lg:text-[3.5rem] mt-1 font-semibold">
              <span className="text-primary-color">Coffee</span> <span>Pasti</span>
            </p>
          </div>
          <Link to={"/menu"}>
            <Button className="btn-buy-now">Beli Sekarang</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
