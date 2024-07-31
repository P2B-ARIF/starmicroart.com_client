import React from "react";
import AboutUs from "../../components/AboutUs";
import Advantages from "../../components/Advantages";
import DiscountOffer from "../../components/DiscountOffer";
import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";
import OurTeam from "../../components/OurTeam";
import SpaServices from "../../components/SpaServices";

const Home = () => {
	return (
		<>
			<div className='space-y-20'>
				<Hero />
				<SpaServices />
				<Advantages />
			</div>

			<DiscountOffer />
			<Gallery />
			<AboutUs />
			<OurTeam />
		</>
	);
};

export default Home;
