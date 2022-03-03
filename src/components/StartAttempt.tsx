import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttemptsLeft] = useState<number>(4);
    const [isInProgress, setInProgress] = useState<boolean>(false);

    function newAttempt(): void {
        flipInProgress();
        setAttemptsLeft(attempts - 1);
    }

    function flipInProgress(): void {
        setInProgress(!isInProgress);
    }

    function mulligan(): void {
        setAttemptsLeft(attempts + 1);
    }

    return (
        <div>
            <Button
                onClick={newAttempt}
                disabled={isInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={flipInProgress} disabled={!isInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={isInProgress}>
                Mulligan
            </Button>
            <div>
                Attempts: {attempts}, in progress:{" "}
                {isInProgress ? "in progress" : "not in progress"}
            </div>
        </div>
    );
}
