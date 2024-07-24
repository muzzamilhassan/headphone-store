"use client"
import { UpdateFollower } from "react-mouse-follower";
import Navbar from "./Components/Navbar";
import { MouseFollower } from 'react-mouse-follower';
import Header from "./Components/Header";
import Service from "./Components/Service";
import Latest from "./Components/Latest";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <div>
      <MouseFollower/>

      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Navbar />
        <Header/>
      </UpdateFollower>
      <UpdateFollower mouseOptions={{
        backgroundColor: "black",
        zIndex: 999,
        followSpeed: 1.5,
      }}>
        <Service />
        <Latest/>
        <Blog/>
        <Footer/>
      </UpdateFollower>
    </div>
  );
}
