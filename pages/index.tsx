import Image from "next/image";
import { Inter } from "next/font/google";
import HeroImage from "../images/hero-image.webp";

const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
import CalendarIcon from "@/components/CalendarIcon";
import Header from "@/components/blocks/Header";
import CountdownBanner from "@/components/blocks/CountdownBanner";
import Footer from "@/components/blocks/Footer";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100vh] bg-primary-500">
      <CountdownBanner date={new Date("2024-06-29")} />

      <Header />

      <main className="flex-1">
        <section className="relative w-full overflow-hidden">
          {/* style the image so it does not resize just that the ends get chopped off */}
          <div className="w-full relative sm-[330px] h-[480px]">
            <Image
              src={HeroImage}
              alt={"Hero image"}
              className="object-cover object-center absolute top-0 h-full w-full"
            />
            <div className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-primary-500 to-transparent z-10"></div>
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-primary-500 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-primary-500 opacity-50 z-10"></div>
            <div className="z-10 h-full text-center w-full absolute inset-y-16 p-6">
              <h1 className="text-6xl font-bold tracking-tighter  md:text-7xl text-[#FCD34D]">
                Gorstonbury Festival 2024!
              </h1>
              <p className="text-[#F3F4F6] md:text-xl mt-8">
                Experience the ultimate music festival in the heart of Rainhill,
                UK. Featuring the biggest names in music, arts, and culture.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full -mt-14 md:-mt-14 z-20 relative min-h-[300px] md:min-h-[170px]">
          <div className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-primary-500 to-transparent z-10"></div>
          <div className="absolute w-full z-30">
            <div className="grid center grid-cols-2 md:grid-cols-4 md:max-w-[75%] md:m-auto w-full gap-1">
              <a href="/event">
                <div className=" h-40 w-100 p-2">
                  <div className="flex flex-col items-center justify-center h-full rounded bg-tertiary-700 p-2 text-center">
                    <CalendarIcon className="w-12 h-12 text-[#F3F4F6]" />
                    <h2 className="text-xl font-bold text-[#F3F4F6] mt-4">
                      Event Information
                    </h2>
                  </div>
                </div>
              </a>

              <a href="/ticket-info">
                <div className=" h-40 w-100 p-2">
                  <div className="flex flex-col items-center justify-center h-full rounded bg-tertiary-700 p-2 text-center">
                    <CalendarIcon className="w-12 h-12 text-[#F3F4F6]" />
                    <h2 className="text-xl font-bold text-[#F3F4F6] mt-4">
                      Ticket Information
                    </h2>
                  </div>
                </div>
              </a>
              <a href="/lineup">
                <div className=" h-40 w-100 p-2">
                  <div className="flex flex-col items-center justify-center h-full rounded bg-tertiary-700 p-2 text-center">
                    <CalendarIcon className="w-12 h-12 text-[#F3F4F6]" />
                    <h2 className="text-xl font-bold text-[#F3F4F6] mt-4">
                      2024 Line-Up
                    </h2>
                  </div>
                </div>
              </a>

              <a href="/gallery">
                <div className=" h-40 w-100 p-2">
                  <div className="flex flex-col items-center justify-center h-full rounded bg-tertiary-700 p-2 text-center">
                    <CalendarIcon className="w-12 h-12 text-[#F3F4F6]" />
                    <h2 className="text-xl font-bold text-[#F3F4F6] mt-4">
                      A Look Back At 2023
                    </h2>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
