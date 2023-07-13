import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Navbar from '@/components/Navbar';
import Offers from '@/components/Offers';
import Welcome from '@/components/Welcome';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>ASTAP - producent mebli tapicerowanych</title>
				<meta name="description" content="Astap, Artur Skutnik, Producent mebli tapicerowanych, Białystok, Meble na zamówienie, Meble na wymiar" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navbar />
			<Welcome />
			<About />
			<Offers />
			<Gallery />
			<Contact />
			<Footer />
		</>
	);
}
