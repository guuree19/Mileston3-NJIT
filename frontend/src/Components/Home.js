import React from "react";
import "./Home.css";
import Nav from "./Nav";

function Home() {
  console.log("Home component is rendering!"); // Move the console.log statement here

  return (
    <div className="home-container">
      <Nav />
      <p>
        Hello, welcome <b>I'm Abdulaziz,</b> just finished NJIT bootcamp.
      </p>
    </div>
  );
}

export default Home;
