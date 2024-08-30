"use client";
import React, { useState } from "react";

interface CarouselItem {
  src: string;
  alt: string;
  caption: string;
}

const carouselItems: CarouselItem[] = [
  {
    src: "/assets/images/wood1.jpg",
    alt: "Slide 1",
    caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    src: "/assets/images/wood1.jpg",
    alt: "Slide 2",
    caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    src: "/assets/images/wood1.jpg",
    alt: "Slide 3",
    caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full relative">
            <img
              alt={item.alt}
              className="w-full h-full object-cover"
              src={item.src}
            />
            <div className="absolute inset-0 flex items-center justify-start p-4 sm:p-8 md:p-12">
              <div className="text-white  p-4 sm:p-6 max-w-md mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-justify">
                  {item.caption}
                </h2>
                <button className="bg-[#A1B986] hover:bg-[#5E8C52] text-white font-semibold py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 hidden md:block"
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 hidden md:block"
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
