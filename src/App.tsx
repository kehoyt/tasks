import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Katie Hoyt - UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Hello World!</p>
            <p>
                Edit <code>src/App.tsx</code> and save! This page will
                automatically reload.
            </p>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="col1-header">
                                Task 3: HTML and CSS
                            </h1>
                            <ol>
                                <li>Add a header</li>
                                <li>Add an image with alt text</li>
                                <li>Add a list with at least 3 elts</li>
                                <li>Change bg color of header</li>
                                <li>Add bootstrap button w text</li>
                                <li>
                                    Make button log Hello World! when clicked
                                </li>
                                <li>Have a 2-column layout on the page</li>
                                <li>Put a red rectangle in each col</li>
                            </ol>
                        </Col>
                        <Col>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                            <img
                                src="../Pictures/fine.jpg"
                                alt="This is fine."
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
