import Product from "./Product";
import { Button } from "./ui/button";

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-3 pt-20">
      <div>
        <h1 className="text-2xl font-semibold text-center">Latest Products</h1>
      </div>
      <div className="w-full flex space-x-5 mt-10">
        <div
          style={{
            backgroundImage:
              "url(https://wpbingosite.com/wordpress/tunepain/wp-content/uploads/2024/02/back-1.jpg)",
          }}
          className="w-1/4 bg-no-repeat bg-center bg-cover flex justify-center items-center"
        >
          <div className="text-center space-y-4 p-6">
            <h1 className="text-white text-3xl font-bold">SAVE UP TO $25</h1>
            <p className="text-white">The Only Discount Festival Of The Year</p>
            <Button className="bg-themeColor w-44 rounded-3xl">See More</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 w-3/4 gap-6">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <div className="pt-10 flex justify-center">
        <Button className="w-52 bg-themeColor">All Products</Button>
      </div>
    </div>
  );
}
