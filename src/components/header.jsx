import { AnimatePresence, motion, scale } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

// import { FaSquareXTwitter } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

// import { FaLinkedin } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

import { IoMenu, IoClose } from "react-icons/io5";

import { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => setMobileMenu(!mobileMenu);

  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);
  return (
    <header className=" absolute w-full z-50 transition-all duration-300">
      <div className=" container flex mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between h-16 md:h-20 mt-4">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            V
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Vedant
          </span>
        </motion.div>

        {/* Destop Navigation */}
        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item, index) => (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.7 + index * 0.2,
                }}
                key={item}
                className=" relative text-gray-800 dark:text-gray-200 hover:text-voilet-600 dark:hover:text-violet-600 font-medium transition-colors duration-300 group"
                href="#"
              >
                {item}
                <span className=" absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            )
          )}
        </nav>

        {/* Social icons - Desktop */}
        <div className="lg:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-voilet-400 transition-colors duration-300"
            href="#"
          >
            <FaXTwitter className="w-7 h-7" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            href="#"
          >
            {/* <FaGithub className="w-7 h-7" /> */}
            <LuGithub className="w-7 h-7" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-voilet-400 transition-colors duration-300"
            href="#"
          >
            <TiSocialLinkedin className="w-7 h-7" />
          </motion.a>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            onClick={openContactForm}
            className="ml-1 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 1.1 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: 0.5,
              duration: 1.7,
            }}
            className="text-gray-300"
            onClick={toggleMenu}
          >
            {mobileMenu ? (
              <IoClose className="h-5 w-5" />
            ) : (
              <IoMenu className="h-5 w-5" />
            )}
          </motion.button>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenu ? 1 : 0,
          height: mobileMenu ? "auto" : 0,
        }}
        transition={{ delay: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5 w-full"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                onClick={toggleMenu}
                className="text-gray-300 font-medium py-2"
                key={item}
                href="#"
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-row space-x-3">
            <a href="#">
              <FaXTwitter className="w-5 h-5 text-gray-300" />
            </a>
            <a href="#">
              <LuGithub className="w-5 h-5 text-gray-300" />
            </a>
            <a href="#">
              <TiSocialLinkedin className="w-5 h-5 text-gray-300" />
            </a>
          </div>

          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-700 to-violet-300 font-bold"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Contact Form */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex justify-center items-center p-4"
          >
            <div className="bg-white rounded-xl dark:bg-gray-800 shadow-xl w-full max-w-md p-6">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Get in Touch</h1>
                <button onClick={closeContactForm} >
                  <IoClose className="w-6 h-6 font-extrabold" />
                </button>
              </div>
              <form action="" className="space-y-4 mt-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1 px-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-600 rounded-xl focus:ring-2 focus:ring-violet-500
                focus:border-violet-500 bg-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1 px-1"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-gray-600 rounded-xl focus:ring-2 focus:ring-violet-500
                focus:border-violet-500 bg-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1 px-1"
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-600 rounded-xl focus:ring-2 focus:ring-violet-500
                focus:border-violet-500 bg-gray-700"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-violet-700 to-violet-300 hover:from-violet-800 hover:to-violet-400 shadow-md hover:shadow-lg hover:shadow-violet-600/50 rounded-xl"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;
