import { Button } from "@chakra-ui/react";
import { deleteField, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../../config/firebase";
import UpdateOtherServiceModal from "./modal/UpdateOtherServiceModal";

const OtherServiceCard = ({ details }) => {
	const [loading, setLoading] = useState(false);

	const handleDeleteService = async id => {
		if (window.confirm("Are you sure you want to delete this service?")) {
			setLoading(true);
			try {
				const collectionRef = doc(db, "starmicroart", "otherServices");
				await updateDoc(collectionRef, {
					[id]: deleteField(),
				});
				toast.success("Service successfully deleted");
				setLoading(false);
			} catch (error) {
				setLoading(false);
				toast.error("Error deleting service: " + error.message);
			}
		}
	};

	return (
		<div className='bg-light text-black_c border border-primary p-5 rounded-lg space-y-1 flex flex-col grow w-[280px]'>
			<h2 className='text-lg'>{details.title}</h2>
			<div className='flex items-center justify-between'>
				<span className='text-xl font-bold'>${details.price}</span>
				<div className='flex gap-2'>
					{/* <Button size='sm' colorScheme='purple' marginTop={2}>
						<span className='font-normal'>Edit</span>
					</Button> */}

					<UpdateOtherServiceModal details={details} />

					<Button
						onClick={() => handleDeleteService(details?.id)}
						isLoading={loading}
						isDisabled={loading}
						size='sm'
						colorScheme='red'
						marginTop={2}
					>
						<span className='font-normal'>Delete</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default OtherServiceCard;
