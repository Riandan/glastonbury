import Link from 'next/link';
import React from 'react';
import MusicIcon from '../MusicIcon';

interface Props {
    // Define your component props here
}

const Header: React.FC<Props> = (props) => {
    // Component logic goes here

    return <header className="px-4 lg:px-6 h-14 flex items-center bg-primary-500 text-gray-50">
    <Link
      href="/"
      className="flex items-center justify-center"
      prefetch={false}
    >
      <MusicIcon className="h-6 w-6 text-secondary-500" />
      <span className="sr-only">Glastonbury Festival</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link
        href="/event"
        className="text-sm font-medium hover:underline underline-offset-4 text-secondary-500"
        prefetch={false}
      >
        Event Details
      </Link>
      <Link
        href="#"
        className="text-sm font-medium hover:underline underline-offset-4 text-secondary-500"
        prefetch={false}
      >
        Lineup
      </Link>
      <Link
        href="#"
        className="text-sm font-medium hover:underline underline-offset-4 text-secondary-500"
        prefetch={false}
      >
        Tickets
      </Link>
      <Link
        href="gallery"
        className="text-sm font-medium hover:underline underline-offset-4 text-secondary-500"
        prefetch={false}
      >
        2023 Gallery
      </Link>
    </nav>
  </header>;
};

export default Header;