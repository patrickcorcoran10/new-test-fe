import React from "react";
import ImageSlider from "../Components/ImageSlider";

 import Image1 from '../assets/1.jpg';
import Image2 from '../assets/2.jpg';
 import Image3 from '../assets/3.jpeg';


const Homepage = () => {
  const slides = [
    { src: Image1, title: "" },
    { src: Image2, title: "" },
    { src: Image3, title: "" }
  
  ];

  const containerStyles = {
    width: "500px",
    height: "279px",
    margin: "0 auto",
  };

  return (
    <div>
      <h1 id="home">Welcome to Calpal</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Homepage;