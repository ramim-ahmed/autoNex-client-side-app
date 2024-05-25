import { GoArrowRight } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import Rating from "react-rating";
export default function Product() {
  const data = {
    image:
      "https://wpbingosite.com/wordpress/tunepain/wp-content/uploads/2018/10/Image-16.jpg",
    title: "AIR INTAKE PUMP (GENERAL ELECTRIC AIP-911-1)",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quas reiciendis mollitia numquam labore sit enim distinctio assumenda suscipit ducimus.",
    category: "Headlights & Lighting",
    price: 1100,
    rating: 4.5,
    review: [],
  };
  return (
    <div className="flex items-center border p-2 space-x-5 rounded-md">
      <div>
        <img className="w-[250px]" src={data.image} alt="" />
      </div>
      <div className="space-y-2">
        <div className="space-y-2">
          <h1 className="font-semibold">{data.title}</h1>
          <div>
            <Rating
              emptySymbol={
                <IoIosStarOutline className="w-5 h-5 text-gray-500" />
              }
              fullSymbol={<FaStar className="w-5 h-5 text-orange-400" />}
              fractions={2}
              initialRating={4.5}
            />
          </div>
          <p className="font-bold">${data.price}</p>
        </div>
        <div>
          <button className="outline-none text-sm flex items-center space-x-2 border-b-2 border-themeColor font-semibold ">
            <span>View Products</span>
            <GoArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
