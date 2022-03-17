import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";

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
});
