import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { QuizAnswer } from "../interfaces/quizanswer";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function ShortAnswerResponse({
    expectedAnswer,
    questionId,
    updateQuizAnswers,
    points
}: {
    expectedAnswer: string;
    questionId: number;
    updateQuizAnswers: (answer: QuizAnswer) => void;
    points: number;
}): JSX.Element {
    const [answer, changeAnswer] = useState<QuizAnswer>({
        questionId: questionId,
        text: "",
        correct: "" === expectedAnswer,
        submitted: false,
        points: points
    });

    function updateAnswer(event: ChangeEvent) {
        const newAns = {
            ...answer,
            text: event.target.value,
            correct: event.target.value === expectedAnswer
        };
        changeAnswer(newAns);
    }

    function submissionControl() {
        const newAns = {
            ...answer,
            submitted: !answer.submitted
        };
        changeAnswer(newAns);
        updateQuizAnswers(newAns);
    }

    return (
        <div>
            <Form.Group data-testid="shortanswerinput">
                <Form.Control
                    value={answer.text}
                    onChange={updateAnswer}
                    disabled={answer.submitted}
                />
            </Form.Group>
            {answer.submitted && answer.correct && (
                <div data-testid="correct">✔️</div>
            )}
            {answer.submitted && !answer.correct && (
                <div data-testid="incorrect">❌</div>
            )}
            <div style={{ textAlign: "right" }}>
                <Button
                    onClick={submissionControl}
                    disabled={answer.submitted}
                    data-testid="submit-answer"
                >
                    Submit
                </Button>{" "}
            </div>
        </div>
    );
}
