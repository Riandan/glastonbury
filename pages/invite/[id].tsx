// Import dependencies
import Header from "@/components/blocks/Header";
import { GetStaticProps, GetStaticPaths } from "next";
import Jordan from "../../images/jordan.jpg";
import Image from "next/image";

// Define the page component
const InvitePage = ({ id }: { id: string }) => {
  return (
    <div>
      <Header />
      <div className="m-auto  mx-10 mt-10 ">
        <div className="flex row">
          <div className="flex-1 h-[600px]">
              <Image src={Jordan} alt="Jordan" className="w-full object-contain object-top rounded-lg" />
          </div>
          <div className="flex-1 p-5">
            <h1 className="text-5xl font-bold">Jordan Gore</h1>
            <br/>
            <h2 className="text-3xl font-bold">Status: <span className="text-lime-600">Accepted</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

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
