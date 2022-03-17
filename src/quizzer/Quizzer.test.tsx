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
        expect(screen.getByText("Questions:")).toBeInTheDocument();
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
        expect(screen.getByTestId("incorrect")).toBeInTheDocument();
        userEvent.type(inputBox, "4");
        expect(screen.getByTestId("correct")).toBeInTheDocument();
    });
    test("Can check multiple choice answers", () => {
        const comps = screen.getAllByTestId("quiz-title");
        const comp2 = comps[1];
        comp2.click();
        const mcBox = screen.queryAllByRole("combobox");
        // one correct, one incorrect
        expect(screen.getByTestId("correct")).toBeInTheDocument();
        expect(screen.getByTestId("incorrect")).toBeInTheDocument();
        // both incorrect
        userEvent.selectOptions(mcBox[1], "Kanye");
        expect(screen.queryByTestId("correct")).not.toBeInTheDocument();
        expect(screen.getAllByTestId("incorrect")).toHaveLength(2); //toBeInTheDocument();
        //both correct
        userEvent.selectOptions(mcBox[0], "Spongebob Squarepants");
        userEvent.selectOptions(mcBox[1], "Taylor");
        expect(screen.queryAllByTestId("correct")).toHaveLength(2); //toBeInTheDocument();
        expect(screen.queryByTestId("incorrect")).not.toBeInTheDocument();
    });
});
