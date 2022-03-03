import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, changeType] = useState<QuestionType>("short_answer_question");

    function changeQuestionType(): void {
        if (type === "short_answer_question") {
            changeType("multiple_choice_question");
        } else {
            changeType("short_answer_question");
        }
    }

    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            {type === "short_answer_question" && <div>Short Answer</div>}
            {type === "multiple_choice_question" && <div>Multiple Choice</div>}
        </div>
    );
}
