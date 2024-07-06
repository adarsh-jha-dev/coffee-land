import {
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaTelegram,
  FaPhone,
} from "react-icons/fa";

import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Coffee Cafe</h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et id
              consectetur quis quasi quia explicabo ipsum possimus inventore
              dolore eligendi!
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2">
                <FaMapLocation />
                Howrah, West Bengal
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="">
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="">
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">Payment Methods</h1>
              <img src={CreditCards} alt="credit-cards" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        <p className="text-white text-center border-t-2 mt-8 pt-8">
          Copyright &copy; 2024 Coffee Land | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
