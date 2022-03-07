import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, changeAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, changeAttemptsRequested] = useState<number>(0);

    function changeRequest(event: ChangeEvent) {
        if (!isNaN(parseInt(event.target.value)) && event.target.value !== "") {
            changeAttemptsRequested(parseInt(event.target.value) || 0);
        }
    }

    function changeAttempts(attempts: number) {
        changeAttemptsLeft(attempts);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Current attempts: {attemptsLeft}</div>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: ChangeEvent) => changeRequest(event)}
                />
                <Button
                    onClick={() => changeAttempts(attemptsLeft - 1)}
                    disabled={attemptsLeft <= 0}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        changeAttempts(attemptsLeft + attemptsRequested)
                    }
                >
                    gain
                </Button>
            </Form.Group>
        </div>
    );
}
