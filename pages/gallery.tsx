// Import dependencies
import Header from "@/components/blocks/Header";
import Jordan from "../images/jordan.jpg";
import Image from "next/image";

import { Gallery as GalleryGrid } from "react-grid-gallery";
import CountdownBanner from "@/components/blocks/CountdownBanner";

const images = [
  {
    "src": "/images/gallery/1.jpg",
    "width": 2048,
    "height": 1536
  },
  {
    "src": "/images/gallery/10.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/11.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/12.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/13.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/14.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/15.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/16.jpg",
    "width": 2048,
    "height": 1536
  },
  {
    "src": "/images/gallery/17.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/18.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/19.jpg",
    "width": 2048,
    "height": 1536
  },
  {
    "src": "/images/gallery/2.jpg",
    "width": 2048,
    "height": 1536
  },
  {
    "src": "/images/gallery/20.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/21.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/22.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/23.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/3.jpg",
    "width": 2048,
    "height": 1536
  },
  {
    "src": "/images/gallery/4.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/5.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/6.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/7.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/8.jpg",
    "width": 1536,
    "height": 2048
  },
  {
    "src": "/images/gallery/9.jpg",
    "width": 1536,
    "height": 2048
  }
]

// Define the page component
const Gallery = () => {
  return (
    <div className="bg-primary-500">
      <CountdownBanner date={new Date("2024-06-29")} />
      <Header />
      <div className="z-10 h-full text-center w-full inset-y-16 p-6">
        <h1 className="text-6xl font-bold tracking-tighter  md:text-7xl text-[#FCD34D]">
          Gorstonbury Festival 2023!
        </h1>
        <p className="text-[#F3F4F6] md:text-xl mt-8">
          Check out some of the amazing photos from last year's festival.
        </p>
      </div>
      <GalleryGrid images={images} enableImageSelection={false} />
    </div>
  );
};

export default Gallery;
