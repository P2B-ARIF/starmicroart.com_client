import React from "react";
import img from "./../../assets/images/h1.jpg";
import { Button } from "@chakra-ui/react";

const HeroImages = () => {
	return (
		<div>
			<h3 className='font-semibold mb-2 text-lg text-black_c'>Hero Images</h3>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
				{[1, 2, 3].map(index => (
					<div key={index} className="border shadow p-3 rounded-lg">
						<img src={img} alt='' className='rounded-lg h-[220px] w-full' />
						<Button size={"sm"} colorScheme='purple' marginTop={2}>
							<span className='font-normal'>Update Image</span>
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};

export default HeroImages;
