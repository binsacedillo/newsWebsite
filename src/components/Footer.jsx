const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex items-center justify-center md:justify-start">
            <h1 className="gradient-text text-xl font-semibold">NEWS NIPPON</h1>
          </div>
          <div className="w-full md:w-2/3">
            <nav className="text-center md:text-right">
              <a href="#" className="block mt-2 inline-block md:mt-0 mr-4 text-gray-300 hover:text-white">
                Home
              </a>
              <a href="#" className="block mt-2 inline-block md:mt-0 mr-4 text-gray-300 hover:text-white">
                Categories
              </a>
              <a href="#" className="block mt-2 inline-block md:mt-0 mr-4 text-gray-300 hover:text-white">
                About
              </a>
              <a href="#" className="block mt-2 inline-block md:mt-0 text-gray-300 hover:text-white">
                Contact
              </a>
            </nav>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} <span className="footer-text">News Nippon</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
