import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Jacob Bryant. Hello World.
            </p>

            <h1>Cat</h1>

            <img
                width="500"
                height="500"
                src="https://cataas.com/cat"
                alt="cat"
            ></img>

            <ul>
                <li>Cake</li>
                <li>Lobster</li>
                <li>Pie</li>
            </ul>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "400px",
                                height: "400px",
                            }}
                        >
                            Column #1
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "400px",
                                height: "400px",
                            }}
                        >
                            Column #2
                        </div>
                    </Col>
                </Row>
            </Container>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
