import React from "react";
import { Button } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";

export function QuizComponent({ quiz }: { quiz: Quiz }): JSX.Element {
    return (
        <div
            data-testid="quiz-component"
            style={{ border: "1px solid black", padding: "4px" }}
        >
            <h2>
                <span
                    onClick={() => {
                        console.log("Try to view");
                    }}
                    style={{ color: "blue" }}
                >
                    {quiz.title}:
                </span>
            </h2>
            {quiz.description + ", number of questions: " + quiz.length}
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
