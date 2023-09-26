import React from 'react';

interface CardOfferProps {
	icon: any;
	title: string;
	description: string;
}

const CardOffer: React.FC<CardOfferProps> = ({ icon, title, description }) => {
	let SelectIcon = icon;

	return (
		<div className="  text-slate-100 font-myfont mb-4">
			<div className="flex flex-col justify-center items-center ">
				<SelectIcon size={40} className="text-[#c49d39] mb-1" />
				<h2 className="text-center mb-6 tracking-wider text-xl text-[#f4d073d2]">{title}</h2>
			</div>
			<div className=" text-center tracking-wide">{description}</div>
		</div>
	);
};

export default CardOffer;
