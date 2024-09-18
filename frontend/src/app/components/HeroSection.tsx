'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LogoSlider from './LogoSlider';
import { EmblaOptionsType } from 'embla-carousel';

// Define the industry names and images with proper types
const industries: string[] = [
  'businesses',
  'startups',
  'eCommerce brands',
  'healthcare providers',
  'educational institutions',
  'financial services',
  'real estate agencies',
  'non-profits',
  'entertainment industries',
  'retailers',
  'automotive companies',
  'consulting firms',
  'fashion brands',
  'media outlets',
  'government agencies',
  'travel companies',
  'sports organizations',
  'legal practices',
  'construction companies',
  'logistics providers',
  'telecommunication companies',
];

interface ImageType {
  alt: string;
  image: string;
}

const images: ImageType[] = [
  {
    alt: 'Benzinga Logo',
    image:
      'https://res.cloudinary.com/divvupnnr/image/upload/v1725567598/Benzinga-Logo_jnmom4.png',
  },
  {
    alt: 'StockX Logo',
    image:
      'https://res.cloudinary.com/divvupnnr/image/upload/v1725567590/StockX-Logo_wdket6.png',
  },
  {
    alt: 'Fluid Spaces Logo',
    image:
      'https://res.cloudinary.com/divvupnnr/image/upload/v1725567589/fluid_spaces_pd5ivw.png',
  },
  {
    alt: 'ZCOB Logo',
    image:
      'https://res.cloudinary.com/divvupnnr/image/upload/v1725567588/zcob_logo_hprzpm.png',
  },
  {
    alt: 'Inside Out Logo',
    image:
      'https://res.cloudinary.com/divvupnnr/image/upload/v1725567587/insideout-design-development_vpwgg2.png',
  },
  {
    alt: 'Preva Logo',
    image:
      'https://res.cloudinary.com/divvupnnr/image/upload/v1726616488/small_Preva_Concept_2_3_D_Gold_1_nqcyms_e47c22a66f_vw0cvx.png',
  },
  {
    alt: 'U-M Logo',
    image:
      'https://res.cloudinary.com/divvupnnr/image/upload/v1725567597/U-M_Logo-Hex_g5fwss.png',
  },
  {
    alt: 'Fanatics Logo',
    image:
      'https://res.cloudinary.com/divvupnnr/image/upload/v1725567596/fanatucs_oyg9d2.png',
  },
  {
    alt: 'Soccer Swag Logo',
    image:
      'https://res.cloudinary.com/divvupnnr/image/upload/v1725567595/soccer_swag_j81lkw.png',
  },
  {
    alt: 'Deep End Logo',
    image:
      'https://res.cloudinary.com/divvupnnr/image/upload/v1725567593/deepend_lsodwl.png',
  },
  {
    alt: 'Qualigence Logo',
    image:
      'https://res.cloudinary.com/divvupnnr/image/upload/v1725567593/qualigence_mxvoxc.png',
  },
  {
    alt: 'Detroit Flower Company Logo',
    image:
      'https://res.cloudinary.com/divvupnnr/image/upload/v1725567592/Detroit_Flower_Company_adhcl1.png',
  },
];

// Define Embla options type
const OPTIONS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: 'auto',
};

// Define the HeroSection component with proper types
const HeroSection: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % industries.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center px-6 lg:px-0 mx-auto justify-center w-full py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-medium tracking-tight pb-4 text-charcoal">
          We help
          <span className="text-periwinkle-500 opacity-70 mx-1 scroll-text">
            {industries[currentTextIndex]}
          </span>
          <br />
          accelerate their digital design efforts.
        </h1>
        <div>
          <p className="text-slateGrey mb-10">
            Take your next leap with us, we’re a design studio with
            over 10 years of experience crafting delightful user
            experiences for start-ups, founders, and established
            brands and businesses.
          </p>
          <p className="text-slateGrey mb-10">
            Elevate your product market fit and connect with your
            ideal customer base. We’re here to assist you with
            wireframes to full-fidelity designs, every step along the
            way.
          </p>
        </div>
        <Link
          href="mailto:jagaestheticdigital@gmail.com"
          target="__blank"
        >
          <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-100 px-16 py-3 shadow-md rounded-full text-base hover:text-white text-white bg-periwinkle-500 hover:bg-periwinkle-800">
            Let&rsquo;s Build Something Great
          </button>
        </Link>
      </div>
      <LogoSlider slides={images} options={OPTIONS} />
    </div>
  );
};

export default HeroSection;
