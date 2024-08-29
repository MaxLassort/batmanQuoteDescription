import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';


export class Character {
    constructor(data) {
        this.id = data.id;
        this.name = data.attributes.alias;
        this.description = data.attributes.description
    }

}

function App() {

    const [index, setIndex] = useState(1);
    const [charact, setCharact] = useState(new Character(
        {
            id: 1,
            attributes: {
                alias: "Batman",
                description: "The Dark Knight and protector of Gotham City."
            }
        }
    ));

    async function handleClick() {
        setIndex(Math.floor(Math.random() * 82));
        let newCharacter = await getBatmanCharacter(index + 1)
        setCharact(newCharacter)
        console.log(newCharacter, charact)
    }

    async function getBatmanCharacter(id) {
        const response = await fetch(`https://api.batmanapi.com/v1/characters/${id}`);
        const charact = await response.json();
        return new Character(charact.data)

    }

    return (

        <Container fluid className="bg-light d-flex align-items-center justify-content-center"
                   style={{height: '100vh'}}>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <div id="quote-box" className="p-3 bg-secondary border rounded padding" style={{width:"400px", height:"200px"}}>
                        <h1 id="author">{charact.name}</h1>
                        <p id="text">{charact.description}</p>
                        <div className="d-flex justify-content-between">
                            <a href="twitter.com/intent/tweet." id="tweet-quote"><Button className="btn btn-primary"><i
                                className="bi bi-twitter-x"></i></Button></a>
                            <Button id="new-quote" className="btn btn-primary" onClick={handleClick}>Change
                                Character</Button>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>

    );
}

export default App;
