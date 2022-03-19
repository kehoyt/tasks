import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
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
        <div
            data-testid="quiz-component"
            style={{ border: "1px solid black", padding: "4px" }}
        >
            <h2>
                <span
                    data-testid="quiz-title"
                    onClick={() => {
                        toggleShowMore(true);
                    }}
                    style={{ color: "blue" }}
                >
                    {quiz.title}:
                </span>
            </h2>
            {quiz.description + ", number of questions: " + quiz.length}
            {showMore && (
                <div data-testid="questionsView">
                    Questions:
                    {quiz.questions.map((question: Question) => (
                        <Col key={question.id}>
                            {question.name}

                            {question.body}

                            {"points: " + question.points}

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
                        </Col>
                    ))}
                    <Row data-testid="points-earned">
                        points earned: {totalPoints}
                    </Row>
                    {/* {quizAnswers.map((answer: QuizAnswer) => (
                        <Row key={answer.text}>
                            {answer.correct && <div>{answer.points}</div>}
                        </Row>
                    ))} */}
                    <Button
                        onClick={() => {
                            toggleShowMore(false);
                        }}
                    >
                        Hide Questions
                    </Button>
                </div>
            )}
        </div>
    );
}
