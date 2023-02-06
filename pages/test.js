import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    { src: '/chat1.PNG', url: 'https://example1.com' },
    { src: '/chat2.PNG', url: 'https://example2.com' },
    { src: '/chat3.PNG', url: 'https://example3.com' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img
        src={images[index].src}
        onClick={() => window.open(images[index].url)}
      />
    </div>
  );
};

export default ImageSlider;
