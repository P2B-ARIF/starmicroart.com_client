import React from "react";
import Discount from "../../components/dashboard/Discount";
import GalleryUpdate from "../../components/dashboard/GalleryUpdate";
import HeroImages from "../../components/dashboard/HeroImages";
import TeamUpdate from "../../components/dashboard/TeamUpdate";
import { useSelector } from "react-redux";

const Controller = () => {
	const { controller } = useSelector(state => state.starmicroart);
	const { discount, gallery, hero, team } = controller || {};

	return (
		<div className='space-y-5 mb-10'>
			<HeroImages hero={hero} />
			{discount && <Discount discountDetails={discount} />}
			{discount && <GalleryUpdate gallery={gallery} />}
			{team && <TeamUpdate team={team} />}
		</div>
	);
};

export default Controller;
