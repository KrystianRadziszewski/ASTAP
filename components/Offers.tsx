import React from 'react';
import CardOffer from './Cards/CardOffer';
import { LuSofa } from 'react-icons/lu';
import { LiaBedSolid } from 'react-icons/lia';
import { PiArmchair } from 'react-icons/pi';
import { CgGym } from 'react-icons/cg';
import { BsShop, BsFillPostageFill, BsGem } from 'react-icons/bs';
import { BiChair, BiCabinet, BiDrink } from 'react-icons/bi';
import { IoBusinessOutline } from 'react-icons/io5';

const Offers = () => {
	return (
		<>
			<div id='offers' className="  flex flex-col w-full py-32  tracking-wide text-center items-center">
				<h1 className=" h1-gold">Oferta</h1>
			</div>
			<div className=" grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto px-10 mb-32  h-auto max-w-screen-xl">
				<CardOffer
					icon={BsFillPostageFill}
					title="Ściany & wnęki"
					description=" Nasze ściany tapicerowane są starannie wykonane z wysokiej jakości tkanin tapicerskich o różnorodnych wzorach i kolorach, dzięki czemu można stworzyć unikalną i efektowną przestrzeń, dodając wyjątkowego charakteru i stylu do Twojego wnętrza."
				/>
				<CardOffer icon={LuSofa} title="Narożniki & Sofy" description="Oferujemy szeroki wybór wygodnych narożników oraz sof, które doskonale pasują do różnych wnętrz. " />
				<CardOffer
					icon={LiaBedSolid}
					title="Łóżka tapicerowane"
					description="Produkujemy wysokiej jakości łóżka tapicerowana, zapewniające komfortowy sen i elegancki wygląd, dostosowany do potrzeb klienta."
				/>
				<CardOffer icon={CgGym} title="Siłownie" description="Wymiana tapicerki, jej odświeżenie, czy też naprawa ma ogromny wpływ na jakość oraz komfort użytkowania mebli sportowych" />
				<CardOffer icon={BiDrink} title="Restauracje & PUB'y & Hotele" description="Dostarczamy wygodne i funkcjonalne rozwiązania dla branży komeryjnej." />

				<CardOffer
					icon={BsGem}
					title="Tapicerowanie sprzętów medycznych"
					description="Profesjonalna wymiana tapicerek medycznych, wykonywana zawsze z wielką precyzją i starannością oraz ogromną dbałością o estetykę i komfort użytkowania."
				/>
				<CardOffer icon={IoBusinessOutline} title="Produkcja hurtowa" description="Realizujemy zamówienia hurtowe z najwyższą starannością i dbałością o klienta." />
				<CardOffer icon={BiChair} title="Krzesła kuchenne" description="Wymieniamy również obicia w zużytych krzesłach kuchennych i fotelach." />

				<CardOffer
					icon={PiArmchair}
					title="Meble klasyczne"
					description="Szeroki wybór materiałów sprawia, że meble klasyczne będą doskonałym uzupełnieniem Twojego wnętrza, dodając mu wyjątkowego uroku i prestiżu."
				/>
			</div>
		</>
	);
};

export default Offers;
