import {
  Gem,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { render } from "react-dom";
import React from "react";
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
       
        <div className="flex justify-center md:justify-end items-center">
        <img
          src="/logo.svg"
          alt="Logo"
          className="h-24 w-auto opacity-100"
        />
      </div>
        

        <div className="flex items-center space-x-8">
          <a className="hover:text-[#E3010F]">About Us</a>
          <a className="hover:text-[#E3010F]">Blog</a>
          <a className="hover:text-[#E3010F]">Events</a>
          <a className="hover:text-[#E3010F]">Contact</a>
          <button className="bg-[#E3010F] text-white px-6 py-2 rounded-md hover:bg-red-700">
            Donate
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.kenyanews.go.ke/wp-content/uploads/2023/11/IMG_1692303248279.jpg"
            alt="Women empowerment"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-red-600/30"></div>
          <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-600/50"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            We're Helping Girls and Women Around the world
          </h1>
          <p className="text-white mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            dolorem assumptam repellat.
          </p>
          <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-red-600">
            Find out More
          </button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-[#E3010F] text-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            We're Helping Girls and Women Around the world
          </h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            dolorem assumptam repellat sed quibusdam obcaecati temporibus ex
            vitae aperiam sunt. Dignissimos amet eum, sit atque pariatur esse,
            tempore ab beatae, dignissimos totam agni.
          </p>
          <button className="border-2 border-white px-8 py-3 rounded-md hover:bg-white hover:text-red-600">
            Find out More
          </button>
        </div>
      </section>


      {/* Latest Updates */}
<section className="px-6 py-20">
  <h2 className="text-3xl font-bold text-[#E3010F] mb-12 text-center">
    Latest Updates
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column: Image */}
    <div className="relative">
      <img
        src="https://www.unfpa.org/modules/custom/unfpa_global_dashboard/images/fgm-dashboard-image.jpg"
        alt="Helping today"
        className="w-full h-[400px] object-cover rounded-lg"
      />
      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-red-600/30 rounded-lg"></div>
      
    </div>

<div className="bg-white p-8 max-w-xl mx-auto relative z-10 rounded-lg shadow-lg">
  <h3 className="text-2xl font-bold mb-4">Helping Today</h3>

  {/* Mission Badge */}
  <div className="bg-[#E3010F] text-white px-6 py-3 rounded-lg shadow-lg mb-6 inline-block">
    <h3 className="font-bold text-xl">Mission</h3>
  </div>
  <p className="text-base leading-7 text-gray-700">
    Our company’s mission is to help girls to live like any other person, enjoying her rights as a girl and being treated with dignity. iCut will help them escape these dangerous practices claimed to be cultural, allowing the girls to live freely. We plan to strengthen our weaknesses and work with society to eliminate harmful practices and reach out to every girl globally.
  </p>
</div>

  </div>
</section>



  
      {/* Newsletter */}
<section className="bg-gray-100 px-6 py-20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[#E3010F] mb-6">Newsletter</h2>
    {/* Flex container for the text, input, and button */}
    <div className="flex items-center justify-center gap-4">
      {/* Text */}
      <span className="text-lg text-gray-700 mr-4">
        Sign up for our newsletter and stay on the cutting edge of the effort to eradicate FGM.
      </span>
      
      {/* Email Input */}
      <input
        type="email"
        placeholder="email@address.com"
        className="w-80 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#E3010F] shadow-md"
        style={{
          fontFamily: 'Marco, sans-serif',
          fontSize: '20px',
          lineHeight: '36px',
          color: '#0A1225',
          letterSpacing: '0px',
          opacity: '1',
        }}
      />
      
      {/* Submit Button */}
      <button className="bg-[#E3010F] text-white px-8 py-3 rounded-md hover:bg-red-700 transition-all whitespace-nowrap">
        Stay Updated!
      </button>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-white text-black px-6 py-20">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 items-center">
      {/* Resources Section */}
      <div>
        <h3 className="font-bold text-lg mb-4">Resources</h3>
        <ul className="space-y-2">
          <li>
            <a className="hover:text-[#E3010F]">About Us</a>
          </li>
          <li>
            <a className="hover:text-[#E3010F]">Blog</a>
          </li>
        </ul>
      </div>

      {/* Organization Section */}
      <div>
        <h3 className="font-bold text-lg mb-4">Organization</h3>
        <ul className="space-y-2">
          <li>
            <a className="hover:text-[#E3010F]">Partners</a>
          </li>
          <li>
            <a className="hover:text-[#E3010F]">Press</a>
          </li>
          <li>
            <a className="hover:text-[#E3010F]">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Social Section */}
      <div>
        <h3 className="font-bold text-lg mb-4">Social</h3>
        <div className="flex space-x-4">
          <a className="hover:text-[#E3010F]">
            <Linkedin className="h-6 w-6" />
          </a>
          <a className="hover:text-[#E3010F]">
            <Twitter className="h-6 w-6" />
          </a>
          <a className="hover:text-[#E3010F]">
            <Facebook className="h-6 w-6" />
          </a>
          <a className="hover:text-[#E3010F]">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center md:justify-end items-center">
        <img
          src="/logo.svg"
          alt="Logo"
          className="h-48 w-auto opacity-100" // Double the height (from h-24 to h-48)
        />
      </div>
    </div>
  </div>
</footer>


    </div>
  );
}
render(<LandingPage />, document.getElementById("root"));
