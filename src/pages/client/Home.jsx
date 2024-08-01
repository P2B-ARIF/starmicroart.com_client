import React from "react";
import AboutUs from "../../components/AboutUs";
import Advantages from "../../components/Advantages";
import DiscountOffer from "../../components/DiscountOffer";
import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";
import OurTeam from "../../components/OurTeam";
import SpaServices from "../../components/SpaServices";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
		
		>
			<div className='space-y-20'>
				<Hero />
				<SpaServices />
				<Advantages />
			</div>

			<DiscountOffer />
			<Gallery />
			<AboutUs />
			<OurTeam />
		</motion.div>
	);
};

export default Home;
