import React from "react";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
export const fadeUp = (delay)=>{
  return {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, 
      transition: { duration: 0.5, delay:delay} },
  };
}
const Service = () => {
  const Sevices = [
    {
      id: 1,
      title: "Security",
      image: "/icons/obj1.png",
      description: "Acoustic, noise-cancelling, and wireless headphones.",
      delay: 0.1
    },
    {
      id: 2,
      title: "Gurantee",
      image: "/icons/obj2.png",
      description: "Acoustic, noise-cancelling, and wireless headphones.",
      delay: 0.3
    },
    {
      id: 3,
      title: "Affordability",
      image: "/icons/obj3.png",
      description: "Acoustic, noise-cancelling, and wireless headphones.",
      delay: 0.5
    },
  ];
  return (
    <div className="p-24 bg-[#F3F4F6] text-center">
    <UpdateFollower
      mouseOptions={{
        backgroundColor: "white",
        zIndex: 99999,
        followSpeed: 1.5,
        mixBlendMode: "difference",
      }}
    >
      

      
      <motion.h1 
      variants={fadeUp(0.2)}
      initial="hidden"
      // animate="show"
      whileInView="show"
      className="text-2xl font-bold">Services</motion.h1>
      <motion.p
      variants={fadeUp(0.3)}
      initial="hidden"
      // animate="show"
      whileInView="show">
        This is where we will display services offered by our headphone store.
      </motion.p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 pt-10">
        {Sevices.map((service) => (
          <UpdateFollower mouseOptions={{
            backgroundColor:"white",
            zIndex: 99999,
            followSpeed: 0.5,
            scale: 5,
            rotate:720,
            mixBlendMode: "darken",
            backgroundElement: <div>
              <img src={service.image} alt="" />
            </div>
            
          }}>

          <motion.div
          variants={fadeUp(service.delay)}
          initial="hidden"
          whileInView="show"
            key={service.id}
            className="mx-4 bg-white rounded-sm p-6 flex flex-col justify-center items-center space-y-2"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <img src={service.image} alt={service.title} width={"50%"} />
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
          </UpdateFollower>
        ))}
      </div>
    </UpdateFollower>
      </div>
  );
};

export default Service;
