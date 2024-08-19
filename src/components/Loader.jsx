import React from "react";
import ReactLoading from "react-loading";

const Loader = () => {
	return (
		<div className='absolute top-0 left-0 z-[20] flex justify-center items-center min-h-screen w-full'>
			<ReactLoading type={"cylon"} color={"#d03be3"} height={150} width={70} />
		</div>
	);
};

export default Loader;
