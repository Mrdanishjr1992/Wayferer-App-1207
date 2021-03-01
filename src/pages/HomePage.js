import Carousel from '../components/universalComp/Carousel';

const HomePage = () => {
	return (
		<div id="home-container">
			<div id="carousel-container">
				<Carousel />
			</div>

			<div className="m-6">
				<h2 className="text-4xl">
					Wayfarer is an application, where we provide cities of the world and
					the environment to contribute comments and reviews of these locations.
				</h2>
			</div>
			<div id="home-item-container">
				<article className="home-item">
					<h2 className="text-4xl mb-5">Topic 1</h2>
					<p>
						Nulla ea ullamco ad id anim et. Mollit ullamco est commodo aute
						reprehenderit elit voluptate. Lorem est amet nulla consequat cillum
						elit in cillum sunt occaecat aliqua consequat. Voluptate fugiat
						laborum nostrud quis ex anim enim est dolor enim nulla. Ullamco
						culpa occaecat tempor mollit ut ex et eiusmod.
					</p>
				</article>
				<article className="home-item">
					<h2 className="text-4xl mb-5">Topic 2</h2>
					<p>
						Nulla ea ullamco ad id anim et. Mollit ullamco est commodo aute
						reprehenderit elit voluptate. Lorem est amet nulla consequat cillum
						elit in cillum sunt occaecat aliqua consequat. Voluptate fugiat
						laborum nostrud quis ex anim enim est dolor enim nulla. Ullamco
						culpa occaecat tempor mollit ut ex et eiusmod.
					</p>
				</article>
				<article className="home-item">
					<h2 className="text-4xl mb-5">Topic 3</h2>
					<p>
						Nulla ea ullamco ad id anim et. Mollit ullamco est commodo aute
						reprehenderit elit voluptate. Lorem est amet nulla consequat cillum
						elit in cillum sunt occaecat aliqua consequat. Voluptate fugiat
						laborum nostrud quis ex anim enim est dolor enim nulla. Ullamco
						culpa occaecat tempor mollit ut ex et eiusmod.
					</p>
				</article>
			</div>
		</div>
	);
};

export default HomePage;
