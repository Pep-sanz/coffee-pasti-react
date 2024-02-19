import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { postDataToCart, productsApi } from "../store/fetchApi";
import { setCategory } from "../store/slice/productSlice";
// import { addToCart } from "../store/slice/cartSlice";
import numeral from "numeral";
import MyCard from "../components/MyCard";
import MyNavbar from "../components/MyNavbar";

const kategoriMenu = ["All Menu", "EspressoBased", "Iced Coffees", "Blended Drinks", "Flavored Coffees"];

export default function MenuSection() {
  const { products, headerCategory, filterProducts, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  numeral.locale("id");

  useEffect(() => {
    dispatch(productsApi());
  }, [dispatch]);

  const handleClickCategory = (item) => {
    dispatch(setCategory(item));
  };

  const handleAddToCart = (event, id) => {
    event.stopPropagation();
    products.filter((res) => {
      if (res.id === id) {
        dispatch(postDataToCart(res));
        console.log(res.rating.rate);
      }
    });
  };

  const renderProducts = filterProducts.length > 0 ? filterProducts : products;

  if (status === "loading") {
    return <div className="">loading</div>;
  }

  if (status === "rejected") {
    return <div>error: {error}</div>;
  }

  return (
    <section className="menu-section overflow-hidden">
      <MyNavbar />
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
                <li key={i} className="" onClick={() => handleClickCategory(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-full mt-10 ">
          {/* Header Category */}
          <h5 className="text-start w-full">{headerCategory}</h5>
          {/* Menu Content */}
          <div className=" grid grid-cols-2 gap-2 text-sm md:grid-cols-3 lg:grid-cols-4">
            {renderProducts.map((item) => (
              <MyCard key={item.id} cardImage={item.poster} cardTitle={item.title} cardIcon={true} price={item.price} rating={item.rating.rate} handleAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
