import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const QUESTION_TRANSITIONS: Record<QuestionType, QuestionType> = {
    ["short_answer_question"]: "multiple_choice_question",
    ["multiple_choice_question"]: "short_answer_question",
};

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    const buttonText =
        questionType === "short_answer_question" ? "Short Answer" : (
            "Multiple Choice"
        );

    return (
        <div>
            <div>{buttonText}</div>
            <Button
                onClick={() => {
                    setQuestionType(QUESTION_TRANSITIONS[questionType]);
                }}
            >
                Change Type
            </Button>
        </div>
    );
}
