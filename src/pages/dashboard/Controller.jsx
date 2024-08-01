import React from "react";
import HeroImages from "../../components/dashboard/HeroImages";
import Discount from "../../components/dashboard/Discount";
import GalleryUpdate from "../../components/dashboard/GalleryUpdate";
import TeamUpdate from "../../components/dashboard/TeamUpdate";

const Controller = () => {
	return (
		<div className='space-y-5 mb-10'>
			<HeroImages />
			<Discount />
			<GalleryUpdate />
			<TeamUpdate />
		</div>
	);
};

export default Controller;
