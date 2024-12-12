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
        <div className="flex items-center space-x-2">
          <Gem className="h-6 w-6 text-red-600" />
          <span className="font-bold text-xl">UNCUT GEMS</span>
        </div>

        <div className="flex items-center space-x-8">
          <a className="hover:text-red-600">About Us</a>
          <a className="hover:text-red-600">Blog</a>
          <a className="hover:text-red-600">Events</a>
          <a className="hover:text-red-600">Contact</a>
          <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
            Donate
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
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
      <section className="bg-red-600 text-white px-6 py-20">
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
        <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">
          Latest Updates
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2"
              alt="Helping today"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-red-600/30 rounded-lg"></div>

            <div className="absolute top-8 left-8">
              <div className="bg-red-600 text-white px-4 py-2 rounded">
                <h3 className="font-bold text-xl">Mission</h3>
              </div>
            </div>

            <div className="bg-white p-8 max-w-xl mx-auto -mt-20 relative z-10 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Helping Today</h3>
              <p>
                Our mission is simple: to help girls and women achieve greater
                heights by empowering them with the gift of education. And we'll
                keep doing everything we can to make this dream a reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-100 px-6 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Newsletter</h2>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-red-600"
            />
            <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 whitespace-nowrap">
              Yes, Update!
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-red-600">About Us</a>
                </li>
                <li>
                  <a className="hover:text-red-600">Blog</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Organization</h3>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-red-600">Partners</a>
                </li>
                <li>
                  <a className="hover:text-red-600">Press</a>
                </li>
                <li>
                  <a className="hover:text-red-600">Contact Us</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Social</h3>
              <div className="flex space-x-4">
                <a className="hover:text-red-600">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a className="hover:text-red-600">
                  <Twitter className="h-6 w-6" />
                </a>
                <a className="hover:text-red-600">
                  <Facebook className="h-6 w-6" />
                </a>
                <a className="hover:text-red-600">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <Gem className="h-8 w-8 text-red-600" />
            <span className="font-bold text-2xl">UNCUT GEMS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
render(<LandingPage />, document.getElementById("root"));
