import NavBar from './components/universalComp/NavBar';
import Footer from './components/universalComp/Footer';
import Routes from './config/routes';

function App() {
	return (
		<div>
			<NavBar />
			<div id="app"><Routes /></div>
			<Footer />
		</div>
	);
}

export default App;
