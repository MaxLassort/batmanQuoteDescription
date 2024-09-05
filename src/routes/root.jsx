import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router-dom";


export default function Root() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className="d-flex justify-content-end">
                    <Navbar.Brand href="/batman">Batman Random Quote</Navbar.Brand>
                    <Navbar.Brand href="/markdown">Markdown</Navbar.Brand>
                    <Navbar.Brand href="/drumMachine">Drum Machine</Navbar.Brand>
                    <Navbar.Brand href="/calculator">Calculator</Navbar.Brand>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}