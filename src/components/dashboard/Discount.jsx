import React from "react";
import img from "./../../assets/images/h1.jpg";
import { Button } from "@chakra-ui/react";

const Discount = () => {
	return (
		<div>
			<h3 className='font-semibold mb-2 text-lg text-black_c'>Discount</h3>
			<div className='grid grid-cols-4 gap-5'>
				<img src={img} alt='' className='col-span-1 rounded-lg' />
				<div className='col-span-3'>
					<h1 className='font-bold text-2xl text-black_c'>30% OFF</h1>
					<h3 className='text-lg'>for All Messages</h3>
					<p className='text-md text-gray_500'>
						Constant stress and tension can really wear the body out. Relieve
						the pain with one or more of our many massage services at a very
						profitable discount.
					</p>

					<Button size={"sm"} colorScheme='purple' marginTop={2}>
						<span className='font-normal'>Update Offer</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Discount;
