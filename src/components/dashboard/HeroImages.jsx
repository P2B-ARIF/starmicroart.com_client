import React, { useState } from "react";
import img from "./../../assets/images/h1.jpg";
import HeroImageModal from "./modal/HeroImageModal";
import { Button } from "@chakra-ui/react";

const HeroImages = ({ hero }) => {
	const [open, setOpen] = useState(false);
	const [count, setCount] = useState(null);
	const [imgUrl, setImgUrl] = useState(null);

	return (
		<div>
			<h3 className='font-semibold mb-2 text-lg text-black_c'>Hero Images</h3>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
				{hero &&
					Object.entries(hero)?.map(([key, value]) => {
						return (
							<div key={key} className='border shadow p-3 rounded-lg'>
								<img
									src={value}
									alt=''
									className='rounded-lg h-[220px] w-full object-cover'
								/>
								<Button
									onClick={() => {
										setOpen(true);
										setCount(key);
										setImgUrl(value);
									}}
									size={"sm"}
									colorScheme='purple'
									marginTop={2}
								>
									<span className='font-normal'>Update Image</span>
								</Button>
							</div>
						);
					})}
				{open && count && (
					<HeroImageModal
						open={open}
						setOpen={setOpen}
						count={count}
						imgUrl={imgUrl}
						setImgUrl={setImgUrl}
					/>
				)}
			</div>
		</div>
	);
};

export default HeroImages;
