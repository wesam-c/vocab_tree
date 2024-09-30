import React from "react";
import woman from "../../image/the_woman.png";
import {  motion } from "framer-motion";
import { TbBrandFunimation } from "react-icons/tb";
import { FaBookReader } from "react-icons/fa";
import { GrGrow } from "react-icons/gr";

export const FadeUp = (delay) => {
    return {
        initial: {
            opacity : 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition : {
                type: "spring",
                stiffness: 100,
                duration: 0.5,
                delay: delay,
                ease: "easeInOut",
            }
        }
    };
};

const Banner = () => {
    return (
        <section>
            <div className="bg-white md:py-24 py-14 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
                {/* Banner IMG */}
                <div className=" flex justify-center items-center">
                    <motion.img
                        initial={{ opacity:0, x: -50}}
                        whileInView={{ opacity:1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        src={woman}
                        alt="woman"
                        className="w-[320px] md:w-[400px] object-cover drop-shadow"
                    />
                </div>
                {/* Banner TEXT */}
                <div className="flex flex-col justify-center ">
                    <div className="text-center md:text-left space-y-12">
                        <motion.h1
                            initial= {{ opacity:0, scale: 0.5 }}
                            whileInView={{ opacity:1, scale:1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-bold md:text-4xl !leading-snug">
                            The best website to learn languages
                        </motion.h1>
                    </div>
                    <div className="mt-4  flex flex-col mr-7 ml-5 gap-6"> 
                        <motion.div
                            variants={FadeUp(0.2)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 p-6 bg-[#f3f3f3] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                            <TbBrandFunimation className="text-2xl"/>
                            <p className="text-lg">Fun and User-Friendly Design</p>
                        </ motion.div>
                        <motion.div
                            variants={FadeUp(0.4)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 p-6 bg-[#f3f3f3] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                            <FaBookReader className="text-2xl"/>
                            <p className="text-lg">Interactive Learning Experience</p>
                        </ motion.div>
                        <motion.div
                            variants={FadeUp(0.6)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 p-6 bg-[#f3f3f3] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                            <GrGrow className="text-2xl"/>
                            <p className="text-lg">Personalized Progress Tracking</p>
                        </ motion.div>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default Banner;