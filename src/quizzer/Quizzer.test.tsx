import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
import userEvent from "@testing-library/user-event";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
    });
    test("Quizzer has a list of quizzes from test data", () => {
        expect(screen.getAllByTestId("quiz-component")).toHaveLength(3);
    });
    test("Can show quiz questions", () => {
        const comps = screen.getAllByTestId("quiz-title");
        const comp1 = comps[0];
        comp1.click();
        expect(screen.getByTestId("questionsView")).toBeInTheDocument();
        const showhide = screen.getByRole("button", { name: "Hide Questions" });
        expect(showhide).toBeInTheDocument();
    });
    test("Can hide quiz questions", () => {
        const comps = screen.getAllByTestId("quiz-title");
        const comp1 = comps[0];
        comp1.click();
        const showhide = screen.getByRole("button", {
            name: "Hide Questions"
        });
        showhide.click();
        expect(showhide).not.toBeInTheDocument();
        expect(screen.queryByText("Questions:")).not.toBeInTheDocument();
    });
    test("Can check short answers", () => {
        const comps = screen.getAllByTestId("quiz-title");
        const comp1 = comps[0];
        comp1.click();
        const inputBox = screen.getByRole("textbox");
        expect(inputBox).toBeInTheDocument();
        userEvent.type(inputBox, "4");
        const submit = screen.getByRole("button", { name: "Submit" });
        submit.click();
        expect(screen.getByTestId("correct")).toBeInTheDocument();
    });
    test("Can check multiple choice answers", () => {
        const comps = screen.getAllByTestId("quiz-title");
        const comp2 = comps[1];
        comp2.click();
        const mcBox = screen.queryAllByRole("combobox");
        userEvent.selectOptions(mcBox[1], "Kanye");
        const submit = screen.getAllByRole("button", { name: "Submit" });
        submit[1].click();
        expect(screen.queryByTestId("correct")).not.toBeInTheDocument();
        expect(screen.getByTestId("incorrect")).toBeInTheDocument();
        //gives correct response even if not changed
        submit[0].click();
        expect(screen.queryByTestId("correct")).not.toBeInTheDocument();
    });
    test("Can see total points earned", () => {
        const comps = screen.getAllByTestId("quiz-title");
        const comp3 = comps[2];
        comp3.click();
        const points = screen.getByTestId("points-earned");
        const shortAnswers = screen.getAllByRole("textbox");
        const multipleChoice = screen.getAllByRole("combobox");
        const submit = screen.getAllByRole("button", { name: "Submit" });

        expect(points.textContent?.includes("0"));
        userEvent.type(shortAnswers[0], "4");
        submit[0].click();
        expect(points.textContent?.includes("5"));
        userEvent.type(shortAnswers[1], "black");
        submit[1].click();
        expect(points.textContent?.includes("5"));
        userEvent.selectOptions(multipleChoice[0], "apple");
        submit[2].click();
        expect(points.textContent?.includes("5"));
        userEvent.selectOptions(multipleChoice[1], "circle");
        submit[3].click();
        expect(points.textContent?.includes("7"));
    });
});
