import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../logo-nobkg.png';

// Define the component using React.FC
const MainNavigation: React.FC = () => {
  return (
    <header className="bg-white mx-auto px-6 w-full flex flex-row items-center justify-between py-3">
      <Image alt="JAG Aesthetic Digital" src={logo} width={125} />
      <Link
        href="https://calendly.com/jagaestheticdigital"
        target="_blank"
        className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-100 px-8 py-2 shadow-md rounded-full text-sm hover:text-white text-charcoal bg-lightgrey hover:bg-periwinkle-800"
      >
        Collaborate
      </Link>
    </header>
  );
};

export default MainNavigation;
