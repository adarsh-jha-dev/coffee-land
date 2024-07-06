import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

type Props = {
  sidebar: boolean;
  setSidebar: (sidebar: boolean) => void;
};

const Navbar = ({ sidebar, setSidebar }: Props) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-[9999]">
      <div className="container">
        <div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl font-semibold uppercase "
          >
            Coders <span className="text-primary">Coffee.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
          >
            <GiHamburgerMenu
              onClick={() => setSidebar(!sidebar)}
              className="text-3xl cursor-pointer"
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
