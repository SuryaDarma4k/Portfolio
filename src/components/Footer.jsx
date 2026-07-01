const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <h1 className="text-2xl font-bold">
            Portfolio
          </h1>

          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Harel Surya Darma. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="https://github.com/SuryaDarma4k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-github-fill ri-2x"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/harelsuryadarma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-fill ri-2x"></i>
            </a>

            <a
              href="https://wa.me/6285765932825"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-whatsapp-fill ri-2x"></i>
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;