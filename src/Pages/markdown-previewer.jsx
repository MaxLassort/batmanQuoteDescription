import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState,useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
export function Markdown(){
    const markdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

    `
    const [input, setInput] = useState(markdown)

    function handleChange(event){
        setInput(event.target.value)
    }

    return (
        <div>
            <Container fluid className="d-flex justify-content-center align-items-center flex-column" style={{height:"100vh", width: "100%"}}>
                <Row xl={12} className="bg-secondary">
                        <textarea name="editor" id="editor" onChange={handleChange} value={input} cols="100"/>
                </Row>
                <Row >
                    <Col>
                        <div id="preview" style={{width: "500px", height: "500px"}}>
                            <ReactMarkdown>{input}</ReactMarkdown>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Markdown;