import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Hero } from "../Pages/Hero";
import Card from "../Pages/Card";

export const Layout = () => {
  return (
    <div>
      <Header />
      {/* <Outlet /> */}
      <Hero />
      <Card />
      <Footer />
    </div>
  );
};
