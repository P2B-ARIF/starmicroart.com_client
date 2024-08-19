import React from "react";
import { useSelector } from "react-redux";
import ServiceCard from "../../components/dashboard/DServiceCard";
import OtherServiceCard from "../../components/dashboard/OtherServiceCard";

const Services = () => {
	const { services, otherServices } = useSelector(state => state.starmicroart);

	return (
		<div>
			<h3 className='font-semibold mb-2 text-lg text-black_c'>ALL SERVICES</h3>
			<div className='grid grid-cols-2 lg:grid-cols-3 gap-5 items-stretch justify-center'>
				{services &&
					Object.entries(services)?.map(([key, details]) => (
						<ServiceCard key={key} details={{ ...details, id: key }} />
					))}
			</div>

			<div className='mt-10'>
				<h3 className='font-semibold mb-2 text-lg text-black_c'>
					Other Services
				</h3>

				<div className='flex flex-wrap items-center gap-10 gap-y-5 justify-center'>
					{otherServices &&
						Object.entries(otherServices)?.map(([key, details]) => (
							<OtherServiceCard key={key} details={{ ...details, id: key }} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Services;
