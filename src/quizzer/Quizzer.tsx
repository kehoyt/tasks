import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import quizData from "../data/quizzes.json";
// import { Question } from "../interfaces/question";
import { Col } from "react-bootstrap";
import { QuizComponent } from "./QuizComponent";

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
            <div>
                {quizzes.map((quizElt: Quiz) => (
                    <div key={quizElt.id} style={{ padding: "8px" }}>
                        <QuizComponent quiz={quizElt}></QuizComponent>
                    </div>
                ))}
            </div>
        </div>
    );
}
