// Import dependencies
import Header from "@/components/blocks/Header";
import Jordan from "../images/jordan.jpg";
import Image from "next/image";

import { Gallery as GalleryGrid } from "react-grid-gallery";
import CountdownBanner from "@/components/blocks/CountdownBanner";

// Define the page component
const Gallery = () => {
  return (
    <div className="bg-primary-500 min-h-[vh-100]">
      <CountdownBanner date={new Date("2024-06-29")} />
      <Header />
      <div className="z-10 h-full text-center w-full inset-y-16 p-6">
        <h1 className="text-6xl font-bold tracking-tighter  md:text-7xl text-[#FCD34D]">
          Gorstonbury Festival 2024 Event Details!
        </h1>
        <p className="text-[#F3F4F6] md:text-xl mt-8">
          Read and remember the important details of this event!
        </p>
      </div>
      <div className="p-8">
        <h2 className="text-secondary-500 text-4xl font-bold">Queue Rules</h2>
        <p className="text-white my-2">
          Yes, rules – how else can we contain the fun. Your Security Team has
          carefully surveyed the venue and a number of checkpoints have been
          implemented. You must successfully complete each checkpoint in order
          to enter the festival. No checkpoint can be skipped and any person(s)
          unwilling to cooperate will be asked to leave.
        </p>
        <p className="text-white my-2">
          Upon arrival, you will: Be greeted by our Front Of House Security.
          They will show you to your place in the queue. Please read any and all
          signs regarding entry as you wait.
        </p>
        <p className="text-white my-2">
          Be observed by our Head Of Security thoroughly – this includes
          ensuring you are not already over the drinking limit and/or on drugs
          (i.e. smacked off your tits).
        </p>
        <p className="text-white my-2">
          Be searched by our Contraband Lead. They may ask you to lift your
          shirt or strip down, please don’t be offended if any rubber gloves are
          introduced. Any contraband found must be consumed in a single shot as
          punishment.
        </p>
        <p className="text-white my-2">
          Be scanned by our Events Manager who will ensure your ticket is legit.
          If they deem your ticket a fake, you will be turned away and escorted
          from the premises.
        </p>
        <p className="text-white my-2">
          If you complete all checkpoints of the queue, you will be free to
          enjoy the festival at your leisure. Any rulebreakers will be
          prosecuted accordingly and any person(s) found to be ‘jumping the
          fence’ will be shot in the nether regions by the Head Of Security with
          a real weapon. This is your only warning.
        </p>
      </div>

      <div className="p-8 pt-0">
        <h2 className="text-secondary-500 text-4xl font-bold">
          Terms and Conditions
        </h2>
        <p className="text-white my-2">T&Cs: The Need To Knows</p>
        <p className="text-white my-2">
          Now, onto the bits everyone often skips… but this time, they’re
          actually important!
        </p>
        <p className="text-white my-2">
          <span className="font-bold">Festival Attire –</span> This is
          non-negotiable. You must be dressed ready to drink, dance and have a
          good time. The more outrageous the festival outfit, the better! The
          tattoos provided in your ticket bundle should help jazz up your
          attire.
        </p>
        <p className="text-white my-2">
          <span className="font-bold">Tickets –</span> Yes it’s been mentioned
          multiple times, but you must bring your own ticket with you on the day
          of the event. You will not be granted entry without it.
        </p>
        <p className="text-white my-2">
          <span className="font-bold">Queue –</span> You must pass through each
          checkpoint in the manner in which you are instructed by our Security
          Team. Please leave any abuse on the streets, our team are here to help
          you and you will be escorted from the premises for any wrongdoings.
        </p>
        <p className="text-white my-2">
          <span className="font-bold">Time –</span> As stated, you must arrive
          at the venue between 4pm – 4.10pm as everyone will be entering
          together. Shauna-lee, this calls to you specifically as we all know
          your ‘just around the corner’ means you’re still getting ready. And
          Mushy P, this isn’t the airport so you do not need to arrive four
          hours early – you will not be given early access.
        </p>
        <p className="text-white my-2">
          <span className="font-bold">Weather –</span> Unfortunately, we live in
          Britain and if the weather takes a turn for the worst, the event will
          be cancelled. You’ll be informed beforehand if this is sadly the case.
        </p>
        <p className="text-white my-2">
          <span className="font-bold">Plus Ones –</span> This festival is
          strictly reserved to those who have, or have had, the title of the
          ‘Gore’ surname. If you do not have ‘Gore’ in your surname but have
          been granted a ticket, you will be allowed entry once you pass the
          checkpoints. No person(s) without a ticket will be allowed to enter
          the festival at any time.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
