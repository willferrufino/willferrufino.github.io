import React from "react";
import "./styles/App.scss";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <div class="flex-container wrapper">
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </main>
  );
}

export default App;
