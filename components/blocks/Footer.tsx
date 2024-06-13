import Link from "next/link";
const Footer = () => {
  return (
    <footer className="mt-16 md:mt-0 bg-primary-400 text-[#F3F4F6] p-6 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold text-[#FCD34D]">Festival</h3>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            History
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Sustainability
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Contact
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold text-[#FCD34D]">Lineup</h3>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Headliners
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Performers
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Stages
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Schedule
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold text-[#FCD34D]">Tickets</h3>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Purchase
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Resale
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Packages
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            FAQ
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold text-[#FCD34D]">Venue</h3>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Map
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Camping
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Accessibility
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Travel
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold text-[#FCD34D]">Follow Us</h3>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Facebook
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Twitter
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            Instagram
          </Link>
          <Link
            href="/nope"
            className="hover:underline underline-offset-4 text-[#F3F4F6]"
            prefetch={false}
          >
            YouTube
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
