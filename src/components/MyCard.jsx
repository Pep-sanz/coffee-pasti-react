import { Card, Rate } from "antd";
import numeral from "numeral";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function MyCard({ cardTitle, cardImage, id, price, rating, cardIcon, handleAddToCart }) {
  return (
    <>
      <Card cover={<img src={cardImage} alt="products" />}>
        <div className="flex flex-col justify-center items-center gap-3 md:gap-6 mb-3 ">
          <p>{cardTitle}</p>
          <div className="w-full flex flex-col gap-3 ">{numeral(price).format("$0,0")}</div>
        </div>
        <div className="text-xl flex justify-between w-full">
          <div className="flex sm:text-sm">
            <Rate disabled allowHalf defaultValue={rating} className="!text-xs" />
          </div>
          <div className={`flex justify-center gap-3 ${cardIcon ? "block" : "hidden"}`}>
            <FaShoppingCart onClick={(e) => handleAddToCart(e, id)} />
            <FaRegHeart />
          </div>
        </div>
      </Card>
    </>
  );
}
