import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import { MCResponse } from "./MCResponse";
import { ShortAnswerResponse } from "./ShortAnswerResponse";

// type ChangeEvent = React.ChangeEvent<
//     HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
// >;

export function QuizComponent({ quiz }: { quiz: Quiz }): JSX.Element {
    const [showMore, toggleShowMore] = useState<boolean>(false);

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
                <div>
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
                                ></ShortAnswerResponse>
                            )}
                            {question.type === "multiple_choice_question" && (
                                <MCResponse
                                    expectedAnswer={question.expected}
                                    options={question.options}
                                ></MCResponse>
                            )}
                        </Col>
                    ))}
                    <Button
                        onClick={() => {
                            toggleShowMore(false);
                        }}
                    >
                        Hide Questions
                    </Button>
                </div>
            )}
            {/* <Button
                onClick={() => {
                    console.log("clicked");
                }}
            >
                View Quiz
            </Button> */}
            {/* 
                        {quiz.questions.map((question: Question) => (
                            <div key={question.id}>{question.name}</div>
                        ))} */}
        </div>
    );
}
