import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import img from "./../../assets/images/h1.jpg";
import GalleryModel from "./modal/GalleryModel";

const GalleryUpdate = ({ gallery }) => {
	const [open, setOpen] = useState(false);
	const [details, setDetails] = useState(null);

	// console.log(details);
	return (
		<div>
			<h3 className='font-semibold mb-2 text-lg text-black_c'>Gallery</h3>
			<div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
				{Object.entries(gallery).map(([key, value]) => (
					<div key={key} className='shadow overflow-hidden rounded-lg relative'>
						<img
							src={value}
							alt=''
							className='rounded-lg h-[220px] w-full object-cover'
						/>
						<div className='absolute bottom-2 right-2'>
							{/* <Button size={"sm"} colorScheme='purple'>
								<span className='font-normal'>Edit</span>
							</Button> */}

							<Button
								onClick={() => {
									setOpen(true);
									setDetails({ key, value });
								}}
								size={"sm"}
								colorScheme='purple'
								marginTop={2}
							>
								<span className='font-normal'>Edit</span>
							</Button>
						</div>
					</div>
				))}
				{open && details && (
					<GalleryModel open={open} setOpen={setOpen} details={details} />
				)}
			</div>
		</div>
	);
};

export default GalleryUpdate;
