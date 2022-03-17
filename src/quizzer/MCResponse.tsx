import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MCResponse({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, changeAnswer] = useState<string>(options[0]);

    return (
        <div>
            <Form.Select
                data-testid="mcinput"
                value={answer}
                onChange={(event: ChangeEvent) =>
                    changeAnswer(event.target.value)
                }
            >
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            <div data-testid="correct">{expectedAnswer === answer && "✔️"}</div>
            <div data-testid="incorrect">
                {expectedAnswer !== answer && "❌"}
            </div>
        </div>
    );
}