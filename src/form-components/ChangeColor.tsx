import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink"
];

export function ChangeColor(): JSX.Element {
    const [color, changeColor] = useState<string>("red");

    function updateColor(event: ChangeEvent) {
        changeColor(event.target.value);
    }
    // data-testid="colored-box"
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((colorMap: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        id=""
                        label={
                            <div
                                style={{
                                    backgroundColor: colorMap,
                                    display: "inline"
                                }}
                            >
                                {colorMap}
                            </div>
                        }
                        value={colorMap}
                        checked={color === colorMap}
                        onChange={(event: ChangeEvent) => updateColor(event)}
                        key={colorMap}
                    ></Form.Check>
                ))}
            </div>
            <span>
                You have chosen{" "}
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: color, display: "inline" }}
                >
                    {color}
                </div>
                .
            </span>
        </div>
    );
}
