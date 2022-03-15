import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import quizData from "../data/quizzes.json";
import { Question } from "../interfaces/question";
import { Col } from "react-bootstrap";

// typecasted the test data:
const QUIZDATA: Quiz[] = quizData as Quiz[];

export function Quizzer(): JSX.Element {
    const QUIZZES = QUIZDATA.map(
        (quiz): Quiz => ({
            ...quiz,
            questions: [...quiz.questions]
        })
    );

    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);

    return (
        <div>
            <h3>Quizzer</h3>
            <Col>
                {quizzes.map((quiz: Quiz) => (
                    <div key={quiz.id}>
                        {quiz.title}
                        {quiz.questions.map((question: Question) => (
                            <div key={question.id}>{question.name}</div>
                        ))}
                    </div>
                ))}
            </Col>
        </div>
    );
}
