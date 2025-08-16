import React from 'react';
import { FaBowlFood } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="bg-[#FFF9E9] container px-4 mx-auto flex flex-col items-center justify-center text-center">
      <div className="flex items-center justify-between w-full h-[15vw] mb-4">
        <div className="flex flex-col">
          <p className="text-3xl font-bold flex items-center gap-2 mb-2">
            Let &apos;s Food <FaBowlFood />
          </p>
          <p className="text-xl mb-3">Jalan Semangka Raya, Telaga Murni </p>
          <p className="text-2xl flex gap-3 mb-2">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </p>
        </div>

        <div className="flex flex-col ">
          <p className="text-2xl font-bold flex items-center gap-2 mb-2">
            Company
          </p>
          <p className="text-lg mb-1 text-[#666261]">Career</p>
          <p className="text-lg mb-1 text-[#666261]">How It Work</p>
        </div>

        <div className="flex flex-col ">
          <p className="text-2xl font-bold flex items-center gap-2 mb-2">
            Policy
          </p>
          <p className="text-lg mb-1 text-[#666261]">Privacy</p>
          <p className="text-lg mb-1 text-[#666261]">Shipping</p>
        </div>

        <div className="flex flex-col">
          <p className="text-2xl font-bold flex items-center gap-2 mb-2">
            Get In Touch
          </p>
          <p className="text-lg mb-1 text-neutral-900/60">+62 896 7311 2769</p>
          <p className="text-lg mb-1 text-[#666261]">food@example.com</p>
        </div>
      </div>

      <div className="w-full h-1 border-b"></div>

      <p className="text-md font-semibold m-4">
        {new Date().getFullYear()} Let&apos;sFood. ALL RIGHT RESERVED
      </p>
    </section>
  );
};

export default Footer;
