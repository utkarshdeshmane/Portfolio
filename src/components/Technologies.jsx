import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import Python from "../assets/Tech/python.png"; 
import DataScience from "../assets/Tech/data-science.png"; 
import Aws from "../assets/Tech/aws.png"; 
import langchain from "../assets/Tech/langchain.png"; 
import flutter from "../assets/Tech/flutter.png"; 
import ML from "../assets/Tech/machine-learning.png"; 
import JS from "../assets/Tech/node-js.png"; 
import { animate, easeIn, motion } from "framer-motion";

const iconVariants = (delay, duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay,
    }
  }
});


export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 
      className="my-20 text-center text-4xl">Technologies

      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Python} alt="py" className="h-20 w-20" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={ML} alt="py" className="h-20 w-20" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={DataScience} alt="py" className="h-20 w-20" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={Aws} alt="py" className="h-20 w-20" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={langchain} alt="py" className="h-20 w-20" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={flutter} alt="py" className="h-20 w-20" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={JS} alt="py" className="h-20 w-20" />
        </motion.div>
      </div>
    </div>
  );
};
