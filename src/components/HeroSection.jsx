import React from "react";
import { HERO_CONTENT } from "../constants";
import Profile from "../assets/Profile_pic.png";
import { motion } from "framer-motion";


export const HeroSection = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pl-8">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="pb-4 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Utkarsh Deshmane
            </motion.h1>
            <motion.span
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ x: -100, opacity: 0 }}
             transition={{ duration: 1 }}
             className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Data Analyst
            </motion.span>
            <motion.p 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ x: -100, opacity: 0 }}
             transition={{ duration: 1.5 }}
            className="my-2 max-w-xl py-6 text-center lg:text-left text-lg">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end">
          <motion.img 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            src={Profile}
            alt="Utkarsh Deshmane"
            className="rounded-full border-4 border-neutral-800 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
