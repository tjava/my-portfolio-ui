import './App.css';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import Contact from './components/Contact/Contact';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

const NoMatchRoute = () => <div>404 Page Not Found.</div>;
function App() {
return (
	<Router>
		<div className="container">
			<nav>
				<ul className="navbarContactBox">
					<Link to="/"><li className="navbarContact">Home</li></Link>		
					<Link to="/projects"><li className="navbarContact">Projects</li></Link>
					<Link to="/skills"><li className="navbarContact">Skills</li></Link>
					<Link to="/contact"><li className="navbarContact">Contact</li></Link>
				</ul>
			</nav>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/skills" component={Skills} />
				<Route path="/projects" exact component={Projects} />
				<Route path="/projects/:slug" component={ProjectDetail} />
				<Route path="/contact" component={Contact} />
				<Route component={NoMatchRoute} />
			</Switch>
		</div>
	</Router>
);
}

export default App;
