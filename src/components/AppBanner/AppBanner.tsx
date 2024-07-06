import { motion } from "framer-motion";
import BannerImg from "../../assets/coffee-cover.jpg";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const BannerStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const AppBanner = () => {
  return (
    <div className="container my-14">
      <div
        style={BannerStyle}
        className="sm:min-h-[400px] sm:items-center rounded-xl sm:flex sm:justify-end"
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.h1
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-2xl text-center sm:tex-4xl font-semibold"
            >
              Download the App
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              className="text-center sm:px-2"
            >
              Get the best coffee in town with our app. Easy to use and
              efficient.
            </motion.p>

            <div className="flex justify-center items-center gap-4">
              <a
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                href="/"
              >
                <motion.img
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.5,
                  }}
                  src={AppStoreImg}
                  alt="App Store"
                />
              </a>
              <a
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                href="/"
              >
                <motion.img
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.5,
                  }}
                  src={PlayStoreImg}
                  alt="Play Store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
