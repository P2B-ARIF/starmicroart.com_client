import React from "react";
import img from "./../../assets/images/h1.jpg";
import { Button } from "@chakra-ui/react";
import DiscountModel from "./modal/DiscountModel";
import no_photo from "./../../assets/images/no_photo2.jpg";

const Discount = ({ discountDetails }) => {
	const { title, description, imgUrl, discount } = discountDetails || {};

	return (
		<div>
			<h3 className='font-semibold mb-2 text-lg text-black_c'>Discount</h3>
			<div className='grid grid-cols-4 gap-5'>
				<img
					src={imgUrl || no_photo}
					alt=''
					className='col-span-1 rounded-lg w-full h-[200px] object-cover'
				/>
				<div className='col-span-3 space-y-1'>
					<h1 className='font-bold text-2xl text-black_c'>{discount}</h1>
					<h3 className='text-lg'>{title}</h3>
					<p className='text-md text-gray_500'>{description}</p>
					<DiscountModel discountDetails={discountDetails} />
				</div>
			</div>
		</div>
	);
};

export default Discount;
