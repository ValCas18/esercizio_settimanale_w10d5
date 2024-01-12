import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container fluid>
				<img
					src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Sun-and-Moon-PNG/Sun_PNG_Clipart.png?m=1596789525"
					style={{ width: "100px", height: "55px" }}
					alt="logo app"
					className="object-fit-contain"
				/>
				<Navbar.Brand>
					<h1>Your Weather App --&gt;</h1>
				</Navbar.Brand>
				<Form className="d-flex">
					<Form.Control type="search" placeholder="Search A Location" className="me-2" aria-label="Search" />
					<Button variant="outline-success">Search</Button>
				</Form>
			</Container>
		</Navbar>
	);
}

export default NavScrollExample;
