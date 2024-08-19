import React from "react";
import {
	FaCalendarAlt,
	FaFacebook,
	FaInstagram,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaWhatsapp,
	FaYoutube,
} from "react-icons/fa";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
	return (
		<div className='py-20 pt-40 container mx-auto'>
			<div className='text-center mx-auto'>
				<h2 className='text-3xl md:text-4xl font-secondary text-primary'>
					Contacts
				</h2>
				<h3 className='text-2xl md:text-3xl mt-2 mb-3 md:mb-4'>
					Better yet, see us in person!
				</h3>
				<p className='text-center mx-auto w-3/4 md:w-2/3 py-2 md:py-3'>
					We love our customers, so feel free to visit during normal business
					hours for an unforgettable Permanent Makeup experience. The Best SMP
					near me.
				</p>
				<img
					src='https://ld-wp73.template-help.com/wordpress/prod_14770/v1/wp-content/uploads/2020/11/after-text.png'
					className='mx-auto inline-block'
					alt=''
				/>
			</div>
			<div className='flex flex-col lg:flex-row justify-between items-center p-8 px-5 md:px-20 mt-10'>
				<div className='flex flex-col items-center mb-8 lg:mb-0 justify-center space-y-3'>
					<a
						rel='noopener noreferrer'
						href='https://wa.me/12404649052'
						target='_blank'
						className='flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300'
					>
						<FaWhatsapp size={24} />
						<span>Message us on WhatsApp</span>
					</a>
					<br />
					<div className='flex flex-col items-center text-gray-700 pb-5 space-y-1'>
						<FaMapMarkerAlt className='text-primary mr-2' size={20} />
						<p>2130 Fulton Street, San Diego, CA 94117-1080</p>
					</div>
					<div className='flex flex-col items-center text-gray-700 pb-5 space-y-1'>
						<FaCalendarAlt className='text-primary mr-2' size={20} />
						<p>Mon–Sat: 9am–8pm, Sun: 11am–5pm</p>
					</div>
					<div className='flex flex-col items-center text-gray-700 pb-5 space-y-1'>
						<FaPhoneAlt className='text-primary mr-2' size={20} />
						<p>1-800-1234-567</p>
					</div>
					<div className='flex space-x-4'>
						<FaFacebook
							className='text-gray_c hover:text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
							size={24}
						/>
						<FaInstagram
							className='text-gray_c hover:text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
							size={24}
						/>
						<FaYoutube
							className='text-gray_c hover:text-primary flex items-center justify-center w-8 h-8 p-1.5 hover:border border-primary rounded-full'
							size={24}
						/>
					</div>
				</div>
				<div className='w-full lg:w-1/2'>
					<ContactForm />
				</div>
			</div>

			<div className='mt-10 rounded-lg overflow-hidden'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.9085567188367!2d-77.12023552458619!3d39.062998036916895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cdcc38118699%3A0xe99951596b01420a!2s5751-D%20Fishers%20Ln%2C%20Rockville%2C%20MD%2020852%2C%20USA!5e0!3m2!1sen!2sbd!4v1722329956468!5m2!1sen!2sbd'
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					className='w-full h-[300px] md:h-[350px]'
				></iframe>
			</div>
		</div>
	);
};

export default Contact;
