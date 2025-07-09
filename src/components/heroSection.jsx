import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-600 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 50,
            stiffness: 300,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-3xl lg:text-5xl xl:text-6xl font-bold z-10 mb-6"
        >
          Building Fast <br />
          Reliable Results
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 50,
            stiffness: 300,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-lg lg:text-xl text-purple-200 max-w-2xl "
        >
          I deliver robust, production-ready websites and web apps with speed
          and percision. Every project is backed by clean code, clear
          communication, and a commitment to get it done, on time, every time.
        </motion.p>
      </div>
      <motion.div
      initial={{opacity: 0, y:-50}}
      animate={{opacity:1, y:0}}
      transition={{
        type:'spring',
        delay:1.3
      }}
    className="w-full h-full flex justify-center items-center"
      >
        <Spline
          className=""
          scene="https://prod.spline.design/12cf-O2F-yDbLeXP/scene.splinecode"
        />
      </motion.div>
    </section>
  );
};
export default Hero;
