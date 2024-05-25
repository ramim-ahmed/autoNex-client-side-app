import { IoTimeOutline } from "react-icons/io5";
export default function TopBar() {
  return (
    <div className="border-b border-opacity-10 bg-themeColor text-white">
      <div className=" max-w-6xl mx-auto px-3 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <IoTimeOutline className="w-5 h-5" />
          <p className="text-sm font-medium">MON - SAT: 8.00 AM - 17.30 PM</p>
        </div>
        <p className="text-sm font-medium hidden lg:block">
          15% EVERY PRODUCT WE HAVE A GREAT OFFER FOR YOU. SHOP NOW!
        </p>
        <p className="text-sm font-medium">SIGN IN / REGISTER</p>
      </div>
    </div>
  );
}
