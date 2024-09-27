import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import { useEffect, useState } from 'react';
import { navLinks } from '../constant';

const Header = () => {
  const [modalOpen, setModalOpen] = useCycle(false, true);
  const [active, setActive] = useState('');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const modalVariants = {
    hidden: {
      y: '-100vh',
    },
    visible: {
      y: 0,
      transition: {
        type: 'tween', // Set transition type to 'tween'
        duration: 0.3, // Specify duration
      },
    },
    exit: {
      y: '-100vh',
      transition: {
        type: 'tween',
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: '50%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut', // Add ease-out easing function
      },
    },
    exit: {
      opacity: 0,
      y: '50%',
      transition: {
        duration: 0.1,
        ease: 'easeOut', // Add ease-out easing function
      },
    },
  };

  const navLinksVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <header className="px-5 w-full h-20 sticky top-0 inset-0 z-30 bg-[#0f0f0f] lg:px-0">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link to="/" className="flex space-x-1 items-center w-full">
          <span className="text-xl text-white lg:text-2xl font-bold tracking-tight">
            Compute-app
          </span>
        </Link>
        <nav className="hidden md:flex gap-20">
          <ul className="flex gap-3 items-center">
            {navLinks.map((navLink, i) => (
              <li
                key={i}
                className={`text-lg text-gray-200 cursor-pointer py-2 px-3 hover:text-pry transition duration-300 ease-in-out ${
                  active.includes(navLink.path) && 'text-pry'
                } relative w-fit block after:block after:content-[''] after:absolute after:left-0 after:top-0 after:border-t-2 after:border-pry after:bg-pry after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
                onClick={() => navigate(`/${navLink.path}`)}
              >
                {navLink.label}
              </li>
            ))}
          </ul>
          <div className="flex gap-5">
            <Link
              to="/dashboard"
              className="bg-white text-gray-700 w-32 rounded-md tracking-tight flex items-center justify-center"
            >
              Dashboard
            </Link>
            <button
              type="button"
              className="bg-transparent text-white border border-gray-600 p-2  w-32 rounded-md tracking-tight"
            >
              Contact us
            </button>
          </div>
        </nav>
        <div className="inset-0 flex w-full h-full items-center justify-center flex-col lg:hidden">
          <div
            className="absolute right-5 top-0 translate-y-1/2 z-40 cursor-pointer"
            onClick={() => setModalOpen()}
          >
            {modalOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 border border-white p-2 rounded-md text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 border border-pry p-2 rounded-md text-pry"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
          <AnimatePresence>
            {modalOpen && (
              <motion.div
                className="absolute inset-0 bg-pry h-screen w-full"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <nav className="flex flex-col items-center justify-center w-full h-[80%]">
                  <motion.ul
                    className="flex flex-col gap-10 items-center justify-center h-full w-full"
                    variants={navLinksVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {navLinks.map((navLink, i) => (
                      <motion.li
                        key={i}
                        className="text-lg text-white py-2 px-6 hover:text-white cursor-pointer text-center"
                        variants={linkItemVariants}
                        onClick={() => {
                          navigate(`/${navLink.path}`), setModalOpen();
                        }}
                      >
                        {navLink.label}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div>
                    <button
                      type="button"
                      className="bg-transparent border border-white text-white p-3 w-36 rounded-md tracking-tight cursor-pointer"
                    >
                      Login
                    </button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
