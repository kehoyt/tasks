import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftVal, changeLeftVal] = useState<number>(6);
    const [rightVal, changeRightVal] = useState<number>(2);

    function rollLeft(): void {
        changeLeftVal(d6());
    }

    function rollRight(): void {
        changeRightVal(d6());
    }

    return (
        <div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            Left Die: <span data-testid={"left-die"}>{leftVal}</span>, Right
            Die: <span data-testid={"right-die"}>{rightVal}</span>
            <div>
                {leftVal === 1 && rightVal === 1 ? "You Lose :(" : ""}
                {leftVal === rightVal && leftVal !== 1 && rightVal !== 1
                    ? "You Win :)"
                    : ""}
            </div>
        </div>
    );
}
