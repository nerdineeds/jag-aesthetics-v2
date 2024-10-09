'use client';
import Link from 'next/link';
import React from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

// Define the SocialLink interface
interface SocialLink {
  id: number;
  href: string;
  account:
    | 'facebook'
    | 'instagram'
    | 'linkedin'
    | 'youtube'
    | 'tiktok'
    | 'github';
}

// Refactor getSocialIcon with correct typing
const getSocialIcon = (socialName: SocialLink['account']) => {
  switch (socialName) {
    case 'facebook':
      return (
        <FaFacebookF className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      );
    case 'instagram':
      return (
        <FaInstagram className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      );
    case 'linkedin':
      return (
        <FaLinkedin className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      );
    case 'youtube':
      return (
        <FaYoutube className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      );
    case 'tiktok':
      return (
        <FaTiktok className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      );
    case 'github':
      return (
        <FaGithub className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      );
    default:
      return null;
  }
};

const Footer: React.FC = () => {
  // Define socials with the correct type
  const socials: SocialLink[] = [
    { id: 1, href: 'https://facebook.com/', account: 'facebook' },
    { id: 2, href: 'https://instagram.com', account: 'instagram' },
    { id: 3, href: 'https://linkedin.com', account: 'linkedin' },
    { id: 4, href: 'https://youtube.com', account: 'youtube' },
    { id: 5, href: 'https://tiktok.com', account: 'tiktok' },
    { id: 6, href: 'https://github.com', account: 'github' },
  ];

  return (
    <footer className="px-6 w-full flex gap-y-2 lg:gap-y-0 flex-col-reverse items-center justify-between lg:flex-row py-6">
      <p className="text-sm">
        © 2024 JAGAesthetic LLC. All rights reserved.
      </p>
      <a
        href="mailto:jagaestheticdigital@gmail.com"
        className="text-center hidden lg:block"
      >
        hello@jagaesthetic.com
      </a>
      <div className="flex gap-x-6 items-center">
        {socials.map((social) => (
          <Link href={social.href} key={social.id}>
            {getSocialIcon(social.account)}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
