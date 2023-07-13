import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CardGalleryProps {
	src: StaticImageData;
	alt: string;
}

const CardGallery: React.FC<CardGalleryProps> = ({ src, alt }) => {
	return (
		<div className=" relative h-60">
			<Image src={src} alt={alt} fill objectFit="cover" className=" hover:scale-[1.15] transition duration-300 ease-in" />
		</div>
	);
};

export default CardGallery;
