import React from "react";

const Service = () => {
	const beautyParloursAndSalons = [
		{
			image: "https://placehold.co/600x400",
			title: "Glamour Beauty Salon",
			description: "A luxurious salon offering top-notch beauty treatments.",
			price: "$100",
			time: "2 hours",
		},
		{
			image: "https://placehold.co/600x400",
			title: "Elegance Beauty Parlour",
			description:
				"A modern beauty parlour specializing in skincare and haircare.",
			price: "$120",
			time: "1.5 hours",
		},
		{
			image: "https://placehold.co/600x400",
			title: "Radiant Salon",
			description: "A serene salon providing a range of beauty services.",
			price: "$90",
			time: "2 hours",
		},
		{
			image: "https://placehold.co/600x400",
			title: "Chic Beauty Lounge",
			description: "A trendy lounge for all your beauty needs.",
			price: "$110",
			time: "2.5 hours",
		},
		{
			image: "https://placehold.co/600x400",
			title: "Lush Salon & Spa",
			description:
				"A full-service salon and spa offering personalized services.",
			price: "$130",
			time: "3 hours",
		},
		{
			image: "https://placehold.co/600x400",
			title: "Bliss Beauty Parlour",
			description: "A cozy parlour with a focus on natural beauty treatments.",
			price: "$80",
			time: "1.5 hours",
		},
		{
			image: "https://placehold.co/600x400",
			title: "Vogue Beauty Salon",
			description: "An upscale salon with a team of expert beauticians.",
			price: "$150",
			time: "2 hours",
		},
		{
			image: "https://placehold.co/600x400",
			title: "Serenity Beauty Lounge",
			description: "A peaceful lounge offering a variety of beauty services.",
			price: "$95",
			time: "1.5 hours",
		},
		{
			image: "https://placehold.co/600x400",
			title: "Elite Beauty Salon",
			description: "A high-end salon known for its exceptional services.",
			price: "$140",
			time: "2.5 hours",
		},
		{
			image: "https://placehold.co/600x400",
			title: "Graceful Beauty Parlour",
			description: "A welcoming parlour offering quality beauty treatments.",
			price: "$100",
			time: "2 hours",
		},
	];

	return (
		<div className='py-40 container mx-auto min-h-screen'>
			<h1 className='text-center text-primary text-2xl font-semibold'>
				Online Appointment
			</h1>

			<div className='flex flex-wrap gap-5 items-stretch justify-center mt-10'>
				{beautyParloursAndSalons
					?.sort((obj1, obj2) => {
						if (obj1.image === null && obj2.image !== null) {
							return 1;
						} else if (obj1.image !== null && obj2.image === null) {
							return -1;
						} else {
							return 0;
						}
					})
					.map(obj => {
						return (
							<div
								key={obj.image}
								className={`grow max-w-[300px] relative border border-primary rounded-lg overflow-hidden ${
									obj.image === null && "grid grid-cols-3 gap-5"
								}`}
							>
								{obj.image && (
									<img src={obj.image} alt='' className='col-span-1' />
								)}
								<div
									className={`${obj.image === null && "col-span-2"} ml-2 p-2`}
								>
									<h3 className='text-lg font-medium'>{obj.title}</h3>
									<h3 className='mb-2'>{obj.description}</h3>
									<div className='flex items-center justify-between'>
										<h3 className='text-black_c/90'>
											{obj.time} | <span>{obj.price} </span>
										</h3>
										<button className='absolute bottom-2 right-0 bg-gradient-to-r mr-5 from-primary to-secondary hover:from-white_c hover:to-white_c transition-all duration-300 ease-linear border border-transparent hover:border-primary hover:text-primary text-white_c py-1 px-5 rounded-full mt-2 text-sm'>
											Book
										</button>
									</div>
								</div>
							</div>
						);
					})}
			</div>

			<div className='mt-20 px-5'>
				<h1 className='text-2xl text-primary font-bold text-center mb-5'>
					Other Services
				</h1>
				<div className='flex flex-wrap items-center gap-10 gap-y-5 justify-center'>
					<div className="bg-secondary text-white p-5 rounded-lg space-y-1 flex flex-col grow w-[280px]">
						<h2 className="text-lg">Eyebrow Lamination / Wax / Tint</h2>
						<span className="text-xl font-bold">$65+</span>
					</div>
					<div className="bg-secondary text-white p-5 rounded-lg space-y-1 flex flex-col grow w-[280px]">
						<h2 className="text-lg">Eyebrow Lamination / Wax / Tint</h2>
						<span className="text-xl font-bold">$65+</span>
					</div>
					<div className="bg-secondary text-white p-5 rounded-lg space-y-1 flex flex-col grow w-[280px]">
						<h2 className="text-lg">Eyebrow Lamination / Wax / Tint</h2>
						<span className="text-xl font-bold">$65+</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
