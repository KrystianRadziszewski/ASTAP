import React from 'react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className=" p-4 text-center text-slate-400">
			<hr className="text-slate-600" />
			<p className=" text-slate-400">&copy; {currentYear} ASTAP Artur Skutnik. Wszelkie prawa zastrzeżone. | Made by Krystian Radziszewski</p>
		</footer>
	);
};

export default Footer;
