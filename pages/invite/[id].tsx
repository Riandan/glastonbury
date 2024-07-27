// Import dependencies
import Header from "@/components/blocks/Header";
import { GetStaticProps, GetStaticPaths } from "next";
import Jordan from "../../images/jordan.jpg";
import Image from "next/image";
import CountdownBanner from "@/components/blocks/CountdownBanner";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Spinner } from "flowbite-react";

// Define the page component
const InvitePage = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  // use an animation for the image to slide in from the left
  const imageRef = useRef<HTMLElement>(null);
  if (imageRef.current) {
    imageRef.current.style.animation = "slideInFromLeft 0.5s forwards";
  }

  //create a time to kick off a function after 1 second
  setTimeout(() => {
    setLoading(false);
  }, 2500);

  const data = mapping.find(m => m.id === id) ?? {id : 1, name: "Extra Guest", status: "Accepted", codeName: "Riff Raff", image: "", statusColour: "text-lime-600", statusSize: "50px"};
  return (
    <>
      
      <Header />
      <div className="bg-primary-400 min-h-[100vh] text-white flex justify-center">
        <div className="m-auto mx-10 mt-10 flex row justify-center w-[1000px] ">
          <div className="flex row ">
            <div className="flex-1 content-center w-[400px]">
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                <Image
                  src={data.image}
                  alt="Jordan"
                  width={921}
                  height={2048}
                  className="h-full w-full object-contain object-top rounded-lg"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1}}
            >
              <div className="flex-1 p-5 w-[400px]">
                <h1 className="text-5xl font-bold">{data.name}</h1>
                <br />
                <h2 className="text-3xl font-bold">
                  Code Name: <br /> {data.codeName}
                </h2>
                <br />
                <br />
                <h2 className="text-3xl font-bold text-wrap">STATUS: {loading ? <Spinner size={"xl"} /> : ""}</h2>
                <span
                  style={{ fontSize: data.statusSize }}
                  className={`${data.statusColour} font-bold`}
                >
                  {!loading ? data.status : ""}
                  
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapping = [
  {
    id: "1",
    name: "Jordan Gore",
    codeName: "The Favourite Child",
    status: "Accepted",
    image: "/images/invites/jord.jpg",
    statusColour: "text-lime-600",
    statusSize: "80px"
  },
  {
    id: "3",
    name: "Deborah Gore",
    codeName: "Breakfast Lady",
    status: "Accepted",
    image: "/images/invites/deb.jpg",
    statusColour: "text-lime-600",
    statusSize: "80px"
  },
  {
    id: "4",
    name: "Michael Gore",
    codeName: "Mr Worldwide",
    status: "Excommunicado",
    image: "/images/invites/mike.jpg",
    statusColour: "text-red-600",
    statusSize: "55px"
  },
  {
    id: "5",
    name: "Tayla Gore",
    codeName: "Basic Bitch",
    status: "Accepted",
    image: "/images/invites/tay.jpg",
    statusColour: "text-lime-600",
    statusSize: "80px"
  },
  {
    id: "7",
    name: "Ian Gore",
    codeName: "The Transponder",
    status: "Check Again",
    image: "/images/invites/ian.jpg",
    statusColour: "text-red-600",
    statusSize: "55px"
  },
  {
    id: "8",
    name: "Karen Pocock Gore",
    codeName: "Party Animal",
    status: "Check Again",
    image: "/images/invites/karen.jpg",
    statusColour: "text-red-600",
    statusSize: "55px"
  },
  {
    id: "9",
    name: "Kyle Ryan",
    codeName: "Secret Meat Eater",
    status: "Accepted",
    image: "/images/invites/ky.jpg",
    statusColour: "text-lime-600",
    statusSize: "80px"
  },
  {
    id: "10",
    name: "Ste Ryan",
    codeName: "Mr Happy",
    status: "Accepted",
    image: "/images/invites/ste.jpg",
    statusColour: "text-lime-600",
    statusSize: "80px"
  },
  {
    id: "11",
    name: "Brooklyn Gore",
    codeName: "Cousin Morris",
    status: "Accepted",
    image: "/images/invites/bro.jpg",
    statusColour: "text-lime-600",
    statusSize: "80px"
  },
  {
    id: "12",
    name: "Aidan Gore",
    codeName: "Stumps",
    status: "Disabled",
    image: "/images/invites/aid.jpg",
    statusColour: "text-blue-600",
    statusSize: "50px"
  },
  {
    id: "13",
    name: "Daniel",
    codeName: "Curly Headed Fuck",
    status: "Accepted",
    image: "/images/invites/dan.jpg",
    statusColour: "text-lime-600",
    statusSize: "80px"
  },
  {
    id: "14",
    name: "P Gore",
    codeName: "Rocket Man",
    status: "Blue Badge",
    image: "/images/invites/p.jpg",
    statusColour: "text-blue-600",
    statusSize: "50px"
  },
  {
    id: "15",
    name: "Geoffry Gore",
    codeName: "The Referee",
    status: "Blue Badge",
    image: "/images/invites/geoff.jpg",
    statusColour: "text-blue-600",
    statusSize: "50px"
  },
  {
    id: "16",
    name: "Simon Gore",
    codeName: "Sherminator",
    status: "Accepted",
    image: "/images/invites/si.jpg",
    statusColour: "text-lime-600",
    statusSize: "80px"
  },
  {
    id: "17",
    name: "Shauna Gore",
    codeName: "Booster Seat",
    status: "Check Again",
    image: "/images/invites/shauna.jpg",
    statusColour: "text-red-600",
    statusSize: "55px"
  },
  {
    id: "18",
    name: "Jay",
    codeName: "Virgin",
    status: "Flight Risk",
    image: "/images/invites/jay.jpg",
    statusColour: "text-orange-600",
    statusSize: "55px"
  },
];

// Implement getStaticProps to fetch data for the page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }; // Add type assertion

  // Fetch data for the specific ID from your data source
  // Replace this with your own data fetching logic

  return {
    props: {
      id,
    },
    revalidate: 60, // Revalidate the page every 60 seconds
  };
};

// Implement getStaticPaths to specify the dynamic paths
export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of IDs from your data source
  // Replace this with your own logic to fetch the list of IDs

  const ids = ["1", "2", "3"]; // Example list of IDs

  const paths = ids.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: "blocking", // Show fallback page while generating the page
  };
};

export default InvitePage;
