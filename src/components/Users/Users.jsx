import React from "react";
import bg from "../../image/bg.png";
import {  motion } from "framer-motion";

const bgStyle ={
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}

const Users = () => {
    return (
        <section className="bg-[#f7f7f7]">
            <motion.div
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            style={bgStyle}
            className="container py-24 md:py-48">
                <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex flex-col justify-center">
                    <div className="text-center space-y-4 lg:max-w-[480px] mx-auto">
                        <h1 className="text-4xl font-bold !leading-snug">10k+ People Learning with Vocab Tree</h1>
                        <p className="text-lg text-gray-600">
                            Thousands of people are using Vocab Tree's flashcards to make learning new words easy and fun. Join them now!
                        </p>
                        <a href="" className="!mt-8 rounded-2xl  inline-flex  bg-lime-400 text-white px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl shadow-lg hover:bg-lime-600 transition duration-300">Join Now</a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Users;