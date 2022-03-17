import React, { useState } from "react";
// import { Col, Container, Row, Button } from "react-bootstrap";
// import foxy from "./foxy.jpg";
import sketch from "./sketch.jpeg";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
import { Quizzer } from "./quizzer/Quizzer";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    const [visible, setVisibility] = useState<boolean>(false);

    return (
        <div className="App">
            <header className="App-header">
                Katie Hoyt - UD CISC275 with React Hooks and TypeScript
            </header>
            <Quizzer></Quizzer>
            <hr></hr>
            <img src={sketch} width={500}></img>
            <hr></hr>
            Completed tasks:
            <ul>
                <li>
                    can see a list of quizzes (title, description, and number of
                    questions)
                </li>
                <li>
                    Users can select a specific quiz to see the questions,
                    including the question’s name, body, and points
                </li>
                <li>
                    Quiz questions can be of AT LEAST two types: a short answer
                    question or multiple choice question
                </li>
            </ul>
            <Button onClick={() => setVisibility(!visible)}>
                {visible ? "Hide" : "Show"}
            </Button>
            {/* <hr></hr> */}
            {visible && (
                <div>
                    <CheckAnswer expectedAnswer="42"></CheckAnswer>
                    <hr></hr>
                    <GiveAttempts></GiveAttempts>
                    <hr></hr>
                    <EditMode></EditMode>
                    <hr></hr>
                    <ChangeColor></ChangeColor>
                    <hr></hr>
                    <MultipleChoiceQuestion
                        options={["a", "b", "c"]}
                        expectedAnswer="b"
                    ></MultipleChoiceQuestion>
                    <hr></hr>
                    <DoubleHalf></DoubleHalf>
                    <hr></hr>
                    <ChooseTeam></ChooseTeam>
                    <hr></hr>
                    <ColoredBox></ColoredBox>
                    <hr></hr>
                    <ShoveBox></ShoveBox>
                    <hr></hr>
                    <Counter></Counter>
                    <hr />
                    <RevealAnswer></RevealAnswer>
                    <hr />
                    <StartAttempt></StartAttempt>
                    <hr />
                    <TwoDice></TwoDice>
                    <hr />
                    <ChangeType></ChangeType>
                    <hr />
                    <CycleHoliday></CycleHoliday>
                </div>
            )}
        </div>
    );
}

export default App;
