import Image from "next/image";
import { Inter } from "next/font/google";
import HeroImage from "../images/hero-image.webp";

const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
import CalendarIcon from "@/components/CalendarIcon";
import Header from "@/components/blocks/Header";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="bg-[#6366F1] text-[#FCD34D] py-2 text-center text-sm font-medium">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>
              Glastonbury Festival starts in{" "}
              <span className="font-bold">
                <div />
              </span>
            </span>
          </div>
        </div>
      </div>

      <Header />

      <main className="flex-1">
        <section className="relative w-full h-[80vh] overflow-hidden">
          {/* style the image so it does not resize just that the ends get chopped off */}
          <div className="w-full relative h-[550px]">
            <Image
              src={HeroImage}
              alt={"Hero image"}
              className="object-cover object-center absolute top-0"
            />
            <div className="z-10 top-1/2 absolute">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl text-[#FCD34D]">
                Gores Glastonbury Festival 2024!
              </h1>
              <p className="max-w-[600px] text-[#F3F4F6] md:text-xl">
                Experience the ultimate music festival in the heart of Rainhill,
                UK. Featuring the biggest names in music, arts, and culture.
              </p>
            </div>
          </div>
        </section>
        <section
          id="event-details"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#F3F4F6] dark:bg-[#1F2937]"
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
          className="w-full py-12 md:py-24 lg:py-32 bg-[#F3F4F6] dark:bg-[#1F2937]"
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
          className="w-full py-12 md:py-24 lg:py-32 bg-[#F3F4F6] dark:bg-[#1F2937]"
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
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#6366F1] px-8 text-sm font-medium text-[#F3F4F6] shadow transition-colors hover:bg-[#4F46E5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4F46E5] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#F3F4F6] dark:text-[#6366F1] dark:hover:bg-[#E5E7EB] dark:focus-visible:ring-[#D1D5DB]"
                prefetch={false}
              >
                Buy Tickets
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#6366F1] text-[#F3F4F6] p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#FCD34D]">Festival</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              History
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Sustainability
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#FCD34D]">Lineup</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Headliners
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Performers
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Stages
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Schedule
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#FCD34D]">Tickets</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Purchase
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Resale
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Packages
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              FAQ
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#FCD34D]">Venue</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Map
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Camping
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Accessibility
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Travel
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#FCD34D]">Follow Us</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4 text-[#F3F4F6]"
              prefetch={false}
            >
              YouTube
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
