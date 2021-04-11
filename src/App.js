import React from "react";
// import './App.css';
// import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Sell from "./components/Sell";
import Rent from "./components/Rent";
import Dream from "./components/Dream";
import Provided from "./components/Provided";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Banner />
      <About />
      <Sell />
      <Rent />
      <Dream />
      <Provided />
      <Footer />
    </div>
  );
}

export default App;
