import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import AboutUs from "../../components/AboutUs";
import Advantages from "../../components/Advantages";
import DiscountOffer from "../../components/DiscountOffer";
import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";
import OurTeam from "../../components/OurTeam";
import SpaServices from "../../components/SpaServices";

const Home = () => {
	const { services, controller } = useSelector(state => state.starmicroart);

	return (
		<motion.div>
			<div className='space-y-20'>
				<Hero heroImages={controller?.hero} />
				<SpaServices services={services} />
				<Advantages />
			</div>

			<DiscountOffer discount={controller?.discount} />
			<Gallery galleryImages={controller?.gallery} />
			<AboutUs />	
			<OurTeam teamMembers={controller?.team} />
		</motion.div>
	);
};

export default Home;
