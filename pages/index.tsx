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
              <a>
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
        
        {/* <section
          id="event-details"
          className="w-full py-12 md:py-24 lg:py-32 dark:bg-[#1F2937]"
        >
          <div className="container px-4 md:px-6 space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#6366F1]">
                Event Details
              </h2>
              <p className="max-w-[600px] mx-auto text-[#4B5563] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#D1D5DB]">
                Glastonbury Festival is the largest greenfield music and
                performing arts festival in the world. It takes place in
                Rainhill, England.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#6366F1]">Date</h3>
                <p className="text-[#4B5563] dark:text-[#D1D5DB]">
                  June 21 - June 25, 2023
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#6366F1]">Location</h3>
                <p className="text-[#4B5563] dark:text-[#D1D5DB]">
                  Worthy Farm, Pilton, Somerset, UK
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#6366F1]">Overview</h3>
                <p className="text-[#4B5563] dark:text-[#D1D5DB]">
                  Glastonbury Festival is a five-day music festival that takes
                  place in late June at Worthy Farm in Pilton, Somerset,
                  England. It is one of the largest music festivals in the world
                  and a major event in British culture.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="lineup"
          className="w-full py-12 md:py-24 lg:py-32 dark:bg-[#1F2937]"
        >
          <div className="container px-4 md:px-6 space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#6366F1]">
                Lineup
              </h2>
              <p className="max-w-[600px] mx-auto text-[#4B5563] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#D1D5DB]">
                Check out the incredible lineup of artists performing at this
                year's Glastonbury Festival.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/placeholder.svg"
                  width="200"
                  height="200"
                  alt="Artist Name"
                  className="rounded-full w-20 h-20 object-cover border-4 border-[#6366F1]"
                />
                <h3 className="text-lg font-bold text-[#6366F1]">
                  Billie Eilish
                </h3>
                <p className="text-[#4B5563] dark:text-[#D1D5DB]">Headliner</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/placeholder.svg"
                  width="200"
                  height="200"
                  alt="Artist Name"
                  className="rounded-full w-20 h-20 object-cover border-4 border-[#6366F1]"
                />
                <h3 className="text-lg font-bold text-[#6366F1]">
                  Kendrick Lamar
                </h3>
                <p className="text-[#4B5563] dark:text-[#D1D5DB]">Headliner</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/placeholder.svg"
                  width="200"
                  height="200"
                  alt="Artist Name"
                  className="rounded-full w-20 h-20 object-cover border-4 border-[#6366F1]"
                />
                <h3 className="text-lg font-bold text-[#6366F1]">Lizzo</h3>
                <p className="text-[#4B5563] dark:text-[#D1D5DB]">Headliner</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/placeholder.svg"
                  width="200"
                  height="200"
                  alt="Artist Name"
                  className="rounded-full w-20 h-20 object-cover border-4 border-[#6366F1]"
                />
                <h3 className="text-lg font-bold text-[#6366F1]">Elton John</h3>
                <p className="text-[#4B5563] dark:text-[#D1D5DB]">Headliner</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="tickets"
          className="w-full py-12 md:py-24 lg:py-32 dark:bg-[#1F2937]"
        >
          <div className="container px-4 md:px-6 space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#6366F1]">
                Get Your Tickets
              </h2>
              <p className="max-w-[600px] mx-auto text-[#4B5563] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#D1D5DB]">
                Don't miss your chance to experience the magic of Glastonbury
                Festival. Secure your tickets now before they sell out.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#6366F1] px-8 text-sm font-medium text-[#F3F4F6] shadow transition-colors hover:bg-[#4F46E5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4F46E5] disabled:pointer-events-none disabled:opacity-50 dark dark:text-[#6366F1] dark:hover:bg-[#E5E7EB] dark:focus-visible:ring-[#D1D5DB]"
                prefetch={false}
              >
                Buy Tickets
              </Link>
            </div>
          </div>
        </section> */}
      </main>
      <Footer/>
    </div>
  );
}
