import MyNavbar from "../components/MyNavbar";
import { Button } from "antd";

export default function HeroSection() {
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
          <Button className="btn-buy-now">Beli Sekarang</Button>
        </div>
      </section>
    </>
  );
}
