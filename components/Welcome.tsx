import Image from 'next/image';
import React from 'react';
import img from '@/public/images/sofa.jpg';

const Welcome = () => {
	return (
		<>
			<div className=" w-full h-screen ">
				<Image src={img} alt="Bg-img" layout="fill" objectFit="cover" className=" sepia" />
			</div>
			<div id="welcome" className="flex flex-col w-full py-32 tracking-wide text-center items-center">
				<h1 className=" h1-gold pb-2 border-b-4 border-[#daa520] md:text-5xl">Powitanie</h1>
				<p className=" font-myfont pt-7  px-10 xl:px-48 text-white  md:tracking-wider text-xl  xl:text-2xl">
					Witajcie na stronie firmy{' '}
					<u>
						<strong className=" font-bold ">ASTAP</strong>
					</u>
					. Jesteśmy producentem mebli tapicerowanych. Znajdą państwo tutaj informację odnośnie naszej działalności.
				</p>
			</div>
		</>
	);
};

export default Welcome;
