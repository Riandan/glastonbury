// Import dependencies
import Header from "@/components/blocks/Header";
import Jordan from "../images/jordan.jpg";
import Image from "next/image";

import { Gallery as GalleryGrid } from "react-grid-gallery";
import CountdownBanner from "@/components/blocks/CountdownBanner";
import ModalImage from "react-modal-image";
import { Button, Modal } from "flowbite-react";
import React from "react";
import Footer from "@/components/blocks/Footer";

const images = [
  {
    src: "/images/gallery/1.jpg",
    width: 2048,
    height: 1536,
  },
  {
    src: "/images/gallery/10.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/11.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/12.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/13.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/14.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/15.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/16.jpg",
    width: 2048,
    height: 1536,
  },
  {
    src: "/images/gallery/17.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/18.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/19.jpg",
    width: 2048,
    height: 1536,
  },
  {
    src: "/images/gallery/2.jpg",
    width: 2048,
    height: 1536,
  },
  {
    src: "/images/gallery/20.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/21.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/22.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/23.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/24.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/25.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/26.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/27.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/28.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/29.jpg",
    width: 3648,
    height: 2736,
  },
  {
    src: "/images/gallery/3.jpg",
    width: 2048,
    height: 1536,
  },
  {
    src: "/images/gallery/30.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/31.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/32.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/33.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/34.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/35.jpg",
    width: 2736,
    height: 3648,
  },
  {
    src: "/images/gallery/36.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/37.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/38.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/39.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/4.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/40.jpg",
    width: 3648,
    height: 2736,
  },
  {
    src: "/images/gallery/41.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/42.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/43.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/44.jpg",
    width: 3648,
    height: 2736,
  },
  {
    src: "/images/gallery/45.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/46.jpg",
    width: 4896,
    height: 6528,
  },
  {
    src: "/images/gallery/47.jpg",
    width: 6528,
    height: 4896,
  },
  {
    src: "/images/gallery/48.jpg",
    width: 6528,
    height: 4896,
  },
  {
    src: "/images/gallery/49.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/5.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/50.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/51.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/52.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/53.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/54.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/55.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/56.jpg",
    width: 2736,
    height: 3648,
  },
  {
    src: "/images/gallery/57.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/58.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/59.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/6.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/60.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/61.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/62.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/63.jpg",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/64.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/65.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/66.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/7.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/8.jpg",
    width: 1536,
    height: 2048,
  },
  {
    src: "/images/gallery/9.jpg",
    width: 1536,
    height: 2048,
  },
];

// Define the page component
const Gallery = () => {
  const [selectedImage, setSelectedImage] = React.useState<{src: string, width: number, height:number} | null>(null);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="bg-primary-500">
      <CountdownBanner date={new Date("2024-06-29")} />
      <Header />
      <Modal
        show={showModal}
        dismissible={true}
        onClose={() => setShowModal(false)}
        className="w-full h-full"
      >
        {/* <div className="bg-white h-full">
          {selectedImage && (
            <Image {...selectedImage} alt="Jordan" className="w-full h-full object-contain" />
          )}
        </div> */}
        <Button className="absolute top-10 right-10" onClick={() => setShowModal(false)}>Close</Button>
        <Modal.Body className="overflow-hidden">

        {selectedImage && (
          <Image {...selectedImage} alt="Jordan" className="w-full h-[95%] object-contain" />
        )}
        </Modal.Body>
        
        {/* <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer> */}
      </Modal>
      <div className="z-10 h-full text-center w-full inset-y-16 p-6">
        <h1 className="text-6xl font-bold tracking-tighter  md:text-7xl text-[#FCD34D]">
          Gorstonbury Festival 2023!
        </h1>
        <p className="text-[#F3F4F6] md:text-xl mt-8">
          Check out some of the amazing photos from last year's festival.
        </p>
      </div>
      <GalleryGrid
        images={images}
        enableImageSelection={false}
        onClick={(index, item) => {
          setShowModal(true);
          setSelectedImage(item);
        }}
      />
      <Footer />
    </div>
  );
};

export default Gallery;
