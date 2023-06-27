import React from "react";
import "./styles.css";
import Carousel from "./Carousel";

const App = () => {
  const images = [
    "https://www.mistay.in/travel-blog/content/images/size/w2000/2020/06/cover-10.jpg",
    "https://www.jaypeehotels.com/blog/wp-content/uploads/2021/07/taj-mahal-agra-india-2022-09-20-00-15-53-utc.jpg",
    "https://www.nativeplanet.com/img/2017/09/14-1505384737-2.jpg"
    // Add more image URLs as needed
  ];

  return (
    <div>
      <h2>Image Carousel</h2>
      <Carousel images={images} />
    </div>
  );
};

export default App;
