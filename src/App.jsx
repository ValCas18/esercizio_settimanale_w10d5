import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Container>
					<NavBar />
				</Container>
			</BrowserRouter>
		</div>
	);
}

export default App;
