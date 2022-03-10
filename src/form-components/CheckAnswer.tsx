import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
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
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Control value={userAnswer} onChange={updateAnswer} />
            </Form.Group>
            <div>{expectedAnswer === userAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
