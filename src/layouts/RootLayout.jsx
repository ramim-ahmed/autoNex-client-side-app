import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import TopBar from "@/components/TopBar";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div>
      <TopBar />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
