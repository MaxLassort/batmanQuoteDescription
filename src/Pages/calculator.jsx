import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from 'react';


export function Calculator() {
    const [result, setResult] = useState("0")

    const clear = () =>{
        setResult("0")
    }
    const addValue=(event)=>{

        setResult(prevValue => {
            // vérification du nombre de 0 après la virgule

            if(prevValue.length > 1){

                if( event.target.value === '.'){
                    if(!isLastNumberContainDot(prevValue)){
                        return prevValue + event.target.value
                    } else {
                        return prevValue;

                    }
                }
                if(prevValue.slice(-1) === '.' && event.target.value === '.'){
                    return prevValue;
                }
                if(isOperator(event.target.value) && isOperator(prevValue.slice(-1))){

                    if(event.target.value === '-' ){
                        return prevValue + event.target.value
                    }
                    if(isOperator(prevValue.slice(-2,-1))){
                        return prevValue.slice(0, -2) + event.target.value
                    }

                    return prevValue.slice(0, -1) + event.target.value
                };

            }
            // ajout de la valeur
            if(prevValue !== "0"){
                return prevValue + event.target.value
            }
            else {
                return event.target.value
            }
        });
    }
    const isLastNumberContainDot = (result) => {
        let number = []
        for(let i = result.length -1 ; i>=0 ; i--){
            if(isOperator(result[i])){
                break;
            }
           number.push(result[i])
        }
       return number.includes('.')
    }

    const calculate = ()=> {
        setResult(eval(result))
    }


    const isOperator = (char) => {
        return char === 'x' || char === '+' || char === "*" || char === '/' || char === "-"
    }
    return (
        <Container fluid className="d-flex justify-content-center align-items-center flex-column"
                   style={{height: "100vh", width: "100%"}}>
            <div>
                <button  id="clear" value="AC"  onClick={clear}>AC</button>
                <button id="divide" value="/"  onClick={addValue}>/</button>
                <button id="multiply" value="*"  onClick={addValue}>x</button>
                <button id="subtract" value="-"  onClick={addValue}>-</button>
                <button id="add" value="+" onClick={addValue}>+</button>
                <button id="decimal" value="." onClick={addValue}>.</button>
                <button id="equals" value="=" onClick={calculate}
                       >=
                </button>
                <button id="zero" value="0" onClick={addValue}>0</button>
                <button id="one" value="1" onClick={addValue}>1</button>
                <button id="two" value="2" onClick={addValue}>2</button>
                <button id="three" value="3" onClick={addValue}>3</button>
                <button id="four" value="4" onClick={addValue}>4</button>
                <button id="five" value="5" onClick={addValue}>5</button>
                <button id="six" value="6" onClick={addValue}>6</button>
                <button id="seven" value="7" onClick={addValue}>7</button>
                <button id="eight" value="8" onClick={addValue}>8</button>
                <button id="nine" value="9" onClick={addValue}>9</button>
                <button id="display" disabled>{result}</button>
            </div>

        </Container>
    );
}

export default Calculator;