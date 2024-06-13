// Import dependencies
import Header from "@/components/blocks/Header";

import CountdownBanner from "@/components/blocks/CountdownBanner";
import Footer from "@/components/blocks/Footer";

// Define the page component
const Gallery = () => {
  return (
    <div className="bg-primary-500 min-h-[100vh]">
      <CountdownBanner date={new Date("2024-06-29")} />
      <Header />
      <div className="z-10 h-full text-center w-full inset-y-16 p-6 min-h-[70vh] flex flex-col justify-center">
        <h1 className="text-6xl font-bold tracking-tighter  md:text-7xl text-[#FCD34D]">
          Nope not a real page. This is an illusion that it's a bigger website
        </h1>
        <p className="text-[#F3F4F6] md:text-xl mt-8">
          They worked me too hard. Send help.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
