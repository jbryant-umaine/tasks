import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempt] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    return (
        <div>
            <p>Attempts: {attempts}</p>
            <Button
                disabled={inProgress}
                onClick={() => {
                    setAttempt(attempts + 1);
                }}
            >
                Mulligan
            </Button>

            <Button
                disabled={inProgress || attempts === 0}
                onClick={() => {
                    setInProgress(true);
                    setAttempt(attempts - 1);
                }}
            >
                Start Quiz
            </Button>
            <Button
                disabled={!inProgress}
                onClick={() => {
                    setInProgress(false);
                }}
            >
                Stop Quiz
            </Button>
        </div>
    );
}
