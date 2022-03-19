import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { QuizAnswer } from "../interfaces/quizanswer";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import { MCResponse } from "./MCResponse";
import { ShortAnswerResponse } from "./ShortAnswerResponse";

// type ChangeEvent = React.ChangeEvent<
//     HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
// >;

export function QuizComponent({ quiz }: { quiz: Quiz }): JSX.Element {
    const [showMore, toggleShowMore] = useState<boolean>(false);
    const [totalPoints, updatePoints] = useState<number>(0);
    const [quizAnswers, changeAnswers] = useState<QuizAnswer[]>([]);

    function updateQuizAnswers(answer: QuizAnswer): void {
        const newAnswers = [...quizAnswers, answer];
        changeAnswers(newAnswers);
        sumPoints(newAnswers);
    }

    function sumPoints(updatedAnswers: QuizAnswer[]): void {
        const sum = updatedAnswers.reduce(
            (currentSum: number, answer: QuizAnswer) =>
                answer.correct ? currentSum + answer.points : currentSum + 0,
            0
        );
        updatePoints(sum);
    }

    return (
        <Container
            data-testid="quiz-component"
            style={{ border: "1px solid black", padding: "8px" }}
        >
            <h2>
                <span
                    data-testid="quiz-title"
                    onClick={() => {
                        toggleShowMore(true);
                    }}
                    style={{ color: "blue", textDecoration: "underline" }}
                >
                    {quiz.title}:
                </span>
            </h2>
            <Container style={{ padding: "8px" }}>{quiz.description}</Container>
            {showMore && (
                <div data-testid="questionsView">
                    {quiz.questions.map((question: Question, index: number) => (
                        <div key={question.id}>
                            <div>
                                Question {index + 1}: {question.name}
                            </div>
                            <p>
                                {" "}
                                {question.body} ({question.points} points)
                            </p>
                            {/* <p style={{ textAlign: "right" }}>
                                {"points: " + question.points}
                            </p> */}
                            {question.type === "short_answer_question" && (
                                <ShortAnswerResponse
                                    expectedAnswer={question.expected}
                                    questionId={question.id}
                                    updateQuizAnswers={updateQuizAnswers}
                                    points={question.points}
                                ></ShortAnswerResponse>
                            )}
                            {question.type === "multiple_choice_question" && (
                                <MCResponse
                                    expectedAnswer={question.expected}
                                    options={question.options}
                                    questionId={question.id}
                                    updateQuizAnswers={updateQuizAnswers}
                                    points={question.points}
                                ></MCResponse>
                            )}
                        </div>
                    ))}
                    <div
                        data-testid="points-earned"
                        style={{ textAlign: "left", padding: "4px" }}
                    >
                        <p>points earned: {totalPoints}</p>
                    </div>
                    <Button
                        onClick={() => {
                            toggleShowMore(false);
                        }}
                    >
                        Hide Questions
                    </Button>
                </div>
            )}
            <Container style={{ textAlign: "right" }}>
                number of questions: {quiz.length}
            </Container>
        </Container>
    );
}
