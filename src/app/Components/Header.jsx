import React, { useState } from "react";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, motion } from "framer-motion";

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};
const imagedata = [
  {
    id: 1,
    image: "headphone.png",
    title: "Headphones Wireless",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nulla nec dolor viverra tempor.",
    price: 500,
    model: "Model Brown",
    bgColor: "#8B5958",
  },
  {
    id: 2,
    image: "headphone2.png",
    title: "Headphones Wireless 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nulla nec dolor viverra tempor.",
    price: 500,
    model: "Model Brown",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: "headphone3.png",
    title: "Headphones Wireless 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nulla nec dolor viverra tempor.",
    price: 500,
    model: "Model Brown",
    bgColor: "#5D818C",
  },
];
const Header = () => {
  const [data, setData] = useState(imagedata[0]);
  const handledata = (item) => {
    setData(item);
  };
  return (
    <>
      <div className="bg-black lg:w-full lg:h-screen text-white overflow-hidden">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
          {/* image desciption section  */}
          <section className="flex flex-col justify-center p-[80px]">
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999999,
                    scale: 8,
                    rotate: -720,
                    followSpeed: 1.5,
                    mixBlendMode: "difference",
                  }}
                >
                  <motion.h1
                    key={data.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-[60px] leading-[60px] font-bold"
                  >
                    {data.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={data.id}
                  variants={fadeUp(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm"
                >
                  {data.description}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: data.bgColor,
                    zIndex: 999999,
                    scale: 5,
                    followSpeed: 0.5,
                    rotate: -720,
                    backgroundElement: (
                      <div>
                        <img src={data.image} alt="" srcset="" />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={data.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{
                      backgroundColor: data.bgColor,
                    }}
                    className="py-2 px-4 rounded-sm w-36"
                  >
                    Buy & Listion
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>
            </div>

            <div className="flex gap-2 items-center mt-24">
              <div className="w-[20%] h-[2px] bg-white"></div>
              <div>TOP HEADPHONES FOR YOU</div>
              <div className="w-[20%] h-[2px] bg-white"></div>
            </div>

            <div className="grid grid-cols-3">
              {imagedata.map((e) => {
                return (
                  <UpdateFollower mouseOptions={{
                    backgroundColor: e.bgColor,
                    zIndex: 9999999999999,
                    followSpeed: 1.5,
                    scale: 5,
                    text:"view details",
                    textFontSize:'3px'
                  }}>
                    <div
                      className="md:flex items-center text-xs md:text-sm font-bold md:pr-20"
                      key={e.id}
                      onClick={() => handledata(e)}
                    >
                      <img src={e.image} alt="image missing" width={"100px"} />
                      <div className="pr-10">
                        <div>${e.price}</div>
                        <div className="text-nowrap">{e.model}</div>
                      </div>
                    </div>
                  </UpdateFollower>
                );
              })}
            </div>
          </section>
          {/* image section  */}
          <section className="flex pt-8 justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={data.id}
                variants={fadeUp(0.1)}
                initial="hidden"
                animate="show"
                exit="exit"
                src={data.image}
                alt={data.title}
                className="w-[50%] md:w-[70%] lg:[90%]"
              />
            </AnimatePresence>
          </section>
        </div>
      </div>
    </>
  );
};

export default Header;
