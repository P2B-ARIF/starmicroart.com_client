import { Button } from "@chakra-ui/react";
import React from "react";
import img from "./../../assets/images/h1.jpg";

const GalleryUpdate = () => {
	return (
		<div>
			<h3 className='font-semibold mb-2 text-lg text-black_c'>Gallery</h3>
			<div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
				{[1, 2, 3, 4, 5].map(index => (
					<div
						key={index}
						className='shadow overflow-hidden rounded-lg relative'
					>
						<img
							src={img}
							alt=''
							className='rounded-lg h-[220px] w-full object-cover'
						/>
						<div className='absolute bottom-2 right-2'>
							<Button size={"sm"} colorScheme='purple'>
								<span className='font-normal'>Edit</span>
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default GalleryUpdate;
