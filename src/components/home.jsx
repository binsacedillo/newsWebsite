import { useState } from 'react';
import NewsList from './NewsList';
import BreakingNews from './BreakingNews';
import Footer from './Footer';
import smallImage from '../images/flagjapan.jpg';

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <main>
      <nav className="bg-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="gradient-text text-lg font-bold">
                NEWS NIPPON
              </h1>
              <img src={smallImage} alt="Small Image" className="ml-2 h-8" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-300 hover:text-white rounded-md text-base font-medium">
                  Home
                </a>
                <span className="red-dot blink"></span>
                <a href="Live" className="text-gray-300 uppercase hover:text-white rounded-md text-base font-medium"> Live </a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  Latest News
                </a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  About Us
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                className={`text-gray-300 hover:text-white focus:outline-none focus:text-white burger-menu ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`md:hidden ${isMenuOpen ? 'inline-block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Live
              <span className="red-dot blink ml-3"></span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Latest News
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About Us
            </a>
          </div>
        </div>
      </nav>
      <BreakingNews />
      <NewsList />
      <Footer />
      </main>
    </>
  );
};
