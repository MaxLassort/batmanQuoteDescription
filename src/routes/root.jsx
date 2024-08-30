import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router-dom";


export default function Root() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className="d-flex justify-content-end">
                    <Navbar.Brand href="/batman">BatmanRandomQuote</Navbar.Brand>
                    <Navbar.Brand href="/markdown">Markdown</Navbar.Brand>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}