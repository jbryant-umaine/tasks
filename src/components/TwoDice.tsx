import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDice, setLeftDice] = useState<number>(3);
    const [rightDice, setRightDice] = useState<number>(2);

    let gameMessage = "";

    if (leftDice === 1 && rightDice === 1) gameMessage = "Lose";
    else if (leftDice === rightDice) gameMessage = "Win";

    return (
        <div>
            <span data-testid="left-die">{leftDice}</span>
            <span data-testid="right-die">{rightDice}</span>
            <span>{gameMessage}</span>
            <Button
                onClick={() => {
                    setLeftDice(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRightDice(d6());
                }}
            >
                Roll Right
            </Button>
        </div>
    );
}
