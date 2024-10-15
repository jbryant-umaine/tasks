import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [answerShown, showAnswer] = useState<boolean>(false);

    return (
        <div>
            {answerShown && (
                <div>
                    The answer is <span data-testid="question-answer">42</span>.
                </div>
            )}
            <Button
                onClick={() => {
                    showAnswer(!answerShown);
                }}
            >
                Reveal Answer
            </Button>
            ;
        </div>
    );
}
