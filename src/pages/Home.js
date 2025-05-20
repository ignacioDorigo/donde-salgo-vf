import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MainHome from "../components/MainHome/MainHome";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainHome />
      <Footer />
    </div>
  );
}
