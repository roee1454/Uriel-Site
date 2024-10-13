'use client';

import { motion } from 'framer-motion';

const fruitSvgs = [
  // Apple SVG
  <svg key="apple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <path d="M50 90c-27.6 0-50-22.4-50-50s22.4-50 50-50 50 22.4 50 50-22.4 50-50 50z" fill="#ff6347"/>
    <path d="M50 0c-5.5 0-10 4.5-10 10v10c0 5.5 4.5 10 10 10s10-4.5 10-10v-10c0-5.5-4.5-10-10-10z" fill="#228b22"/>
  </svg>,
  // Orange SVG
  <svg key="orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="50" cy="50" r="50" fill="#ffa500"/>
    <path d="M50 10c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z" fill="#ff8c00"/>
  </svg>,
  // Grape SVG
  <svg key="grape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="50" cy="50" r="20" fill="#8e44ad"/>
    <circle cx="30" cy="70" r="20" fill="#9b59b6"/>
    <circle cx="70" cy="70" r="20" fill="#8e44ad"/>
    <path d="M50 0v30" stroke="#228b22" strokeWidth="5"/>
  </svg>,
];

const HelloWorld = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rtl">
			<motion.h1
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-6xl font-bold text-white mb-4"
			>
				פירות מתוקים
			</motion.h1>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.8 }}
				className="text-xl text-white mb-8"
			>
				גלו את מבחר הפירות הטריים והעסיסיים שלנו!
			</motion.p>
			<div className="flex space-x-8 flex-row-reverse">
				{fruitSvgs.map((svg, index) => (
					<motion.div
						key={index}
						initial={{ scale: 0, rotate: -180 }}
						animate={{ scale: 1, rotate: 0 }}
						transition={{ delay: 0.8 + index * 0.2, type: 'spring', stiffness: 260, damping: 20 }}
					>
						{svg}
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default HelloWorld;
