import MyCard from "../components/MyCard";

const kategoriMenu = ["All Menu", "EspressoBased", "Iced Coffees", "Blended Drinks", "Flavored Coffees"];

export default function MenuSection() {
  return (
    <section className="menu-section">
      <div className="header">
        <h5 className="text-[1.5rem]">
          <span>Menu</span> Kami
        </h5>
        <p className="sm:max-w-[70vw]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quas nemo adipisci corporis necessitatibus accusantium aliquam. Molestias enim ducimus accusamus.</p>
      </div>
      <div className="w-full mt-10">
        <div className="category">
          <h5>kategori</h5>
          <div className="overflow-x-auto md:w-full">
            <ul className="flex justify-between items-center w-[700px] md:w-full px-0 sm:px-6 lg:px-10">
              {kategoriMenu.map((item, i) => (
                <li key={i} className="">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 bg-red-500 w-full mt-10 ">
          <h5 className="text-start w-full">All Menu</h5>
          <div className=" grid grid-cols-2 gap-3">
            <MyCard
              cardContent={
                <div>
                  <h5 className="">ini adalah card content</h5>
                </div>
              }
              footerContent={
                <div>
                  <h5>ini adalah footer card</h5>
                </div>
              }
            />
            <MyCard
              cardContent={
                <div>
                  <h5>ini adalah card content</h5>
                </div>
              }
              footerContent={
                <div>
                  <h5>ini adalah footer card</h5>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
