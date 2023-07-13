import React from 'react';
import CardGallery from './Cards/CardGallery';
import img1 from '@/public/images/galery/kanapa.jpg';
import img2 from '@/public/images/galery/img4.jpg';
import img3 from '@/public/images/galery/sionek.jpg';
import img4 from '@/public/images/galery/ściana.jpeg';
import img5 from '@/public/images/galery/wneka.jpg';
import img6 from '@/public/images/galery/łóżko.jpg';
import img7 from '@/public/images/galery/img7.jpg';
import img8 from '@/public/images/galery/naroznik-salon.jpg';
import img9 from '@/public/images/galery/kanapa-kolorowa.jpg';
import img10 from '@/public/images/galery/img8.jpg';
import img11 from '@/public/images/galery/img9.jpg';
import img12 from '@/public/images/galery/img5.jpg';

const Gallery = () => {
	return (
		<>
			<div id="gallery" className=" bg-slate-200 flex flex-col w-full py-32  tracking-wide text-center items-center">
				<h1 className=" h1-gold">Galeria</h1>
			</div>
			<div className="bg-slate-200">
				<div className="  grid grid-cols-2 md:grid-cols-3 gap-8 w-full mx-auto px-10 pb-32 h-auto   items-center justify-center max-w-screen-lg">
					<CardGallery src={img1} alt={'img-sofa'} />
					<CardGallery src={img2} alt={'img-sofa'} />
					<CardGallery src={img3} alt={'img-sofa'} />
					<CardGallery src={img4} alt={'img-sofa'} />
					<CardGallery src={img5} alt={'img-sofa'} />
					<CardGallery src={img6} alt={'img-sofa'} />
					<CardGallery src={img7} alt={'img-sofa'} />
					<CardGallery src={img8} alt={'img-sofa'} />
					<CardGallery src={img9} alt={'img-sofa'} />
					<CardGallery src={img10} alt={'img-sofa'} />
					<CardGallery src={img11} alt={'img-sofa'} />
					<CardGallery src={img12} alt={'img-sofa'} />
				</div>
			</div>
		</>
	);
};

export default Gallery;
