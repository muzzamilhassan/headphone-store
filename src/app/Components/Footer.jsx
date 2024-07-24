import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { fadeUp } from './Service';
import Link from 'next/link';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <UpdateFollower mouseOptions={{
       
        backgroundColor: "black",
        zIndex: 99999,
        followSpeed: 1.5,
        mixBlendMode: "difference"}}
        >
           <footer>
        <div className="footer-container">
            <motion.div
            variants={fadeUp(0.7)}
            initial="hidden"
            whileInView="show"
            className="footer-section pr-4">
                <h3>Headphone Store</h3>
                <ul>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus quia voluptates eligendi quasi minima iure, voluptate vel!</p>
                    <li><span>Phone:</span>+923055779207</li>
                    <li>Topi Galla Swabi(Tarbela)</li>
            
                </ul>
            </motion.div>
            <motion.div
            variants={fadeUp(0.9)}
            initial="hidden"
            whileInView="show"
            className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#"><i className="fas fa-info-circle"></i>Categaious</a></li>
                    <li><a href="#"><i className="fas fa-envelope"></i> Contact</a></li>
                    <li><a href="#"><i className="fas fa-shield-alt"></i> Blogs</a></li>
                    <li><a href="#"><i className="fas fa-file-contract"></i>About us</a></li>
                </ul>
            </motion.div>
            <motion.div
            variants={fadeUp(1.1)}
            initial="hidden"
            whileInView="show"
             className="footer-section">
                <h3>Our Services</h3>
                <ul>
                    <li><a href="#"><i className="fas fa-laptop-code"></i>Contact us</a></li>
                    <li><a href="#"><i className="fas fa-mobile-alt"></i> Privacy Policy</a></li>
                    <li><a href="#"><i className="fas fa-chart-line"></i>Terms of Services</a></li>
                </ul>
            </motion.div>
            <motion.div
            variants={fadeUp(1.3)}
            initial="hidden"
            whileInView="show"
             className="footer-section">
                <h3>Connect With Us</h3>
                <div className="social-links text-[35px]">
                    <Link href={"/"}><FaFacebook/></Link>
                    <Link href={"/"}><FaLinkedin/></Link>
                    <Link href={"/"}><FaInstagramSquare/></Link>
                    <Link href={"/"}><FaGoogle/></Link>
                </div>
                <div className="newsletter">
                    <h4>Subscribe to Our Newsletter</h4>
                    <form>
                        <input type="email" placeholder="Your Email" aria-label="Email for newsletter"/>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </motion.div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 Your Professional Company. All rights reserved.|| muzzamilhassan302@gmail.com</p>
            <a href="#" className="back-to-top" aria-label="Back to top"><i className="fas fa-chevron-up"></i></a>
        </div>
    </footer>
        </UpdateFollower>
  )
}

export default Footer