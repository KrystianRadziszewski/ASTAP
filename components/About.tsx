import React from 'react';

const About = () => {
	return (
		<>
			<div id="about" className=" bg-slate-200 flex flex-col w-full py-32  tracking-wide text-center items-center">
				<h1 className=" h1-gold">O nas</h1>
			</div>
			<div className=" h-auto pb-28 bg-slate-200 px-6 font-myfont md:flex-row text-xl xl:text-2xl">
				<p className=" text-center max-w-screen-xl mx-auto">
					<i>
						<u>
							<b>Jesteśmy producentem mebli tapicerowanych na rynku od ponad 20 lat</b>
						</u>
						. Zdobyliśmy ogromne doświadczenie w projektowaniu i tworzeniu wysokiej jakości mebli, które spełniają oczekiwania naszych klientów. Długoletnia obecność na rynku to dowód profesjonalizmu
						i zaangażowania w branży meblarskiej.
						<br />
						<br />
						Dzięki szerokiemu doświadczeniu i wiedzy o trendach w designie wnętrz, jesteśmy w stanie dostarczać meble, które są zarówno stylowe, jak i funkcjonalne. Produkty są starannie wykonywane, z
						użyciem wysokiej jakości materiałów i dbałością o każdy szczegół. Staramy się zaspokajać indywidualne preferencje klientów, oferując szeroki wybór wzorów, kolorów i rozmiarów.
						<br />
						<br />
						Cieszymy się również dobrą opinią wśród naszych klientów. Dążymy do zapewnienia doskonałej obsługi klienta i satysfakcji z zakupów, co przyczynia się do naszej reputacji jako wiarygodnego
						i godnego zaufania dostawcy mebli tapicerowanych. Jesteśmy dumni z naszych osiągnięć i z pasją kontynuujemy rozwijanie naszej marki, tworząc innowacyjne i piękne meble, które spełniają
						oczekiwania naszych klientów.
					</i>
				</p>
			</div>
		</>
	);
};

export default About;
