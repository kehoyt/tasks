import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function ShortAnswerResponse({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, changeUserAnswer] = useState<string>("");

    function updateAnswer(event: ChangeEvent) {
        changeUserAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group data-testid="shortanswerinput">
                <Form.Control value={userAnswer} onChange={updateAnswer} />
            </Form.Group>
            {expectedAnswer === userAnswer && (
                <div data-testid="correct">✔️</div>
            )}
            {expectedAnswer !== userAnswer && (
                <div data-testid="incorrect">❌</div>
            )}
        </div>
    );
}
