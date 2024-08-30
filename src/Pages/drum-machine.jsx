import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

export function DrumMachine() {

    useEffect(() => {
        document.addEventListener('keypress', handleKeyPress);

        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        };
    }, []);
    function handleKeyPress(event) {
        let audio = document.getElementById(event.key.toUpperCase())
        if(audio !== null){
            audio.play()
        }
    }
    const [text, setText] = useState('')
    const handleClick = (event)=> {
        playAudio(event.target.children[0])
    }
    const playAudio = (audio) =>{
        audio.play();
        setText(audio.id)
    }
    return (
        <Container fluid className="d-flex justify-content-center align-items-center flex-column"
                   style={{height: "100vh", width: "100%"}}>
            <div id="drum-machine">
                <Container className="bg-primary" style={{width: "500px"}}>
                    <Row>
                        <Col xl={5}>
                            <Container className="p-3">
                                <Button id="drum-q" className="drum-pad btn btn-secondary m-1" style={{width: 40}} onClick={handleClick}>Q
                                    <audio
                                        className="clip" id="Q"
                                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3">
                                    </audio>
                                </Button>
                                <Button id="drum-w" className="drum-pad btn btn-secondary m-1"
                                        style={{width: 40}} onClick={handleClick}>W <audio
                                    className="clip" id="W"
                                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                                </Button>
                                <Button id="drum-e" className="drum-pad btn btn-secondary m-1"
                                        style={{width: 40}} onClick={handleClick}>E
                                    <audio className="clip" id="E"
                                           src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                                </Button>
                                <Button id="drum-a" className="drum-pad btn btn-secondary m-1"
                                        style={{width: 40}} onClick={handleClick}>A
                                    <audio className="clip" id="A"
                                           src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                                </Button>
                                <Button id="drum-s" className="drum-pad btn btn-secondary m-1" style={{width: 40}} onClick={handleClick}>S
                                    <audio className="clip" id="S"
                                           src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                                </Button>
                                <Button id="drum-d" className="drum-pad btn btn-secondary m-1"
                                        style={{width: 40}} onClick={handleClick}>D
                                    <audio className="clip" id="D"
                                           src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                                </Button>
                                <Button id="drum-z" className="drum-pad btn btn-secondary m-1"
                                        style={{width: 40}} onClick={handleClick}>Z
                                    <audio className="clip" id="Z"
                                           src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                                </Button>
                                <Button id="drum-x" className="drum-pad btn btn-secondary m-1"
                                        style={{width: 40}} onClick={handleClick}>X
                                    <audio className="clip" id="X"
                                           src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                                </Button>
                                <Button id="drum-c" className="drum-pad btn btn-secondary m-1" style={{width: 40}} onClick={handleClick}>C
                                    <audio className="clip" id="C"
                                           src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                                </Button>
                            </Container>
                        </Col>
                        <Col xl={6} className="d-flex justify-content-center align-items-center">
                            <div id="display">
                                <h1>{text}</h1>
                            </div>
                        </Col>
                    </Row>


                </Container>
            </div>
        </Container>
    );
}

export default DrumMachine;