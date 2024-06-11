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
          Gorstonbury Festival 2024 Ticket Details!
        </h1>
        <p className="text-[#F3F4F6] md:text-xl mt-8">
          Read and remember the important details of this event!
        </p>
      </div>

      <div className="p-8 pt-0">
        <h2 className="text-secondary-500 text-4xl font-bold">
          Ticket Information
        </h2>
        <p className="text-white my-2">
          All tickets have now been dispatched and delivered to all successful
          applicants. Please note, having a ticket does NOT grant you access to
          the festival. As stated above, you will enter a series of queue
          checkpoints before you can enter the venue – failure to complete a
          checkpoint, failure to enter.
        </p>
        <p className="text-white my-2">
          The ticket in your bundle must be brought to the event on the day.
        </p>
      </div>

      <div className="p-8 pt-0">
        <h2 className="text-secondary-500 text-4xl font-bold">VIPs</h2>
        <p className="text-white my-2">
          This year, as a series of fantastic applications were received, a
          handful of VIP guests have been selected for their efforts – VIPs will
          receive an upgraded package on the day of the event. You will be
          informed if you have been selected in due course.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
