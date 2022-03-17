import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Answer } from "../interfaces/answer";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function ShortAnswerResponse({
    expectedAnswer,
    questionId
}: {
    expectedAnswer: string;
    questionId: number;
}): JSX.Element {
    const [answer, changeAnswer] = useState<Answer>({
        questionId: questionId,
        text: "",
        correct: false,
        submitted: false
    });

    function updateAnswer(event: ChangeEvent) {
        changeAnswer({
            ...answer,
            text: event.target.value,
            correct: event.target.value === expectedAnswer
        });
    }

    function submissionControl() {
        changeAnswer({
            ...answer,
            submitted: !answer.submitted
        });
    }

    return (
        <div>
            <Form.Group data-testid="shortanswerinput">
                <Form.Control value={answer.text} onChange={updateAnswer} />
            </Form.Group>
            {answer.submitted && answer.correct && (
                <div data-testid="correct">✔️</div>
            )}
            {answer.submitted && !answer.correct && (
                <div data-testid="incorrect">❌</div>
            )}
            <Button onClick={submissionControl} disabled={answer.submitted}>
                Submit
            </Button>
        </div>
    );
}
