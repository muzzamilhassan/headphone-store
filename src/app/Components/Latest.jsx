import { motion } from "framer-motion";
import React from "react";
import { UpdateFollower } from "react-mouse-follower";
import { fadeUp } from "./Service";

const Latest = () => {
  return (
    <UpdateFollower
      mouseOptions={{
        backgroundColor: "black",
        zIndex: 99999,
        followSpeed: 1.5,
        mixBlendMode: "difference",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
        <div className="p-10 flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -100, rotate: -180 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            // whileInView="show"
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src="headphone4.png"
            alt=""
            width={"70%"}
          />
        </div>
        <div className="flex flex-col py-20 px-10 md:pr-36 space-y-2">
          <motion.h1
            variants={fadeUp(0.7)}
            initial="hidden"
            whileInView="show"
            className="text-[40px] font-bold leading-[40px]"
          >
            The Latest Headphones With The Latest Technology
          </motion.h1>
          <motion.p variants={fadeUp(0.9)} initial="hidden" whileInView="show">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit
            repellat sunt accusamus, a atque, rem consequatur tempore dolor
            optio tenetur quas beatae esse ex quisquam, aspernatur nulla
            reiciendis explicabo.
          </motion.p>
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 999,
              followSpeed: 1.5,
              scale: 5,
              mixBlendMode: "difference",
            }}
          >
            <motion.button
              variants={fadeUp(1.2)}
              initial="hidden"
              whileInView="show"
              class="custom-btn btn-2 mt-2"
            >
              Read More
            </motion.button>
          </UpdateFollower>
        </div>
      </div>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.5,
          scale: 8,
          mixBlendMode: "screen",
        }}
        className="bg-[#AD7270] opacity-90 rounded-3xl py-10 px-4 md:px-36 mx-10 md:mx-[130px] text-center font-bold text-[40px] text-white hover:scale-105 duration-500 hover:shadow-2xl"
      >
        <h1>Headphones With Good Quality And Affordable Price</h1>
      </UpdateFollower>
    </UpdateFollower>
  );
};

export default Latest;
