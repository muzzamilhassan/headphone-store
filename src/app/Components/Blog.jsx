import React from "react";
import { UpdateFollower } from "react-mouse-follower";

const Blog = () => {
  const Sevices = [
    {
      id: 1,
      title: "lorem ipsum dolor sit amet",
      image: "/blogs/blog1.jpg",
      description:
        "Acoustic, noise-cancelling, and wireless headphones.loremipsum dolor sit amet",
    },
    {
      id: 2,
      title: "lorem ipsum dolor sit amet",
      image: "/blogs/blog2.jpg",
      description:
        "Acoustic, noise-cancelling, and wireless headphones.loremipsum dolor sit amet",
    },
    {
      id: 2,
      title: "lorem ipsum dolor sit amet",
      image: "/blogs/blog3.jpg",
      description:
        "Acoustic, noise-cancelling, and wireless headphones.loremipsum dolor sit amet",
    },
    {
      id: 4,
      title: "lorem ipsum dolor sit amet",
      image: "/blogs/blog4.jpg",
      description:
        "Acoustic, noise-cancelling, and wireless headphones.loremipsum dolor sit amet",
    },
  ];
  return (
    <UpdateFollower mouseOptions={{
       
      backgroundColor: "black", 
      zIndex: 99999,
      followSpeed: 1.5,
      mixBlendMode: "darken",
    }}
     className="p-24">
      <h1 className="text-[30px] font-bold text-center">Blogs</h1>
      <p className="text-center">This is where we will display Blogs.</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 pt-10">
        {Sevices.map((service) => (
          <UpdateFollower
          className="md:mx-4 rounded-sm flex flex-col space-y-2  blog"
            mouseOptions={{
                text:"read",
                textFontSize:"3px",
              backgroundColor: "black",
              zIndex: 100000000,
              followSpeed: 1.5,
              scale: 5,
              mixBlendMode: "difference",
            }}
            key={service.id}
            
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <img src={service.image} alt={service.title} width={"100%"}/>
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p>{service.description}</p>
          </UpdateFollower>
        ))}
      </div>
    </UpdateFollower>
  );
};

export default Blog;
