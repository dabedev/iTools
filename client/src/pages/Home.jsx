import React from 'react';

import '@styles/Home.scss';

function Home() {
	return (
		<div className="home">
			<section className='about'>
				<h1>What's iTools?</h1>
				Our API provides a wide range of functionalities to help developers analyze and compare data. With our API, you can measure, analyze,
				and compare different types of data, from numerical data to text. Additionally, we also offer the ability to set up webhooks to receive
				real-time updates on statistical charts. With our API, you can easily integrate these functionalities into your applications to gain valuable insights about your data.
			</section>
			<section className='features'>
				<div className='feature'>
					<h1>Easy to implement</h1>
					<p>Our API is designed to be easy to implement, with simple and intuitive documentation and a user-friendly interface.
						Whether you're a seasoned developer or just starting out, you'll find that integrating our API into your project is straightforward and hassle-free.
						With our easy-to-use API, you can quickly and easily add powerful data analysis and comparison features to your application,
						without having to spend countless hours writing complex code.</p>
				</div>
				<div className='feature'>
					<h1>Open source</h1>
					Our API is open source, meaning that you can access and modify the source code to fit your specific needs.
					With our open source API, you can easily integrate its functionalities into your own applications and customize them as necessary.
				</div>
				<div className='feature'>
					<h1>Developer friendly</h1>
					Our API is developer-friendly, with easy implementation tools and a playground for testing and generating code in multiple languages.
					No customer support is provided, but our resources make integration quick and hassle-free.
				</div>
			</section>
		</div>
	);
}

export default Home;