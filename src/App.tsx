import React from "react";
import "./App.css";

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

            <div className="App-list" style={{ backgroundColor: "red" }}>
                <ul>
                    <li>Cake</li>
                    <li>Lobster</li>
                    <li>Pie</li>
                </ul>
            </div>

            <button
                className="btn btn-primary"
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </button>
        </div>
    );
}

export default App;
