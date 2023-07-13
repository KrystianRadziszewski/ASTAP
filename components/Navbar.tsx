import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
	const [navMobile, setNavMobile] = useState(false);

	const handleNav = () => {
		setNavMobile(!navMobile);
	};

	return (
		<div className=" bg-stone-800 fixed w-full h-32 z-50">
			<div className=" text-white  flex justify-between items-center w-full h-full px-4 md:px-20 2xl:px-32">
				<div className="text-md border-[0.5px] p-1 md:border-none md:text-lg cursor-pointer">
					<Link href="/">
						<p className=" uppercase md:text-7xl font-bold tracking-widest text-[#c49d39] ">Astap</p>
						<p>
							<i>Artur Skutnik - tapicer Białystok</i>
						</p>
					</Link>
				</div>
				<nav className=" w-auto text-xl">
					<ul className=" hidden xl:flex  uppercase">
						<li className=" nav-item">
							<Link href="/#welcome">Powitanie</Link>
						</li>
						<li className=" nav-item ">
							<Link href="/#about">O nas</Link>
						</li>
						<li className="nav-item">
							<Link href="/#offers">Oferta</Link>
						</li>
						<li className="nav-item">
							<Link href="/#gallery">Galeria</Link>
						</li>
						<li className="nav-item">
							<Link href="/#contact">Kontakt</Link>
						</li>
					</ul>
					{/* HAMBURGER ICON */}
					<div onClick={handleNav} className=" xl:hidden cursor-pointer">
						<AiOutlineMenu size={35} />
					</div>
				</nav>
			</div>

			{/* MOBILE NAV */}

			<div onClick={handleNav} className={navMobile ? ' fixed left-0 top-0 w-full h-full bg-black/70' : 'transition'}>
				<div className={navMobile ? ' bg-stone-800 fixed left-0 top-0 w-[75%] h-screen p-10 duration-500' : 'fixed h-screen left-[-100%] top-0 w-[75%] ease-in duration-500'}>
					<div onClick={handleNav} className=" cursor-pointer absolute text-white right-10">
						<AiOutlineClose size={30} />
					</div>
					<ul className="text-white uppercase flex flex-col items-center my-20">
						<Link href="/#welcome">
							<li className=" nav-item-mobile ">Powitanie</li>
						</Link>
						<Link href="/#about">
							<li className=" nav-item-mobile ">O nas</li>
						</Link>
						<Link href="/#offers">
							<li className="nav-item-mobile">Oferta</li>
						</Link>
						<Link href="/#gallery">
							<li className="nav-item-mobile">Galeria</li>
						</Link>
						<Link href="/#contact">
							<li className="nav-item-mobile">Kontakt</li>
						</Link>
					</ul>
					<hr />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
