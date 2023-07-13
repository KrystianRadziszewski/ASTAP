import React from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';
import Link from 'next/link';

const Contact = () => {
	return (
		<>
			<div id="contact" className="  flex flex-col w-full pt-32 pb-10 tracking-wide text-center items-center">
				<h1 className=" h1-gold">Kontakt</h1>
			</div>
			<div className=" flex flex-col lg:flex-row gap-8 lg:mx-10 justify-around text-xl py-6">
				<div className=" ml-10 border-l-4 pl-10 border-[#c49d39] text-slate-300 ">
					<h3 className=" text-2xl text-[#c49d39] font-semibold">Adres Firmy:</h3>
					<p>P.P.H.U ASTAP</p>
					<p>ul. Leszczynowa 5</p>
					<p>15-378 Śródlesie</p>
				</div>
				<div className=" ml-10 border-l-4 pl-8 border-[#c49d39] text-slate-300">
					<h3 className="text-2xl text-[#c49d39] font-semibold">Dane kontaktowe:</h3>
					<p>Artur Skutnik</p>
					<p>Telefon: 602 337 075</p>
					<p>E-mail: amebel29@wp.pl</p>
				</div>
				<div className=" ml-10 border-l-4 pl-8 border-[#c49d39] text-slate-300">
					<h3 className="text-2xl text-[#c49d39] font-semibold ">Godziny pracy:</h3>
					<p>Poniedziałek-Piątek: 7:00-16:00</p>
				</div>
			</div>
			<div className=" mx-4 md:mx-20 py-6">
				<h3 className=" md:pl-10 text-2xl text-[#c49d39] font-semibold">Lokalizacja</h3>
				<div className=" my-16 border-4 flex">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d599.1334093746331!2d23.126796261634052!3d53.08265048222578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ff97fff8c2fe3%3A0xc0ad9174f699977a!2sLeszczynowa%205%2C%2015-378%20%C5%9Ar%C3%B3dlesie!5e0!3m2!1spl!2spl!4v1689241352072!5m2!1spl!2spl"
						width={'100%'}
						height="600"
						allowFullScreen
						referrerPolicy="no-referrer-when-downgrade"
						style={{ border: 0 }}
						loading="lazy"
					/>
				</div>
				<div className=" flex justify-end py-4 mr-10">
					<Link href="/">
						<div className=" cursor-pointer">
							<BsArrowUpCircle size={40} />
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Contact;
