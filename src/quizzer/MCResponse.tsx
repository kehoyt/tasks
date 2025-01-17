import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { QuizAnswer } from "../interfaces/quizanswer";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MCResponse({
    options,
    expectedAnswer,
    questionId,
    updateQuizAnswers,
    points
}: {
    options: string[];
    expectedAnswer: string;
    questionId: number;
    updateQuizAnswers: (answer: QuizAnswer) => void;
    points: number;
}): JSX.Element {
    const [answer, changeAnswer] = useState<QuizAnswer>({
        questionId: questionId,
        text: options[0],
        correct: options[0] === expectedAnswer,
        submitted: false,
        points: points
    });

    function updateAnswer(event: ChangeEvent) {
        changeAnswer({
            ...answer,
            text: event.target.value,
            correct: event.target.value === expectedAnswer
        });
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
            <Form.Select
                data-testid="mcinput"
                value={answer.text}
                onChange={updateAnswer}
                disabled={answer.submitted}
            >
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            {answer.submitted && answer.correct && (
                <div data-testid="correct">✔️</div>
            )}
            {answer.submitted && !answer.correct && (
                <div data-testid="incorrect">❌</div>
            )}
            <Button
                onClick={submissionControl}
                disabled={answer.submitted}
                data-testid="submit-answer"
            >
                Submit
            </Button>
        </div>
    );
}
