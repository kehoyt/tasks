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
        expect(screen.getAllByTestId("quiz-component")).toHaveLength(3); //.toBeInTheDocument();
    });
});
