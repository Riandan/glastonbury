// Import dependencies
import Header from "@/components/blocks/Header";
import Jordan from "../images/jordan.jpg";
import Image from "next/image";

import { Gallery as GalleryGrid } from "react-grid-gallery";
import CountdownBanner from "@/components/blocks/CountdownBanner";
import ModalImage from "react-modal-image";
import Footer from "@/components/blocks/Footer";

// Define the page component
const Gallery = () => {
  return (
    <div className="bg-primary-500 min-h-[100vh]">
      <CountdownBanner date={new Date("2024-06-29")} />
      <Header />
      <div className="z-10 h-full text-center w-full inset-y-16 p-6">
        <h1 className="text-6xl font-bold tracking-tighter  md:text-7xl text-[#FCD34D]">
          Gorstonbury Festival 2024 Lineup!
        </h1>
        <p className="text-[#F3F4F6] md:text-xl mt-8">
          See below for this years excellent lineup!
        </p>
      </div>
      <div className="p-8 flex justify-center">
        <Image
          src={"/images/poster.png"}
          width={953}
          height={1191}
          alt="Jordan"
          className="w-full h-full object-cover max-w-[1000px]"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
